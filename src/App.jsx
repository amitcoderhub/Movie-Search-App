import { useState } from "react";
import MovieSearch from "./components/MovieSearch";
import MovieResults from "./components/MovieResults";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [query, setQuery] = useState("");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-background dark:bg-darkBackground transition-colors duration-300">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-header dark:bg-darkCard bg-opacity-80 backdrop-blur-xs shadow-sm z-50">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4 gap-4">
          {/* App Title */}
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            🎬 Movie Search
          </h1>

          {/* Search Bar and Theme Toggle */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <MovieSearch isDarkMode={isDarkMode} query={query} setQuery={setQuery} />
            <button
              onClick={toggleTheme}
              className="bg-primary dark:bg-secondary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all"
            >
              {isDarkMode ? "🌞 Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-80 pb-8"> {/* Add padding-top to account for header height */}
        <MovieResults query={query} />
      </main>
    </div>
  );
}

export default App;