import React from 'react';
import './App.css';

const Card = (props) => {

  const movieName = props.data.movieName;
  const duration = props.data.duration;
  const director = props.data.Director;
  const cast = props.data.Cast;


  return(
    <div>
    <h1>{movieName}</h1>
    <h3>{duration}</h3>
    <h4>{director}</h4>

    {cast.map((arg1)=>{
      return(
        <p>{arg1}</p>
      )
    })}

    </div>
  );
}

export default Card;