import Chatbot from "./components/ChatBot";

function App() {
  return (
    <div className="App min-h-screen bg-slate-800 flex flex-col">
      <header className="bg-slate-700 text-white p-4 shadow-md ">
        <h1 className="text-2xl font-semibold text-center">
          Ai Gemini Chatbot
        </h1>
      </header>
      <main className="flex-grow flex justify-center items-center mt-6">
        <Chatbot />
      </main>
      <footer className="bg-slate-700 text-white p-4 text-center">
        <p>
          &copy; Samuel Miskan Chatbot. {new Date().getFullYear()} All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
