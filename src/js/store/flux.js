const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://www.swapi.tech/api/",
      favorite: [],
      objectSw: null,
      characters: [],
      planets: [],
      vehicles: [],
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
              console.log(character.url);
              const { url } = character;
              const response = await fetch(url);
              const info = await response.json();
              data.results[index].info = info;
              setStore({objectSw: data});
			  setStore({characters: data})
            });
          })
          .catch((error) => console.log("Error en la solicitud de personajes"));
      },
      addToFavorite: (element) => {
        let newItem = getStore().favorite.includes(element);

        if (newItem) {
          setStore({
            favorite: getStore().favorite.concat(element),
          });
        } else {
          setStore({
            favorite: getStore().favorite.concat(element),
          });
          getActions().addTolocalStorage();
        }
      },
      deleteFromFavorite: (element) => {
        setStore({
          favorite: getStore().favorite.filter((item) => item !== element),
        });
        getActions().addTolocalStorage();
      },
    },
  };
};

export default getState;
