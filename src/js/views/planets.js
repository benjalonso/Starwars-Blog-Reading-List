import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import FormatoCardPlanet from "../FormatoCardPlanets";

export const Planets = (props) => {
  const [planets, setPlanets] = useState({});

  const fetchPlanets = () => {
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
    fetchPlanets();
  }, []);

  return (
    <>
      {planets.results?.length > 0 &&
        planets.results.map((planet, index) => {
          return (
            <FormatoCardPlanet
            key={index}
              name={planet.name}
              index={index}
              info={planet?.info?.result?.properties}
              img={
                "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ZIYOS3QUV5AWNH7GNSIXBQIUPA.jpg"
              }
            />
          );
        })}
    </>
  );
};
