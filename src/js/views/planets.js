import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import FormatoCardPlanet from "../FormatoCardPlanets";

export const Planets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchPlanets();
  }, []);

  return (
    <>
      {store.planets.results?.length > 0 &&
        store.planets.results.map((planet, index) => {
          return (
            <FormatoCardPlanet
              key={index}
              name={planet.name}
              index={index}
              info={planet?.info?.result?.properties}
              favorite={planet}
              img={
                "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/ZIYOS3QUV5AWNH7GNSIXBQIUPA.jpg"
              }
            />
          );
        })}
    </>
  );
};
