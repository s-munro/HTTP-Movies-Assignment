import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const initialMovie = {
  title: '',
  director: '',
  metascore: null,
  stars: [],
}

const AddMovie = props => {

    const [movie, setMovie] = useState(initialMovie);
    const { push } = useHistory();

    const handleChange = (e) => {
      e.persist();
      let value = e.target.value;
      if (e.target.name === 'metascore') {
        value = parseInt(value);
      }
      setMovie({
        ...movie,
        [e.target.name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post(`http://localhost:5000/api/movies/`)
        .then((res) => {
          props.setMovies(res.data);
          push('/movies');
        })
        .catch(err => {
          console.log(err);
        });
    };

  return(
<div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>

        <label>Title
          <input
          type='text'
          name='title'
          onChange={handleChange}
          placeholder='title'
          value={movie.title} />
        </label>

        <label>Director
          <input
            type='text'
            name='director'
            onChange={handleChange}
            placeholder='director'
            value={movie.director} />
        </label>

        {/* <label>Metascore
          <input
            type='text'
            name='metascore'
            onChange={handleChange}
            placeholder='metascore'
            value={movie.metascore} />
        </label> */}

        <label>Stars
          <input
            type='text'
            name='stars'
            onChange={handleChange}
            placeholder='stars'
            value={movie.stars} />
        </label>
        <button>Update</button>
      </form>
    </div>

  )
}

export default AddMovie;






