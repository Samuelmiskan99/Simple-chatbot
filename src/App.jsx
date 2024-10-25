import Chatbot from "./components/ChatBot";

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-semibold text-center">Simple Chatbot</h1>
      </header>
      <main className="flex-grow flex justify-center items-center mt-6">
        <Chatbot />
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>
          &copy; Samuel Miskan Chatbot. {new Date().getFullYear()} All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
