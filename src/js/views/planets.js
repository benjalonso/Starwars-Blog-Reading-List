import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import FormatoInfo from "../FormatoInfo";

export const Planets = (props) => {
  const [Planets, setPlanets] = useState({});

  const fetchCharacters = () => {
    fetch("https://www.swapi.tech/api/planets/")
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .then(async (data) => {
        data.results.forEach(async (planet, index) => {
          console.log(planet.url);
          const { url } = planet;
          
            const response = await fetch(url);
            const info = await response.json();
            data.results[index].info = info;
            setPlanets(data);
         
        });
      })
      .catch((error) => console.log("Error en la solicitud de datos"));
  };
  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      {Planets.results?.length > 0 &&
        Planets.results.map((planet, index) => {
          return (
            <FormatoInfo
            key={index}
              name={planet.name}
              index={index}
              info={planet?.info?.result?.properties}
              img={
                "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
              }
            />
          );
        })}
    </>
  );
};
