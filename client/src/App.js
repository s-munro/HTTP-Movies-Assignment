import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import axios from 'axios';
import UpdateMovie from './components/UpdateMovie';
import AddMovie from './components/AddMovie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div>
   
      <div>
        <div>
          <h1>Add Movie</h1>
          <NavLink exact to='/add-movie'>Add Movie</NavLink>
        </div>
        <SavedList list={savedList} />

        <Route exact path="/">
          <MovieList movies={movieList} />
        </Route>

        <Route path="/movies/:id" render={props=>(<Movie {...props} movies={movieList} addToSavedList={addToSavedList} setMovies={setMovieList} />)}/>

        <Route path='/update-movie/:id' render={props=>(<UpdateMovie />)}/>

        <Route path='/add-movie' render={props=>(<AddMovie {...props} setMovies={setMovieList} />)}/>
        </div>
      
      </div>
    
  );
};

export default App;
