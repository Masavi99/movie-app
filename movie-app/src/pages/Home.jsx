import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css"
function Home() {
    const[searchQuery,setSearchQuery]=useState("");

  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      releaseYear: 1994,
      url: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    },
    {
      id: 2,
      title: "The Godfather",
      releaseYear: 1972,
      url: "https://m.media-amazon.com/images/I/41+eK8zBwQL._AC_.jpg",
    },
    {
      id: 3,
      title: "The Dark Knight",
      releaseYear: 2008,
      url: "https://m.media-amazon.com/images/I/51EbJjlLJGL._AC_.jpg",
    },
    {
      id: 4,
      title: "Pulp Fiction",
      releaseYear: 1994,
      url: "https://m.media-amazon.com/images/I/51V5ZpFyaFL._AC_.jpg",
    },
    {
      id: 5,
      title: "Forrest Gump",
      releaseYear: 1994,
      url: "https://m.media-amazon.com/images/I/41c9r0YHnQL._AC_.jpg",
    },
  ];
  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery("")
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <button type="submit"className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
