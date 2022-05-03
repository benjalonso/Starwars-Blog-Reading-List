import React from "react";
const FormatoInfo = ({ index, img, name, info }) => {
  return (
    <div key={index} className="row">
      <div className="col-sm-12 col-md-6 col-lg-4 g-4">
        <div className="card bg-dark bg-gradient rounded text-light">
          <img src={img} />
          <div className="card-body border-top border-4 border-secondary p-0 ">
            <h5 className="p-1 m-0" id="bodycard">
              {name}
            </h5>
            <p className="card-text p-1 fs-6" id="bodytext">
              {/* La linea de abajo se lee como: Si INFO es distinto de undefined y null */}
              {/* Después del && dice que si info EXISTE entonces llama a info.climate */}
              {/* El operardor ? se llama chaining operator  */}
              {!!info && info?.climate}
            </p>
            <p>{!!info && info?.population}</p>
            <p>{!!info && info?.climate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormatoInfo;
