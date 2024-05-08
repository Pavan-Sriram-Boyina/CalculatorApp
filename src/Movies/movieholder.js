import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import MovieCard from "./moviecard";
import "./moviecard.css";

const API_URL = "https://omdbapi.com/?apikey=fe2f6c44";
function MovieHolder() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spider Man");
  }, []);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search movie name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img
        className="image"
        url="https://media.geeksforgeeks.org/wp-content/uploads/20230626112934/search.png"
        onClick={() => searchMovies(searchTerm)}
      />

      {movies.length > 0 ? (
        movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })
      ) : (
        <div>No movie found</div>
      )}
    </div>
  );
}

export default MovieHolder;
