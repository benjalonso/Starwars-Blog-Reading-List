import { useParams } from "react-router";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://www.swapi.tech/api/",
      favorite: [],
      idItems: null,
      planets: [],
      vehicles: [],
      characters: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      fetchCharacters: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((response) => response.json())
          .then((data) => {
            return data;
          })
          .then(async (data) => {
            data.results.forEach(async (character, index) => {
              // console.log(character.url);
              const { url } = character;
              const response = await fetch(url);
              const info = await response.json();
              data.results[index].info = info;
                    setStore({characters: data});
                    // console.log(data)
              // setStore({characters: data})
              // getStore().characters =  data.result.uid;
              // getStore().characters =  data;
            });
          })
          .catch((error) => console.log("Error en la solicitud de personajes"));
      },
      addToFavorite: (fav) => {
        // console.log(fav[0].name)
        // console.log(getStore().favorite)
        if (getStore().favorite.includes(fav[0])) {
          alert("Ya está en favoritos")
        } else {

          setStore({
            favorite: getStore().favorite.concat(fav),
          });
          // getActions().addTolocalStorage();
        }
      },
      addToFavorite2: (fav) => {
        console.log(fav.result?.uid)
        if (getStore().favorite.includes(fav)) {
          setStore({
            favorite: getStore().favorite.concat(fav),
          });
        } else {
          setStore({
            favorite: getStore().favorite.concat(fav),
          });
          // getActions().addTolocalStorage();
        }
      },
      deleteFromFavorite: (fav) => {
        setStore({
          favorite: getStore().favorite.filter((item) => item.index !== fav),
        });
        // getActions().addTolocalStorage();
      },
    },
  };
};

export default getState;
