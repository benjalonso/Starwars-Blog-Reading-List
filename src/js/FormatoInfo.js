import React from "react";

const FormatoInfo = (props) => {
    return (
    <div className="">
        <div className="card col-sm-12 col-md-6 col-lg-3 bg-dark bg-gradient rounded text-light" >
            <img src={"https://i.pinimg.com/474x/0c/18/d4/0c18d4728146722f70ed128dd2832f9c.jpg"} /* {props.imagen} *//>
            <div className="card-body border-top border-4 border-secondary p-0 " id="">
                <h5 className="p-1 m-0" id="bodycard">{props.cardtitle}SANDCRAWLER</h5>
                <p className="card-text p-1 fs-6" id="bodytext">{props.textbody}Sandcrawlers are huge treaded fortresses used by Jawas as transportation and shelter. The sand-pitted vehicles, many meters in height, are equipped with a magnetic suction tube for sucking droids and scrap into their cargo chambers.</p>
            </div>
        </div>
    </div>
    )
}

export default FormatoInfo
