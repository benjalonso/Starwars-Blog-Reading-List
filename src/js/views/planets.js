import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import FormatoInfo from "../FormatoInfo";


export const Planets = props => {
	const [characters, setCharacters] = useState([]);

	const initialUrl = "https://www.swapi.tech/api/planets"

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


export const Planets = (props) => {
  const [planet, setPlanets] = useState({});
  const getData = (urlFetch) => {
    fetch(urlFetch)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .then((async data => {
        data.results.forEach(async (planets, index) => {
          console.log(planets.url);
          const response = await fetch(planets.url);
          const info = await response.json();
          data.results[index] = info;
          setPlanets(data);
        });
      });
  };
  useEffect(() => {
    getData("https://www.swapi.tech/api/planets/");
  }, []);


  return (
    <div className="container">
     <FormatoInfo/>
    </div>
  );
};
// {
//   planet.result?.length > 0 && 
//   planet.result.map((planets) => {
//     return (
// <div className="">
//     <div key={planets.name} className="card col-sm-12 col-md-6 col-lg-3 bg-dark bg-gradient rounded text-light">
//       <img src="asjdkla" />
//       <div
//         className="card-body border-top border-4 border-secondary p-0 "
//         id=""
//       >
//         <h5 className="p-1 m-0" id="bodycard">
//           {planets.name}
//         </h5>
//         <p className="card-text p-1 fs-6" id="bodytext">
//           {planets.climate}{planets.gravity}
//         </p>
//       </div>
//     </div>
//   </div> 
//     )
//   })
// }