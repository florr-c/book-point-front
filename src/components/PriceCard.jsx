import { CardBody, CardImg, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function PriceCard({ imageSrc, title, subtitle, text, button }) {
  return (
    <Card
      style={{
        border: "none",
        borderRadius: "17px",
        backgroundColor: "#FAF8F6",
        padding: "10px",
        paddingRight: "0px",
        paddingLeft: "0px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent:'center',
        gap: "20px",
      }}>
        <Container style={{ display: "flex", flexDirection: "column", alignItems:'center' }}>
      <Card.Img
        variant="top"
        style={{ width: "40%", height: "50%", paddingTop: "10px" }}
        src={imageSrc}
      />
      <img
            src="/assets/landing/star1.png"
            style={{
              width: "40%",
              height: "40%",
              paddingLeft: "0px",
              paddingTop: "10px",
            }}
            alt=""
          />
      </Container>
      <Container style={{display:'flex', flexDirection:'row', gap:'50px', paddingLeft:'60px'}}>

        <Card.Title>{title} <Card.Subtitle>{subtitle} </Card.Subtitle> </Card.Title>
        
        <Card.Text>{text}</Card.Text>
        </Container>
          

          <Button
            style={{
              backgroundColor: "#FF9900",
              color: "#202335",
              border: "none",
              width:'40%',
              
            }}>
            {button} <i class="bi bi-bag"></i>
          </Button>
    </Card>
  );
}

export default PriceCard;
