import React, {useState} from "react";

const FormatoInfo = ({LinKDelAtributoQueUsaremosEnCadaVista}) => {
    const [planetData, setPlanetData] = useState([])

	const getPlanetData = (urlEachPlanet) => {
		fetch(urlEachPlanet)
			.then((response) => response.json())
			.then((data) => console.log(data));		
	};

    return (
    <div className="">
       	{LinKDelAtributoQueUsaremosEnCadaVista.length > 0 ? (
					LinKDelAtributoQueUsaremosEnCadaVista.map(({results},index) => {
						return (
							
							results[index].length > 0 ? (
                            results.map(({url}) => {
								return (getPlanetData(url, index),
								<p key={index}>{url.name}</p>
								)
							})
                            ) : (<h1>no funcionó</h1>)
						) 
					})
				) : (
					<div
						className="spinner-border text-success mx-auto my-5"
						role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				)}
    </div>
    )
}

export default FormatoInfo


{/* <div className="card col-sm-12 col-md-6 col-lg-3 bg-dark bg-gradient rounded text-light" >
<img src="asjdkla" />
<div className="card-body border-top border-4 border-secondary p-0 " id="">
    <h5 className="p-1 m-0" id="bodycard">HOLA</h5>
    <p className="card-text p-1 fs-6" id="bodytext">sadfjalskjflkasdjflkasd</p>
</div>
</div> */}