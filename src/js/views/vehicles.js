import React, { useState, useEffect, useContext } from "react";
import FormatoInfo from "../FormatoInfo";

export const Vehicles = props => {
	const [characters, setCharacters] = useState([]);

	const initialUrl = "https://www.swapi.tech/api/vehicles"

	const fetchCharacters = (initialUrl) =>{
		fetch (initialUrl)
		.then (response => response.json())
		.then (data => setCharacters(data.results))
		.catch (error => console.log(error))
	}

	useEffect(() => {
	  fetchCharacters(initialUrl);
	}, [])
	
	return (
		
		
			<FormatoInfo characters={characters}  name={"Hola"} /* info={"quehacecmasksak"} */ img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"} />
	
	);
};


