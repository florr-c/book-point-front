import { useState } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { TabContainer } from "react-bootstrap";

function Contact() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const saveUserContact = async () => {
    const apiUrl = "http://localhost:8000";
    const response = await axios.post(
      `${apiUrl}/api/contact`,
      {
        name: name,
        lastName: lastName,
        password: password,
        message: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    document.getElementById("response").innerHTML = response.data;
    return response;
  };

  const deleteUserContact = async () => {
    const apiUrl = "http://localhost:8000";
    const response = await axios.post(
      `${apiUrl}/api/contact/delete`,
      {
        name: name,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    document.getElementById("response").innerHTML = response.data;
    return response;
  };
  const updateUserContact = async () => {
    const apiUrl = "http://localhost:8000";
    const response = await axios.post(
      `${apiUrl}/api/contact/update`,
      {
        name: name,
        lastName: lastName,
        password: password,
        message: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    document.getElementById("response").innerHTML = response.data;
    return response;
  };
  return (
    <>
      <Container>
        <FormContainer>
          <h3>Deja tu review del libro</h3>
          <h6>
            Escribe tu reseña y nosotros recibiremos tu comentario y
            compartiremos el review con el autor
          </h6>

          <Form.Control
            id="name"
            type="input"
            placeholder="Ingresa tu nombre"
            required
            onChange={({ target }) => setName(target.value)}
            style={{ border: "2px solid #202335" }}
          />
          <Form.Control
            id="last-name"
            type="input"
            placeholder="Ingresa tu apellido"
            onChange={({ target }) => setLastName(target.value)}
            style={{ border: "2px solid #202335" }}
          />
          <Form.Control
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            onChange={({ target }) => setPassword(target.value)}
            style={{ border: "2px solid #202335" }}
          />
          <Form.Control
            id="message"
            type="password"
            placeholder="Escribe acá tu review del libro"
            as="textarea"
            rows={5}
            onChange={({ target }) => setMessage(target.value)}
            style={{ border: "2px solid #202335" }}
          />
          <TabsContainer>
            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "#202335",
                border: "none",
                width: "180px",
              }}
              onClick={({ e }) => saveUserContact()}>
              Enviar
            </Button>
            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "#FF9900",
                border: "none",
                width: "180px",
                color: "#202335",
              }}
              onClick={({ e }) => deleteUserContact()}>
              Borrar Review
            </Button>
            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: "#FF9900",
                border: "none",
                width: "180px",
                color: "#202335",
              }}
              onClick={({ e }) => updateUserContact()}>
              Actualiza Datos
            </Button>
          </TabsContainer>
          <div
            id="response"
            class="alert alert-dark"
            role="alert"
            style={{ border: "none" }}>
            <i
              class="bi-chat-heart-fill"
              style={{ display: "flex", flexDirection: "row-reverse" }}></i>
          </div>
        </FormContainer>
        <img
          width="40%"
          src="/assets/review/formulario.png"
        />
      </Container>

      <img
        width="100%"
        src="/assets/review/banner-footer.png"
        alt="banner"
      />
    </>
  );
}

export default Contact;

// *** Styles ***
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  background-color: #faf8f6;
  padding: 34px;
  padding-top: 43px;
  padding-bottom: 25px;
  border-radius: 18px 0px 0px 18px;
  justify-content: center;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8rem;
  padding-top: 35px;
  padding-bottom: 80px;
  justify-content: center;
`;
