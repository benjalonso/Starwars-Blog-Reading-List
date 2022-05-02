
import React, { useState, useEffect, useContext } from "react";
import FormatoInfo from "../FormatoInfo";
import "../../styles/characters.css";
import { Pagination } from "../component/Pagination";
export const Characters = () => {

	const [characters, setCharacters] = useState([]);

	const initialUrl = "https://www.swapi.tech/api/people"
	
	const fetchCharacters = (initialUrl) =>{
		fetch (initialUrl)
		.then (response => response.json())
		.then (data => setCharacters(data.results))
		.catch (error => console.log(error))
	}

		/* .then (data => {
			const {results} = data;
			results.forEach(async(characters, index) => {
				const resp = await fetch (characters.url);
				const info = await resp.jason();
				data.results[index] = info;
				console.log(info)
			});
		}) */
	
	useEffect(() => {
	  fetchCharacters(initialUrl);
	}, [])
	
	return (
	<div>
		{/* <Pagination prev={info.previus} next={info.next}/> */}
		<FormatoInfo characters={characters} img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"} />
		{/* <Pagination /> */}
	</div>
	);
	
};

