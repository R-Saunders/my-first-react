import './App.css';
import React, { useState } from 'react';
import Card from './Card';

const App = () => {

const [name,setName] = useState('Name State');

const clicked = () => {
  setName(Math.floor(Math.random() * 100));
  console.log('Stage Change '+name);
}

const movies = [
  {
    movieName:"Ghost in the dark",
    duration: 200,
    Director:"james cameroon",
    Cast:["Tom hanks","Tom hardy","Tom hiddelton","Tom Cruise"]
  },
  {
    movieName:"Ghost in the dark2",
    duration: 201,
    Director:"james cameroons wife",
    Cast:["Chris Hemsworth","Chris Evans","Chris Patt","Chris Walken"]
  }

];

  return(

    <div className="container">

      <div className="header">
       <h1> V-Commerce </h1>
      </div>

      <div className="cards-container" onClick={clicked}>

        {movies.map( (value, index) => {
          return(
            <Card key={index} data={value}/>
          );
        } )} 

  
        

      </div>

      <div className="footer">
       <h1>Done by  V-Commerce </h1>
      </div>
      
    </div>
    
  );
}

export default App;