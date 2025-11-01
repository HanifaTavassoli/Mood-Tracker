import Navbar from "../components/navbar";
import bgImg from '../assets/images/profile/banner.png';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './Profile.css';
import { Sparkles, Smile, CalendarDays, FileText } from "lucide-react";

const apikey = import.meta.env.VITE_API_KEY;

function Profile() {
  const [date, setDate] = useState(new Date());
  const [aiTip, setAiTip] = useState("");
  const [history, setHistory] = useState([]);
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');

  // Load previous data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("moodEntries")) || [];
    setHistory(saved);
  }, []);

  // Get mood/notes for selected date
  useEffect(() => {
    const entry = history.find(e => e.date === date.toISOString().split("T")[0]);
    if (entry) {
      setMood(entry.mood);
      setNotes(entry.note);
      setAiTip(entry.aiTip || "");
    } else {
      setMood("");
      setNotes("");
      setAiTip("");
    }
  }, [date, history]);

  const recentEntries = history.slice(-7);

  // Call OpenAI API
  async function callOpenAIPAI(selectedDate) {
    const body = {
      model: "gpt-3.5-turbo-instruct",
      prompt: `Write three very short suggestions based on this note: Mood: ${mood}, Note: ${notes}`,
      max_tokens: 60,
      temperature: 0.7
    };

    try {
      const res = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apikey}`
        },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      const suggestionText = data.choices[0].text.trim();
      setAiTip(suggestionText);

      const updatedHistory = history.map(e => 
        e.date === selectedDate.toISOString().split("T")[0]
          ? { ...e, aiTip: suggestionText }
          : e
      );
      setHistory(updatedHistory);
      localStorage.setItem("moodEntries", JSON.stringify(updatedHistory));
    } catch (error) {
      console.error("OpenAI API Error:", error);
    }
  }

  const handleDaySelection = (selectedDate) => {
    setDate(selectedDate);
    callOpenAIPAI(selectedDate);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen font-montserrat">
       
        <div
          className="h-40 w-full bg-no-repeat bg-center bg-cover bg-calm-blue"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>

        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-6 px-4 md:px-6 py-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 p-3">
            <Calendar
              onChange={handleDaySelection}
              value={date}
              className="border-none shadow-inner rounded-lg w-full text-gray-700 font-medium text-sm"
              minDetail="month"
              maxDetail="month"
              next2Label={null}
              prev2Label={null}
            />
            <p className="mt-3 text-gray-600 text-center lg:text-left">
              Selected Date:{" "}
              <span className="text-[#26abac] font-semibold">{date.toDateString()}</span>
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-4 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-3 gap-2 sm:gap-0">
              <h2 className="text-xl font-bold text-gray-700 flex items-center gap-2">
                <Smile className="text-[#26abac]" /> Your Daily Mood
              </h2>
              <Link
                to="/moodtracker"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded font-medium"
              >
                Edit Today's Mood
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="bg-[#f4fcfa] border border-[#bde2ea] rounded-md p-3 flex items-center gap-3">
                <h3 className="font-semibold flex items-center gap-1">
                  <CalendarDays className="text-[#26abac]" /> Date
                </h3>
                <p className="text-sm text-gray-600">{date.toDateString()}</p>
              </div>

              <div className="bg-[#f4fcfa] border border-[#bde2ea] rounded-md p-3 flex items-center gap-3">
                <h3 className="font-semibold flex items-center gap-1">
                  <Smile className="text-[#26abac]" /> Mood
                </h3>
                <p className="text-sm text-gray-600">{mood || "No mood recorded"}</p>
              </div>

              <div className="col-span-full bg-[#f4fcfa] border border-[#bde2ea] rounded-md p-3">
                <h3 className="font-semibold flex items-center gap-2 mb-2">
                  <FileText className="text-[#26abac]" /> Daily Notes
                </h3>
                <p className="text-sm text-gray-600">{notes || "No notes for this day."}</p>
              </div>

              <div className="col-span-full bg-[#f4fcfa] border border-[#bde2ea] rounded-md p-3">
                <h3 className="font-semibold flex items-center gap-2 mb-2">
                  <Sparkles className="text-[#26abac]" /> AI Tips
                </h3>
                <ul className="text-sm list-none list-inside">
                  {aiTip !== "" 
                    ? aiTip.split(/(?=\d+\.)/).map((sentence, index) => (
                        <li key={index}>{sentence}</li>
                      )) 
                    : <li>No suggestions yet for this day.</li>
                  }
                </ul>
              </div>

              <div className="col-span-full bg-[#f4fcfa] border border-[#bde2ea] rounded-md p-3">
                <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-3">
                  <CalendarDays className="text-[#26abac]" /> Weekly Summary
                </h3>
                {recentEntries.length > 0 ? (
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {recentEntries.map((e) => (
                      <div
                        key={e.date}
                        className="flex flex-col items-center justify-center bg-white rounded-lg py-2 shadow-sm border border-[#bde2ea]"
                      >
                        <span className="text-sm font-semibold text-gray-600">
                          {e.date.slice(5)}
                        </span>
                        <span className="text-sm">{e.mood}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No entries yet for this week.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
