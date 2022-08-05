import React, {useContext} from "react";
import { MdFavorite } from "react-icons/md";
import { Context } from "./store/appContext";


const FormatoCardCharacters = ({ index, img, name, info, favorite }) => {
  const { store, actions } = useContext(Context);

  return (
    <div key={index} className="row rounded">
      <div className="col-sm-12 col-md-6 col-lg-4 g-4 ms-a">
        <div className="card bg-dark bg-gradient rounded text-light">
          <img src={img} />
          <div className="card-body border-top border-4 border-secondary p-0 ">
            <h4 className="p-1 text-center" id="bodycard">
              {name} 
              <MdFavorite 
              onClick={() => actions.addToFavorite({favorite})}
              />
            </h4>
            <p className="card-text p-1 fs-4" id="bodytext">
              {/* La linea de abajo se lee como: Si INFO es distinto de undefined y null */}
              {/* Después del && dice que si info EXISTE entonces llama a info.climate */}
              {/* El operardor ? se llama chaining operator  */}
              Name: {!!info && info?.name}.
            </p>
            <p className="card-text p-1 fs-4" id="bodytext">
              Gender: {!!info && info?.gender}.
            </p>
            <p className="card-text p-1 fs-4" id="bodytext">
              Height: {!!info && info?.height}.
            </p>
            <p className="card-text p-1 fs-4" id="bodytext">
              Bithyear: {!!info && info?.birth_year}.
            </p>
            <p className="card-text p-1 fs-4" id="bodytext">
              Eye color: {!!info && info?.eye_color}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormatoCardCharacters;
