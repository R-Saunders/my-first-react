import './App.css';

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

const movie1 = [1,2,3,4];

  return (

    <div className="container">

      <div className="header">
       <h1> V-Commerce </h1>
      </div>

      <div className="cards-container">

        {/* Dynamic Rendering */}

        {/* {movies.map()} */}

        {/* {movies.map( () => {} )} */}

        {/* {movies.map( () => {
          return();
        } )} */}

        {/* {movies.map( () => {
          return(
            <div className="card">
            <h1></h1>
            </div>
          );
        } )} */}

        {movies.map( (value) => {
          return(
            <div className="card">
            <h1>{value.movieName}</h1>
            <h1>{value.duration}</h1>
            </div>
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