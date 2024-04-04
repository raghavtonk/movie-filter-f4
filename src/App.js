import { useState } from "react";
import GenreFilter from "./components/GenreFilter";
import MovieList from "./components/MovieList";
function App() {
  return (
    <div className="App">
       <header>
    <h1>Top 15 Movies of All Time</h1>
  </header>
       <GenreFilter />
       <MovieList />
    </div>
  );
}

export default App;
