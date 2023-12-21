import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import PriceCard from "../../components/PriceCard";

function giftCard() {
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "70px",
            maxWidth: "900px",
            alignItems: "center",
          }}>
          <h2>Gift Card descubre todas las ventajas en una sola tarjeta</h2>

          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                alignItems: "center",
                paddingBottom: "20px",
              }}>
              <img
                src="/public/assets/gift-card/icon1.png"
                style={{ width: "70px" }}
                alt=""
              />
              <div>
                <h4>Personalizado</h4>
                <h6>Con las imágenes y mensajes que tú elijas</h6>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                alignItems: "center",
              }}>
              <img
                src="/public/assets/gift-card/icon2.png"
                style={{ width: "70px" }}
                alt=""
              />
              <div>
                <h4>Cómodo</h4>
                <h6>
                  Tarjeta enviada por email, inmediato programado en tus fechas
                </h6>
              </div>
            </div>
          </div>
        </div>

        <img
          width="100%"
          src="/public/assets/gift-card/banner-basic.png"
          alt="banner"
        />
        <img
          width="100%"
          src="/public/assets/gift-card/banner-standard.png"
          alt="banner"
        />
        <img
          width="100%"
          src="/public/assets/gift-card/banner-premium.png"
          alt="banner"
        />
      </Container>

      <img
        width="100%"
        src="/public/assets/gift-card/bannerfooter.png"
        alt="banner"
      />
    </>
  );
}

export default giftCard;

// ** Styles **
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
