import React, { useState, useEffect, useContext } from "react";
import FormatoCardCharacters from "../FormatoCardCharacters";
import "../../styles/characters.css";
import { Context } from "../store/appContext";

// import { Pagination } from "../component/Pagination";
export const Characters = () => {

	const [characters, setCharacters] = useState([]);
	const { store, actions } = useContext(Context);

	actions.fetchCharacters()

  useEffect(() => {
    actions.fetchCharacters();
  }, []);
	
	return (
<>
      {characters.results?.length > 0 &&
        characters.results.map((character, index) => {
          return (
            <FormatoCardCharacters
            key={index}
              name={character.name}
              index={index}
              info={character?.info?.result?.properties}
			  favorite={store.objectSw}
              img={
                "https://p4.wallpaperbetter.com/wallpaper/81/410/454/star-wars-r2d2-video-games-star-wars-hd-art-wallpaper-preview.jpg"
              }
            />
          );
        })}
    </>

	);
	
};

