import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardBody } from 'react-bootstrap';
import it1 from '../assets/ima23.png';
import it2 from '../assets/ima25.png';
import it3 from '../assets/ima21.png';
import it4 from '../assets/ima16.png';
import it5 from '../assets/ima20.png';
import it6 from '../assets/ima22.png';
import './Galeria.css'; // Importa tu archivo de estilos CSS

const images = [
  {
    src: it1,
    title: 'Petra',
    text: 'Es muy buena con los animales, se especializa en cirugias. Al principio era la novia de Scott Pickett y luego volvieron juntos. Tiene pelo marrón. Es interpretada por Naomi Scott. Ella es inteligente, tímida pero también se esfuerza por complacer a su padre que tiene un buen sueño de que ella era su princesa india.',
  },
  {
    src: it2,
    title: 'Juana',
    text: 'Tiene mucha pacencia y le encanta las aves no le gusta el hecho de que su padre se quiera volver a casar con Sidney, una mujer mucho más joven que su padre. Él entró en detención cuando sin querer insulta a su maestro porque creyó que Sidney era su madre.',
  },
  {
    src: it3,
    title: 'Marco',
    text: 'A el le encanta los reptiles  y escribir canciones, vive con su abuela ya que su madre falleció y su padre está en prisión. Tiene una gata llamada Nancy que le pertenecía a su madre.',
  },
  {
    src: it4,
    title: 'Charlie',
    text: 'El se enarga de los servvicios de peluqueria de los mascotas está siempre listo para defender a sus amigos ya veces por encima de su cabeza. Se ve obligado a vivir de acuerdo con su "hermano perfecto de" expectativas para complacer a sus padres, pero se podía contar con cualquier cosa atlética.',
  },
  {
    src: it5,
    title: 'Pedro',
    text: ' El se encarga de las fianzas, una parte fundamental de la veterinaria se convierte en la voz de la banda.',
  },
  {
    src: it6,
    title: 'Matias',
    text: 'Un veterinario que tiene mucha experiencia, los animalitos estan en buenas manos ',
  },
];

const Galeria = () => {
  return (
    <div className="imagenes-container">
      {images.map((image, index) => (
        <ImageWithText key={index} src={image.src} title={image.title} text={image.text}  />
      ))}
    </div>
  );
}

const ImageWithText = ({ src, title, text }) => (
  <Card className="image-card">
    <CardImg top src={src} alt={`Imagen de ${title}`} />
    <CardBody>
      <CardTitle className="card-title">{title}</CardTitle>
      <CardText className="image-text">{text}</CardText>
    </CardBody>
  </Card>
);

export default Galeria;