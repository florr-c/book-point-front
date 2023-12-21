import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../../components/BookCard";
import CardGroup from "react-bootstrap/CardGroup";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import PriceCard from "../../components/PriceCard";

function Home() {
  const [bookCards, setBookCards] = useState(null);
  const [bookPrices, setBookPrices] = useState(null);

  const getBookCards = async () => {
    const apiUrl = "http://localhost:8000";
    const books = await axios.get(`${apiUrl}/api/books`);
    return books.data;
  };

  const getBookPrices = async () => {
    const apiUrl = "http://localhost:8000";
    const books = await axios.get(`${apiUrl}/api/books/prices`);
    return books.data.slice(0, 3);
  };

  useEffect(() => {
    getBookCards().then((books) => {
      setBookCards(books);
    });

    getBookPrices().then((prices) => {
      setBookPrices(prices);
    });
  }, []);

  if (!bookCards || !bookPrices) {
    return <></>;
  }

  return (
    <>
      <img
        width="100%"
        src="/assets/landing/banner_top.png"
        alt="banner"
      />
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "20px",
            gap: "100px",
          }}>
          <h4 style={{ color: "#202335" }}>
            {" "}
            Descubre los libros seleccionados de la semana!
          </h4>

          <Button
            href="../mas-vendidos"
            style={{
              backgroundColor: "#fff",
              border: "#FF9900 solid 2px",
              color: "#202335",
            }}>
            Ver Mas
          </Button>
        </div>
        <CardGroup
          style={{
            gap: "12px",
            alignItems: "center",
            padding: "10px",
            paddingTop: "0px",
          }}>
          {bookPrices.map((item) => (
            <PriceCard
              title={item.title}
              text={item.text}
              subtitle={item.subtitle}
              button={item.button}
              imageSrc={item.imageSrc}
            />
          ))}
        </CardGroup>
      </Container>

      <img
        width="100%"
        src="/assets/landing/banner-kindle.png"
        alt="banner"
      />

      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "20px",
            gap: "100px",
          }}>
          <h4 style={{ color: "#202335" }}>
            {" "}
            Conoce las nuevas gif cards que tenemos para vos!
          </h4>

          <Button
            href="../gift-cards"
            style={{
              backgroundColor: "#fff",
              border: "#FF9900 solid 2px",
              color: "#202335",
            }}>
            Ver Mas
          </Button>
        </div>

        <CardGroup
          style={{
            gap: "12px",
            alignItems: "center",
            padding: "150px",
            paddingTop: "0px",
          }}>
          {bookCards.map((item) => (
            <BookCard
              title={item.title}
              text={item.text}
              subtitle={item.subtitle}
              button={item.button}
              imageSrc={item.imageSrc}
            />
          ))}
        </CardGroup>
      </Container>
    </>
  );
}

export default Home;

// ** Styles **
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
