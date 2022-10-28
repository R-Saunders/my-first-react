import "./App.css";
import React from "react";
// State
import { useState } from "react";
import axios from "axios";

const App = () => {

	// UseState
	//const [arg1,arg2] = useState();
	const [api, setApi] = useState([]);

	// State
	const [singleAPI, setSingleAPI] = useState([]);

	// Get API from Express
	const getAPI = async () => {
		const reqAPI = "http://localhost:8011/beasts";
		try {
			const reqData = await axios.get(reqAPI);
			setApi(reqData.data);
			console.log(api);
		} catch (err) {
			console.log(err);
		}
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
			setSingleAPI(dataFromExpress.data);
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
			<h2>Render a Single Beast by Name</h2>
			<form onSubmit={submitted}>
				<input type="text" name="name" placeholder="Beast Name" />
				<br />
				<input type="submit" value="Submit" />
			</form>
			<div>
				{singleAPI.map((value, index) => {
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
			<br />
				<h2>Render All Beasts</h2>
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

			<button onClick={getAPI}>Click for APIs</button>
			<hr />

			{/* Form for submitting the data */}
			<form onSubmit={dataSubmitted}>
				<h2>Add a new Beast</h2>
				<input type="text" name="name" placeholder="Beast Name" />
				<br />
				<input type="number" name="heads" />
				<br />
				<input type="text" name="mythology" placeholder="Beast Mythology" />
				<br />
				<input type="submit" value="Submit" />
			</form>
			<br />

			

			{/* Footer component comes here */}
			{/* <Footer/> */}
		</div>
	);
};

export default App;
