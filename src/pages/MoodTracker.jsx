import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { Brain } from "lucide-react";
import Navbar from "../components/Navbar";
import HappyPerson from "../assets/images/moodtracker/mood-faces.png";
import Swal from "sweetalert2";

const apikey = import.meta.env.VITE_API_KEY;

function MoodTracker() {
  const navigate = useNavigate();

  const [mood, setMood] = useState("");
  const [notes, setNotes] = useState("");
  const [aiTip, setAiTip] = useState("");

  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const user = JSON.parse(localStorage.getItem("userInfo"));

  // Check if user is logged in
  useEffect(() => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please log in first!",
        confirmButtonColor: "#06b6d4",
        confirmButtonText: "Go to Login",
      }).then(() => navigate("/login"));
    }
  }, [user, navigate]);

  // Load today's entry if exists
  useEffect(() => {
    if (!user) return;
    const storedEntries = JSON.parse(localStorage.getItem("moodEntries")) || [];
    const todayEntry = storedEntries.find(
      (e) => e.userEmail === user.email && e.date === formattedDate
    );
    if (todayEntry) {
      setMood(todayEntry.mood);
      setNotes(todayEntry.note);
      setAiTip(todayEntry.aiTip);
    }
  }, [user, formattedDate]);

  const callOpenAIPAI = async () => {
    if (!user) return;

    if (!mood || !notes) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Entry",
        text: "Please select a mood and write your notes.",
        confirmButtonColor: "#06b6d4",
      });
      return;
    }

    const APIBody = {
      model: "gpt-3.5-turbo-instruct",
      prompt: `Write three very short motivational suggestions for someone feeling ${mood} today. Note: ${notes}`,
      max_tokens: 60,
      temperature: 0.7,
    };

    try {
      const res = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + apikey,
        },
        body: JSON.stringify(APIBody),
      });

      const data = await res.json();
      const suggestionText = data.choices[0].text.trim();
      setAiTip(suggestionText);

      const newEntry = {
        date: formattedDate,
        mood,
        note: notes,
        aiTip: suggestionText,
        userEmail: user.email,
      };

      const storedEntries = JSON.parse(localStorage.getItem("moodEntries")) || [];
      const updatedEntries = [
        ...storedEntries.filter(
          (e) => e.userEmail !== user.email || e.date !== formattedDate
        ),
        newEntry,
      ];
      localStorage.setItem("moodEntries", JSON.stringify(updatedEntries));

      Swal.fire({
        icon: "success",
        title: "Mood Logged!",
        text: "Your mood has been saved successfully.",
        confirmButtonColor: "#06b6d4",
      });

      setMood("");
      setNotes("");
    } catch (err) {
      console.error("AI API error:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch AI suggestions. Please try again.",
        confirmButtonColor: "#06b6d4",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen font-montserrat flex flex-col lg:flex-row gap-6 px-4 md:px-6 py-6">
       
        <div className="flex-1 flex flex-col gap-5">
         
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
            <Link to="/" className="flex items-center text-neutral-500">
              <MdArrowBack className="text-md mr-1" />
              <span>Home</span>
            </Link>
            <Link
              to="/profile"
              className="bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-md text-sm font-medium"
            >
              Go to Profile
            </Link>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              callOpenAIPAI();
            }}
            className="flex flex-col gap-4"
          >
           
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 flex items-center">
                <label
                  htmlFor="date"
                  className="text-sm font-medium text-gray-900 mr-2"
                >
                  Today:
                </label>
                <input
                  type="date"
                  value={formattedDate}
                  readOnly
                  id="date"
                  name="date"
                  className="flex-1 border-0 rounded-sm bg-white px-3 py-2 text-gray-900 focus:outline-none"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label
                  htmlFor="mood"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  What are you feeling today?
                </label>
                <select
                  id="mood"
                  name="mood"
                  onChange={(e) => setMood(e.target.value)}
                  value={mood}
                  className="w-full rounded-md bg-white py-2 px-3 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-cyan-600 cursor-pointer"
                >
                  <option value="">Select mood...</option>
                  <option value="happy">Happy 😊</option>
                  <option value="sad">Sad 😢</option>
                  <option value="angry">Angry 😡</option>
                  <option value="anxious">Anxious 😰</option>
                  <option value="calm">Calm 🧘‍♀️</option>
                  <option value="excited">Excited 🤩</option>
                  <option value="tired">Tired 😴</option>
                  <option value="lonely">Lonely 😔</option>
                  <option value="grateful">Grateful 🙏</option>
                  <option value="frustrated">Frustrated 😤</option>
                  <option value="focused">Focused 🎯</option>
                  <option value="hopeful">Hopeful 🌤️</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="notes"
                className="block text-sm font-medium text-gray-900 mb-1"
              >
                Daily Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows="3"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
                placeholder="Write your thoughts for today..."
                className="w-full rounded-md bg-white px-3 py-2 text-gray-900 outline-1 outline-gray-300 focus:outline-2 focus:outline-cyan-600"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
              <button
                type="button"
                className="text-neutral-500 border px-3 py-1 rounded hover:bg-cyan-600 hover:text-white transition-colors duration-300 w-full sm:w-auto"
                onClick={() => {
                  setMood("");
                  setNotes("");
                  setAiTip("");
                }}
              >
                Reset Entry
              </button>
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1 rounded transition-colors duration-300 w-full sm:w-auto"
              >
                Log Mood
              </button>
            </div>
          </form>

          {aiTip && (
            <div className="mt-5 bg-[#f4fcfa] border border-cyan-200 rounded-xl p-4">
              <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-3">
                <Brain className="text-teal-500" size="20px" /> AI suggestions...
              </h3>
              <ol className="list-decimal ml-5 text-sm">
                {aiTip.split(/(?=\d+\.)/).map((sentence, idx) => (
                  <li key={idx}>{sentence}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
        <div className="hidden lg:flex flex-1 justify-center items-center bg-cyan-50 rounded-lg p-4">
          <img
            src={HappyPerson}
            alt="mood face states"
            className="w-full h-auto max-w-md object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default MoodTracker;
