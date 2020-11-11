import react from 'react';
import axios from 'axios';

const UpdateMovie = () => {



  return(
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={}>

        <label>Title
          <input
          type='text'
          name=''
          onChange={}
          placeholder='text'
          value={} />
        </label>

        <label>Director
          <input
            type='text'
            name=''
            onChange={}
            placeholder='text'
            value={} />
        </label>

        <label>Metascore
          <input
            type='text'
            name=''
            onChange={}
            placeholder='text'
            value={} />
        </label>

        <label>Stars
          <input
            type='text'
            name=''
            onChange={}
            placeholder='text'
            value={} />
        </label>
        <button>Update</button>
      </form>
    </div>
  )
}

export default UpdateMovie;