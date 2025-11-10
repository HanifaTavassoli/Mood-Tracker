import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { Brain } from "lucide-react";
import Navbar from "../components/Navbar";
import HappyPerson from "../assets/images/moodtracker/happy-person.png";
import Swal from "sweetalert2";
import { FaSpinner } from "react-icons/fa";

const apikey = import.meta.env.VITE_API_KEY;

function MoodTracker() {
  const navigate = useNavigate();

  const [mood, setMood] = useState("");
  const [notes, setNotes] = useState("");
  const [aiTip, setAiTip] = useState("");
  const [loading, setLoading] = useState(false);

  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const user = JSON.parse(localStorage.getItem("userInfo"));

  // Redirect if not logged in
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

  // Load today's saved entry
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

  // Handle logging mood + AI tips
  const logMoodHandler = () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please log in first!",
        confirmButtonColor: "#06b6d4",
      });
      return;
    }

    if (!mood || !notes) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Entry",
        text: "Please select a mood and write your notes.",
        confirmButtonColor: "#06b6d4",
      });
      return;
    }

    callOpenAIPAI();
  };

  // ✅ Modern OpenAI Chat API
  const callOpenAIPAI = async () => {
    if (!user || !mood || !notes) return;
    setLoading(true);

    const APIBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a supportive wellness coach offering short, kind suggestions.",
        },
        {
          role: "user",
          content: `Write three short motivational suggestions for someone feeling ${mood} today. Note: ${notes}`,
        },
      ],
      max_tokens: 80,
      temperature: 0.8,
    };

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + apikey,
        },
        body: JSON.stringify(APIBody),
      });

      if (!res.ok) throw new Error("Failed to connect to OpenAI API.");

      const data = await res.json();
      const suggestionText =
        data?.choices?.[0]?.message?.content?.trim() || "No suggestion found.";

      setAiTip(suggestionText);

      const newEntry = {
        date: formattedDate,
        mood,
        note: notes,
        aiTip: suggestionText,
        userEmail: user.email,
      };

      const storedEntries =
        JSON.parse(localStorage.getItem("moodEntries")) || [];
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
        timerProgressBar: true,
        timer: 3000,
        showConfirmButton: false,
      });
    } catch (err) {
      console.error("AI API error:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to fetch AI suggestions. Please check your API key or connection.",
        confirmButtonColor: "#06b6d4",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Reset with check for empty input fields
  const resetHandler = () => {
    if (!user) return;

    const storedEntries = JSON.parse(localStorage.getItem("moodEntries")) || [];
    const todayEntry = storedEntries.find(
      (e) => e.userEmail === user.email && e.date === formattedDate
    );

    // 🧩 Check if both fields are empty
    if (!mood && !notes && !aiTip) {
      Swal.fire({
        icon: "info",
        title: "No Data to Reset",
        text: "There’s no data in the fields to reset.",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
      });
      return;
    }

    // 🧩 If there's an entry in storage or data in fields, reset it
    if (!todayEntry && !mood && !notes) {
      console.log("No entry found for today — skipping reset alert.");
      return;
    }

    setMood("");
    setNotes("");
    setAiTip("");

    const updatedEntries = storedEntries.filter(
      (e) => e.userEmail !== user.email || e.date !== formattedDate
    );
    localStorage.setItem("moodEntries", JSON.stringify(updatedEntries));

    Swal.fire({
      icon: "info",
      title: "Entry Reset",
      text: "Today's mood entry has been cleared.",
      showConfirmButton: false,
      timerProgressBar: true,
      timer: 3000,
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen font-montserrat flex flex-col lg:flex-row gap-8 px-4 md:px-6 py-8">
        <div className="flex-1 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0 mt-[4rem]">
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

          {/* Mood Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              logMoodHandler();
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
                className="text-neutral-500 border px-3 py-1 rounded hover:bg-cyan-600 hover:text-white transition-colors duration-300 text-sm w-full cursor-pointer sm:w-auto"
                onClick={resetHandler}
              >
                Reset Entry
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition-all duration-300 w-full text-sm sm:w-auto flex items-center justify-center cursor-pointer gap-2 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin text-white text-md" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <span>Log Mood</span>
                )}
              </button>
            </div>
          </form>

          {/* AI Suggestions */}
          {aiTip && (
            <div className="flex flex-col gap-3">
              <div className="mt-5 bg-[#f4fcfa] border border-cyan-200 rounded-xl p-4 flex flex-col">
                <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-3">
                  <Brain className="text-teal-500" size="20px" /> AI
                  suggestions...
                </h3>
                <ul className="ml-5 text-sm">
                  {aiTip.split(/[\n•-]+/).map((tip, idx) => (
                    <li key={idx}>{tip.trim()}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-start">
                <button
                  type="button"
                  onClick={callOpenAIPAI}
                  className="text-xs text-cyan-600 hover:bg-cyan-700 hover:text-white bg-white px-4 py-2 rounded-md transition-colors duration-300 border border-cyan-600 cursor-pointer"
                >
                  Regenerate
                </button>
              </div>
            </div>
          )}

          <p className="text-center text-xs text-gray-500 mt-6">
            🔒 Your data stays private — saved only on your device.
          </p>
        </div>

        {/* Right Image Section */}
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
