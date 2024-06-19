import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Introduccion.css';

const FlushExample = () => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>Tradición de los Chichas - Facultad de Ingeniería</ListGroup.Item>
      <ListGroup.Item>Poderosa Morenada de Ingeniería - Facultad de Ingeniería</ListGroup.Item>
      <ListGroup.Item>Saya Afroboliviana - Carrera de Artes</ListGroup.Item>
      <ListGroup.Item> Pakhochis - Carrera de Psicología</ListGroup.Item>
      <ListGroup.Item> Taller Cultural de Antropología y Arqueología - Carrera de Antropología y Arqueología</ListGroup.Item>
    </ListGroup>
  );
}

const Determinate = () => {
  return (
    <div className="accordion-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>LAS PREGUNTAS MAS FRECUENTES (MOQUILLO)</Accordion.Header>
          <Accordion.Body>
          Muy contagiosa y conocida también como distemper, afecta a los canes cachorros, 
          sobre todo, produciéndoles problemas en el aparto respiratorio y los sistemas
           digestivo y nervioso. Es causado por un virus y se concreta en dificultades 
           al respirar, tics y latiguillos nerviosos, gastroenteritis y dermatitis.
            No tiene cura, pero diferentes medicinas permiten paliar sus síntomas… 
            si lo llevas a tiempo al especialista.
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Rabia?</Accordion.Header>
          <Accordion.Body>
          También es viral, aguda e infecciosa. La provoca un tipo de Rhabdoviridae que ataca el sistema nervioso central y deriva en una encefalitis, letal prácticamente al 100 %.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Hepatitis canina</Accordion.Header>
          <Accordion.Body>
          Existen tres tipos: infecciosa, común y autoinmune. Por lo general produce fiebre, merma del apetito, vómitos, adormecimiento, diarrea, permanente sensación de sed, abundancia de orina, inflamación del vientre y color amarillento. Ante la menor sospecha al respecto, llévalo al veterinario.
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Sarna demodéctiva</Accordion.Header>
          <Accordion.Body>
          Esta sarna roja se aprecia en la piel de los cánidos y es ocasionada por un ácaro. No es contagiosa, tampoco a los humanos. El tratamiento consiste en una serie de pomadas y medicamentos ingeridos oralmente. En los cachorros suele curarse pronto, pero no siempre es así en los ejemplares adultos. No temas acariciar a tu fiel amigo cuando la padece.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Parvovirus</Accordion.Header>
          <Accordion.Body>
          La parvovirosis canina es una enfermedad viral que sufren algunos cachorros de perro. Sus consecuencias son problemas intestinales serios; en especial, unas diarreas sanguinolentas y fétidas, así como un deterioro progresivo. Debe ser tratado precozmente, o tendrá un pronóstico preocupante.
            
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <img src="ima14.png" alt="Descripción de la imagen" />
    </div>
  );
  
};

export default Determinate;