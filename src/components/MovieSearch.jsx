import React from "react";

const MovieSearch = ({ isDarkMode, query, setQuery }) => {
  const searchMovies = async (e) => {
    e.preventDefault();
    // Logic to fetch movies is now handled in MovieResults
  };

  return (
    <form onSubmit={searchMovies} className="flex flex-col sm:flex-row gap-2 w-full max-w-lg">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className={`flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-darkCard bg-opacity-80 backdrop-blur-xs focus:outline-none focus:ring-2 focus:ring-primary ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      />
      <button
        type="submit"
        className="bg-primary dark:bg-secondary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
      >
        🔍 Search
      </button>
    </form>
  );
};

export default MovieSearch;