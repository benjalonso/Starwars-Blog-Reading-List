import React, { useState, useEffect, useContext } from "react";
import FormatoInfo from "../FormatoInfo";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (

		
		
			<FormatoInfo characters={characters}  name={"Hola"} /* info={"quehacecmasksak"} */ img={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"} />
	

	);
};


