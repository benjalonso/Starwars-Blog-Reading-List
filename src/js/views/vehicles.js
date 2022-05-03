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
		<FormatoInfo characters={characters} img={"https://i.blogs.es/e8942b/millennium-falcon/450_1000.jpg"} />
		{/* <Pagination /> */}
	</div>
	);
};



