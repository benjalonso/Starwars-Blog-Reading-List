import React, { useState, useEffect, useContext } from "react";
import FormatoCardCharacters from "../FormatoCardCharacters";
import "../../styles/characters.css";
import { Context } from "../store/appContext";

// import { Pagination } from "../component/Pagination";
export const Characters = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchCharacters();
  }, []);
  // console.log(store.characters)
  return (
    <>
      {store.characters.results?.length > 0 &&
        store.characters.results.map((character, index) => {
          // console.log(character)
          return (
            <FormatoCardCharacters
              key={index}
              name={character.name}
              index={index}
              info={character?.info?.results?.properties}
              favorite={character}
              img={
                "https://p4.wallpaperbetter.com/wallpaper/81/410/454/star-wars-r2d2-video-games-star-wars-hd-art-wallpaper-preview.jpg"
              }
            />
          );
        })}
    </>
  );
};
