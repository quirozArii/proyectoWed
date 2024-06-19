import React from "react";
import './Home.css';
import imagen1 from "../assets/ima41.png";
import imagen2 from "../assets/ima17.png";
import imagen3 from "../assets/ima15.png";
import imagen4 from "../assets/ima26.png";
import imagen5 from "../assets/ima3.png";
import imagen6 from "../assets/ima13.png";


const cards = [
  {
    id: 1,
    title: "ATENCION MEDICA",
    image: imagen3,
    
  },
  {
    id: 2,
    title: "SERVICIO DE PELUQUERIA",
    image: imagen2,
    
  },
  {
    id: 3,
    title: "OPERACIONES ESPECIALIZADAS",
    image: imagen4,
    
  },
  {
    id: 4,
    title: "GUARDERIA DE MASCOTAS",
    image: imagen6,
    
  },
  {
    id: 5,
    title: "ADOPCIONES",
    image: imagen5,
    
  },
  {
    id: 6,
    title: "VENTA FARMACEUTICA",
    image: imagen1,
    
  },
  
];

const Card = ({ title, text, url ,imageSource }) => {
  return (
    <div className="card text-center bg-dark animate_animated animate_fadeInUp">
      
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : ""}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          <div className="overflow">
        <img src={imageSource} alt={title} className="card-img-top" />
      </div>
          Go to {title}
        </a>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;