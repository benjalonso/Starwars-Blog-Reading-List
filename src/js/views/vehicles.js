import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import FormatoCardVehicles from "../FormatoCardVehicles";

export const Vehicles = (props) => {
  const [vehicles, setVehicles] = useState({});

  const fetchVehicles = () => {
    fetch("https://www.swapi.tech/api/vehicles/")
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .then(async (data) => {
        data.results.forEach(async (vehicle, index) => {
          console.log(vehicle.url);
          const { url } = vehicle;
          
            const response = await fetch(url);
            const info = await response.json();
            data.results[index].info = info;
            setVehicles(data);
         
        });
      })
      .catch((error) => console.log("Error en la solicitud de vehiculos"));
  };
  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <>
      {vehicles.results?.length > 0 &&
        vehicles.results.map((vehicle, index) => {
          return (
            <FormatoCardVehicles
            key={index}
              name={vehicle.name}
              index={index}
              info={vehicle?.info?.result?.properties}
              img={
                "https://i.blogs.es/e8942b/millennium-falcon/450_1000.jpg"
              }
            />
          );
        })}
    </>
  );
};

