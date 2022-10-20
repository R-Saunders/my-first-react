import React from "react";
import "./App.css";

const Card = (props) => {
	const description = props.data.description;
	const url = props.data.url;
	const types = props.data.types;
	const topics = props.data.topics;

	return (
		<a href={url} className="cards">
			<div className="cards-inner">
				<h2>{description}</h2>
				<h4>Type of Content: {types}</h4>
        <h4>Languages:</h4>
				<ul>
					{topics.map((arg1, index) => {
						return <li key={index}>{arg1}</li>;
					})}
				</ul>
			</div>
		</a>
	);
};

export default Card;
