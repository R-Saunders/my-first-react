import './App.css';
import React, { useState } from 'react';
import Card from './Card';
import axios from 'axios';

const App = () => {

const [name,setName] = useState([]);

const [api,setApi] = useState([]);

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

const getAPI = async () => {
  console.time();
  const reqAPI = "https://api.sampleapis.com/futurama/episodes";
  const reqData = await axios.get(reqAPI).then(response =>{
    return response.data;
  });
  setApi(reqData);
  console.log(api);
  console.timeEnd();
}

const getAPIFromExpress = async () => {
  const reqAPIFromExpress = "http://localhost:8801/data";
  const reqDataFromExpress = await axios.get(reqAPIFromExpress).then(response =>{
    return response.data;
  });
  setApi(reqDataFromExpress);
  console.log(api);
}

const something = true;

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

        {something && <button>Click me</button>}
        

      </div>
      <button onClick={getAPI}>Get API's</button>
      <button onClick={getAPIFromExpress}>Get API's from Express</button>
      
      <div className="footer">
       <h1>Done by  V-Commerce </h1>
      </div>
      
    </div>
    
  );
}

export default App;