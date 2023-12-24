import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import PriceCard from "../../components/PriceCard";
import Pagination from "react-bootstrap/Pagination";

function Vendidos() {
   const PriceCards = [
    {
      title: "It ends with us",
      text: "$9.900,00",
      subtitle: "by Coleen Hoover",
      button: "Agregar",
      imageSrc: "/assets/landing/book1.png",
    },

    {
      title: "Demon Copper",
      text: "$9.000,00",
      subtitle: "by Barbara Kingsol",
      button: "Agregar",
      imageSrc: "/assets/landing/book2.png",
    },

    {
      title: "The Last Thing",
      text: "$8.950,00",
      subtitle: "by Laura Dave",
      button: "Agregar",
      imageSrc: "/assets/landing/book3.png",
    },
  ];

  const cardsSection2 = [
    {
      title: "My Name Is Barbra",
      text: "$9.900,00",
      subtitle: "by Barbra Streisand",
      button: "Agregar",
      imageSrc: "/assets/categorias/book4.png",
    },

    {
      title: "A Reese's Book Club ",
      text: "$800,00",
      subtitle: "by Ann Patchett",
      button: "Agregar",
      imageSrc: "/assets/categorias/book2.png",
    },

    {
      title: "Tomorrow",
      text: "$8.950,00",
      subtitle: "by Gabrielle Zevin ",
      button: "Agregar",
      imageSrc: "/assets/categorias/book5.png",
    },
  ];

  const cardsSection3 = [
    {
      title: "Blackouts",
      text: "$9.900,00",
      subtitle: "by Justin Torres",
      button: "Agregar",
      imageSrc: "/assets/categorias/book3.png",
    },

    {
      title: "An American Fight",
      text: "$9.900,00",
      subtitle: "by Rachel Maddow ",
      button: "Agregar",
      imageSrc: "/assets/categorias/book6.png",
    },

    {
      title: "Never Whistle",
      text: "$6.950,00",
      subtitle: "by Shane Hawk",
      button: "Agregar",
      imageSrc: "/assets/categorias/book7.png",
    },
  ];
  
  const booksSection = [
    {
      title: "Encuentra los libros más vendidos de la semana",
      cards: PriceCards,
    },
    {
      cards: cardsSection2,
    },
    
    {
      cards: cardsSection3,
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
          }}
        >
          <h4 style={{ color: "#202335" }}>{title}</h4>
          
        </div>
        <CardGroup
          style={{
            gap: "12px",
            alignItems: "center",
            padding: "10px",
            paddingTop: "0px",
          }}
        >
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

  const paginationItems = () => {
    let active = 0;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item  key={number} active={number === active}>
          {number} 
        </Pagination.Item>
        
      );
    }

    return items;
  };

  return (
    <>
      <Container>
        <img
        width="100%"
        src="/assets/masVendidos/banner-top.png"
        alt="banner"
      />
      <Container>
        {booksSection.map((item) => renderBookSection(item.title, item.cards))}
      </Container>
        <div >
          <Pagination>{paginationItems()}</Pagination>
        </div>
      </Container>

      <img
        width="100%"
        src="/assets/masVendidos/banner-footer.png"
        alt="banner"
      />
    </>
  );
}

export default Vendidos;

// ** Styles **
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
