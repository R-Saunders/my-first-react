import "./App.css";
import React, { useState } from "react";
import Card from "./Card.jsx";
import axios from "axios";

const App = () => {
	const [name, setName] = useState([]);

	const [api, setApi] = useState([]);

	const clicked = () => {
		setName(Math.floor(Math.random() * 100));
		console.log("Stage Change " + name);
	};

	const getAPIFromExpress = async () => {
		const reqAPIFromExpress = "http://localhost:8801/resources";
		const reqDataFromExpress = await axios
			.get(reqAPIFromExpress)
			.then((response) => {
				return response.data;
			});
		setApi(reqDataFromExpress);
		console.log(api);
	};

	return (
		<div className="page">
			<div>
				<h1> API's and Express Testing </h1>
			</div>

			<button onClick={getAPIFromExpress}>Get API's from Express</button>
			<div onClick={clicked}>
				{api.map((value, index) => {
					return <Card key={index} data={value} />;
				})}
			</div>

			<div>
				<h1>Made by Dickie </h1>
			</div>
		</div>
	);
};

export default App;
