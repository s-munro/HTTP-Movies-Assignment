import React from 'react';
import axios from 'axios';

const UpdateMovie = () => {



  return(
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={'hello'}>

        <label>Title
          <input
          type='text'
          name=''
          onChange={'hello'}
          placeholder='text'
          value={'hello'} />
        </label>

        <label>Director
          <input
            type='text'
            name=''
            onChange={'hello'}
            placeholder='text'
            value={'hello'} />
        </label>

        <label>Metascore
          <input
            type='text'
            name=''
            onChange={'hello'}
            placeholder='text'
            value={'hello'} />
        </label>

        <label>Stars
          <input
            type='text'
            name=''
            onChange={'hello'}
            placeholder='text'
            value={'hello'} />
        </label>
        <button>Update</button>
      </form>
    </div>
  )
}

export default UpdateMovie;