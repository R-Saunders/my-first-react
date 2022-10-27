import "./App.css";
import React from "react";
//import axios from 'axios';
// Import components
// import Header from './header';
// import Footer from './footer';
import Card from "./Card";
// State
import { useState } from "react";
import axios from "axios";

const App = () => {
	// useState hook
	// const [arg1,setArg1] = useState([]);
	// arg1 is the vriable
	// setArg1 is the setter function
	/* const arg1 = (two) =>{
    return two;
  }
   */
	//setArg1([all TheData])
	// const arg1 = [all TheData]

	// const api = [];

	const sample = () => {
		console.log("Sample");
	};

	const movies = [
		{
			movieName: "Ghost in the dark",
			duration: 200,
			Director: "james cameroon",
			Cast: ["Tom hanks", "Tom hardy", "Tom hiddelton", "Tom Cruise"],
		},
		{
			movieName: "Ghost in the dark2",
			duration: 201,
			Director: "james cameroons wife",
			Cast: ["Chris Hemsworth", "Chris Evans", "Chris Patt", "Chris Walken"],
		},
	];
	// UseState
	//const [arg1,arg2] = useState();
	const [api, setApi] = useState([]);

	// APIs
	const apiData = {};

	// State
	const [name, setName] = useState("something");
	const [data, setData] = useState(movies);

	// APIS
	const [coins, setCoins] = useState([]);

	//const name = '';

	// Methods
	const functionByParent = () => {
		// setter function
		setName(Math.floor(Math.random() * 10));
		console.log("State Change " + name);
	};

	const addSomething = () => {
		let newData = {
			movieName: "Star Wars",
			duration: 212,
			Director: "Rian Johnson",
			Cast: [
				"Yodha",
				"bay Yodha",
				"Skywalker",
				"Chubaca",
				"Kanobe",
				"Mandalorian",
			],
		};

		setData((currentArray) => [...currentArray, newData]);
	};

	const formSubmitted = (event) => {
		event.preventDefault();

		let movieName = event.target.name.value;
		let duration = event.target.duration.value;
		let director = event.target.director.value;
		let cast = event.target.cast.value;

		let newData = {
			movieName: movieName,
			duration: duration,
			Director: director,
			Cast: [cast],
		};

		setData((currentArray) => [...currentArray, newData]);
	};

	const getAPI = async () => {
		console.time();

		const reqAPI = "http://localhost:8011/beasts";

		try {
			const reqData = await axios.get(reqAPI);
			setApi(reqData.data);
			console.log(api);
		} catch (err) {
			console.log(err);
		}

		console.timeEnd();
	};

	// Submitted
	const submitted = async (event) => {
		event.preventDefault();
		// Stage 1: Posting the url
		const _name = event.target.name.value;
		const urlToSent = `http://localhost:8011/beast?name=${_name}`;
		console.log(urlToSent);

		// Stage 2: Fetching the data
		try {
			const dataFromExpress = await axios.get(urlToSent);
			console.log(dataFromExpress);
		} catch (err) {
			console.log(err);
		}
	};

	// data submission
	const dataSubmitted = async (event) => {
		event.preventDefault();

		const _name = event.target.name.value;
		const _heads = event.target.heads.value;
		const _mythology = event.target.mythology.value;

		const obj = {
			name: _name,
			heads: _heads,
			mythology: _mythology,
		};

		console.log(obj);

		// Post the obj
		try {
			const dataSubmitting = await axios.post(
				"http://localhost:8011/beasts",
				obj
			);
			console.log(dataSubmitting);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			{/* Header comes in here */}
			{/* <Header/> */}

			{/*<form onSubmit={formSubmitted}>
      <input type="text"   name="name" placeholder='Movie Name'/><br/>
      <input type="number" name="duration"/><br/>
      <input type="text"   name="director" placeholder='Movie Director'/><br/>
      <input type="text"   name="cast" placeholder='Movie Cast'/><br/>

      <input type="submit" value="submit"/>
  </form><br/>*/}

			<form onSubmit={submitted}>
				<input type="text" name="name" placeholder="Beast Name" />
				<br />
				<input type="submit" value="submit" />
			</form>
			<br />

			<button onClick={getAPI}>Click for APIs</button>

			<button onClick={sample}>Sample</button>
			<hr />

			{/* Form for submitting the data */}
			<form onSubmit={dataSubmitted}>
				<input type="text" name="name" placeholder="Beast Name" />
				<br />
				<input type="number" name="heads" />
				<br />
				<input type="text" name="mythology" placeholder="Beast Mythology" />
				<br />
				<input type="submit" value="submit" />
			</form>
			<br />

			<div className="cards-container">
				{api.map((value, index) => {
					return (
						<div className="card" key={index}>
							<h3>ID : {value.id}</h3>
							<p>Name : {value.name}</p>
							<p>Mythology: {value.mythology}</p>
							<p>Heads : {value.heads}</p>
						</div>
					);
				})}
			</div>

			{/* Footer component comes here */}
			{/* <Footer/> */}
		</div>
	);
};

export default App;
