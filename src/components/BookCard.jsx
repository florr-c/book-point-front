import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BookCard({ imageSrc, title, subtitle, text, button }) {
  return (

    <Card style={{ border: 'none', borderRadius: '17px', backgroundColor: "#EEEAE6" }}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle style={{ fontSize: '15px' }}>{subtitle}</Card.Subtitle>
        <Card.Text style={{ fontSize: '14px' }}>{text}</Card.Text>
        <Button href="../gift-cards" style={{ backgroundColor: "#202335", border: 'none' }}> {button} <i style={{ paddingLeft: '10px' }} class="bi bi-arrow-right"></i></Button>
      </Card.Body>
    </Card>
  );
}


export default BookCard;





