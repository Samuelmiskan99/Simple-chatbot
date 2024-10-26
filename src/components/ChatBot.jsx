import axios from "axios";
import { useState } from "react";
import Markdown from "react-markdown";
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const ChatBot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Hai folks, any question today?");
  const [loading, setLoading] = useState(false);

  async function generateAnswer() {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const response = await axios({
        method: "POST",
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        data: { contents: [{ parts: [{ text: question }] }] },
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      setAnswer("Error generating response. Please try again.", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=" shadow-lg rounded-lg p-6 max-w-md w-full bg-wh">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        ChatBot
      </h1>
      <div className="bg-gray-700 p-4 rounded-lg h-40 mb-4 overflow-auto shadow-inner text-white">
        <div className="whitespace-pre-line text-gray-700">
          {loading ? (
            <p className="italic text-blue-500">Loading...</p>
          ) : (
            <Markdown className={" text-white"}>{answer}</Markdown>
          )}
        </div>
      </div>
      <input
        type="text"
        value={question}
        placeholder="Type your question here..."
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full px-4 py-2 bg-gray-800 text-white mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
      />
      <button
        onClick={generateAnswer}
        className={`w-full py-2 rounded-lg font-semibold text-white transition-all ${
          loading
            ? "bg-slate-700 cursor-not-allowed"
            : "bg-slate-500 hover:bg-slate-600"
        }`}
        disabled={loading}
      >
        {loading ? "Generating..." : "Ask"}
      </button>
    </div>
  );
};

export default ChatBot;
