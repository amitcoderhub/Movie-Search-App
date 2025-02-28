import React, { useState, useEffect } from "react";

const MovieResults = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch movies whenever the query changes
  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        setLoading(true);
        const apiKey = import.meta.env.VITE_OMDB_API_KEY; // Use environment variable
        const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`; // Use HTTPS

        try {
          const res = await fetch(url);
          const data = await res.json();
          setMovies(data.Search || []);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    } else {
      // Clear movies if the query is empty
      setMovies([]);
    }
  }, [query]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Movie Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="bg-card dark:bg-darkCard bg-opacity-80 backdrop-blur-xs rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {movie.Title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No Results State */}
      {!loading && movies.length === 0 && query && (
        <div className="flex justify-center items-center h-64">
          <p className="text-center text-gray-600 dark:text-gray-400">
            No movies found. Try searching for something else!
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieResults;