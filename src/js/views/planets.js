import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import FormatoInfo from "../FormatoInfo";

export const Planets = props => {
	const [planetLink, setPlanetsLink] = useState([]);
	const getData = (urlFetch) => {
		fetch(urlFetch)
			.then((response) => response.json())
			.then((data) => console.log(data));
			
	};
	useEffect(() => {
		getData("https://www.swapi.tech/api/planets/");
	}, []);
	
	return (
		<div className="container">
			<FormatoInfo LinKDelAtributoQueUsaremosEnCadaVista={planetLink} />
		</div>
	);
};


