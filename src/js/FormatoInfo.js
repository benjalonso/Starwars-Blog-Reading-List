import React from "react";
const FormatoInfo = (props) => {
    return (
    <div className="">
        <div className="card col-sm-12 col-md-6 col-lg-3 bg-dark bg-gradient rounded text-light" >
            <img src={props.img} />
            <div className="card-body border-top border-4 border-secondary p-0 " id="">
                <h5 className="p-1 m-0" id="bodycard">{props.name}</h5>
                <p className="card-text p-1 fs-6" id="bodytext">{props.info}</p>
            </div>
        </div>
    </div>
    )
}

export default FormatoInfo
