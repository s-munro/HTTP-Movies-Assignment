import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";


function Movie({ addToSavedList }, props) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const { push } = useHistory();

  // const thisMovie = props.movies.find(thing => `${thing.id}` === props.match.params.id);


  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/api/movies/${movie.id}`)
      .then((res) => {
        props.setMovies(res.data);
        push('/movies');
      })
      .catch((err) => {
        console.log(err)
      });
  }

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div className='button-container'>

        <div className="save-button" onClick={saveMovie}>
          Save
        </div>

        <div className="edit-button" onClick={()=> {
          push(`/update-movie/${movie.id}`)
        }}>
          Edit
        </div>

        <div className="delete-button" onClick={handleDelete}>
          Delete
        </div>
      </div>
    </div>
  );
}

export default Movie;
