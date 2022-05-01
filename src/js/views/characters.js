import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import FormatoInfo from "../FormatoInfo";
import { Context } from "../store/appContext";

import "../../styles/characters.css";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		
		<div className="container">
			<FormatoInfo name="Characters" info="quehacecmasksak" img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png" />
		</div>
	);
};
