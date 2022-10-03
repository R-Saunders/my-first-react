import './App.css';
import React from 'react';
import Card from './Card';

const App = () => {

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

      <div className="cards-container">

        {movies.map( (value) => {
          return(
            <Card data={value}/>
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