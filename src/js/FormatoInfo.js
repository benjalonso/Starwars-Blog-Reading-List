import React from "react";
const FormatoInfo = ({characters=[], img, name, info}) => {
    return (
    <div className="row">
        {
            characters.map((item, index) => (
                <div key={index} className="col-sm-12 col-md-6 col-lg-4 g-4">
                <div className="card bg-dark bg-gradient rounded text-light" >
                    <img src={img} />
                    <div className="card-body border-top border-4 border-secondary p-0 " id="">
                        <h5 className="p-1 m-0" id="bodycard">{item.name}</h5>
                        <p className="card-text p-1 fs-6" id="bodytext">{item.uid}</p>
                    </div>
                </div>
                </div>
            ))
        }
        
    </div>
    )
}

export default FormatoInfo
