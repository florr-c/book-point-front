import React, { useState, useEffect } from "react";
import axios from "axios";
import CardGroup from "react-bootstrap/CardGroup";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import PriceCard from "../../components/PriceCard";

function Categorias() {
  const [categories, setCategories] = useState(null);

  const getCategories = async () => {
    const apiUrl = "http://localhost:8000";
    const books = await axios.get(`${apiUrl}/api/books/prices`);
    const categories = {};
    books.data.forEach((price) => {
      if (price.category in categories) {
        categories[price.category].push(price);
        return;
      }
      categories[price.category] = [price];
    });
    return categories;
  };

  useEffect(() => {
    getCategories()
      .then((prices) => {
        setCategories(prices);
      })
      .catch((e) => console.log(e));
  }, []);

  if (!categories) {
    return <></>;
  }

  const PriceCards = [
    {
      title: "It ends with us",
      text: "$9.900,00",
      subtitle: "by Coleen Hoover",
      button: "Agregar",
      imageSrc: "/public/assets/landing/book1.png",
    },

    {
      title: "Demon Copper",
      text: "$9.000,00",
      subtitle: "by Barbara Kingsol",
      button: "Agregar",
      imageSrc: "/public/assets/landing/book2.png",
    },

    {
      title: "The Last Thing",
      text: "$8.950,00",
      subtitle: "by Laura Dave",
      button: "Agregar",
      imageSrc: "/public/assets/landing/book3.png",
    },
  ];

  const cardsSection2 = [
    {
      title: "My Name Is Barbra",
      text: "$9.900,00",
      subtitle: "by Barbra Streisand",
      button: "Agregar",
      imageSrc: "/public/assets/categorias/book4.png",
    },

    {
      title: "A Reese's Book Club ",
      text: "$800,00",
      subtitle: "by Ann Patchett",
      button: "Agregar",
      imageSrc: "/public/assets/categorias/book2.png",
    },

    {
      title: "Tomorrow",
      text: "$8.950,00",
      subtitle: "by Gabrielle Zevin ",
      button: "Agregar",
      imageSrc: "/public/assets/categorias/book5.png",
    },
  ];

  const cardsSection3 = [
    {
      title: "Blackouts",
      text: "$9.900,00",
      subtitle: "by Justin Torres",
      button: "Agregar",
      imageSrc: "/public/assets/categorias/book3.png",
    },

    {
      title: "An American Fight",
      text: "$9.900,00",
      subtitle: "by Rachel Maddow ",
      button: "Agregar",
      imageSrc: "/public/assets/categorias/book6.png",
    },

    {
      title: "Never Whistle",
      text: "$6.950,00",
      subtitle: "by Shane Hawk",
      button: "Agregar",
      imageSrc: "/public/assets/categorias/book7.png",
    },
  ];

  const renderBookSection = (title, cards) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "20px",
            paddingTop: "20px",
            gap: "525px",
          }}>
          <h4 style={{ color: "#202335" }}>{title}</h4>
          <Button
            style={{
              backgroundColor: "#fff",
              border: "#FF9900 solid 2px",
              color: "#202335",
            }}>
            {" "}
            Ver Mas{" "}
          </Button>
        </div>
        <CardGroup
          style={{
            gap: "12px",
            alignItems: "center",
            padding: "10px",
            paddingTop: "0px",
          }}>
          {cards.map((item) => (
            <PriceCard
              title={item.title}
              text={item.text}
              subtitle={item.subtitle}
              button={item.button}
              imageSrc={item.imageSrc}
            />
          ))}
        </CardGroup>
      </>
    );
  };

  return (
    <>
      <img
        width="100%"
        src="/public/assets/categorias/banner-top.png"
        alt="banner"
      />
      <Container>
        {Object.entries(categories).map(([title, cards]) =>
          renderBookSection(title, cards)
        )}
      </Container>

      <img
        width="100%"
        src="/public/assets/categorias/bannerfooter.png"
        alt="banner"
      />
    </>
  );
}

export default Categorias;

// ** Styles **
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
