import { useState } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Main()
{
  var user_email = sessionStorage.getItem("user_email");
  console.log(user_email);
  if(user_email!=="null")
  {
  //Usuario esta logueado 
    return Profile(user_email);
  }
  else
  {
    return User();
  }
}

function User() {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const navigate = useNavigate();
  const apiUrl = "http://localhost:8000";

  const registerUser = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      const { data } = await axios.post(`${apiUrl}/api/user/register`, {
        name, email, password
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        sessionStorage.setItem("user_email",email);
        toast.success('Register Successful, Welcome!');
        setData({});
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const loginUser = async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
      const { data } = await axios.post(`${apiUrl}/api/user/login`, {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error)
      } else {
        sessionStorage.setItem("user_email",email);
        toast.success('Login Successful, Welcome!');
        setData({});
        navigate('/')
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <>
      <Container>
      <FormContainer>
          <h3>Acceso</h3>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            id="name"
            type="input"
            placeholder="Ingresa tu nombre"
            required
            onChange={(e) => setData({ ...data, name: e.target.value })}
            style={{border:"2px solid #202335"}}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Ingresa tu email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            style={{border:"2px solid #202335"}}
            
          />
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            style={{border:"2px solid #202335"}}

          />
          <TabsContainer style={{display:"flex", flexDirection:'row', gap:'50px'}}>
            <Button 
              variant="primary" 
              type="submit" 
              style={{backgroundColor:'#202335', border:'none', width:'200px'}}
              onClick={loginUser}>
              Login
            </Button>
            <Button variant="primary" 
              type="submit" 
              style={{backgroundColor:'#FF9900', border:'none', width:'200px', color: '#202335'}}
              onClick={registerUser}>
              Register
            </Button>
          </TabsContainer>
        </FormContainer>

        <img width="40%" src="/assets/usuario/Group-710.png" />
      </Container>

      <img
        width="100%"
        src="/assets/usuario/banner-footer.png"
        alt="banner"
      />
    </>
  );
}
function Profile(user_email) {
  const [data, setData] = useState({
    email: ""
  })
  const navigate = useNavigate();
  const apiUrl = "http://localhost:8000";

  const deleteUser = async (e) => {
    e.preventDefault();
    const email = user_email;
    try {
      const { data } = await axios.post(`${apiUrl}/api/user/delete`, {
         email 
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        sessionStorage.setItem("user_email",null);
        toast.success('User deleted, Bye!');
        setData({});
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const changePassword = async (e) => {
    e.preventDefault();
    const email = user_email;
    const password = document.getElementById('password').value;
    try {
      const { data } = await axios.post(`${apiUrl}/api/user/update`, {
        email,
        password 
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success('Password Changed!');
        setData({});
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  const logoutUser = async (e) => {
    e.preventDefault();
    sessionStorage.setItem("user_email",null);
    toast.success('Logout Successful, Bye!');
    setData({});
    navigate('/login')
  };
  return (
    <>
      <Container>
      <FormContainer>
          <h3>Acceso</h3>
          <Form.Label>Nuevo Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            style={{border:"2px solid #202335"}}

          />
          <TabsContainer style={{display:"flex", flexDirection:'row', alignItems:'center'}}>
          <Button 
              variant="primary" 
              type="submit" 
              style={{ border:'2px solid #FF9900',backgroundColor:'transparent', width:'200px', color:'#202335'}}
              onClick={changePassword}>
              Cambiar Contraseña
            </Button>
            <Button 
              variant="primary" 
              type="submit" 
              style={{backgroundColor:'#202335', border:'none', width:'200px'}}
              onClick={logoutUser}>
              Logout
            </Button>
            <Button variant="primary" 
              type="submit" 
              style={{backgroundColor:'#FF9900', border:'none', width:'200px', color:'#202335'}}
              onClick={deleteUser}>
              Eliminar Cuenta
            </Button>
          </TabsContainer>
        </FormContainer>

        <img width="40%" src="/assets/usuario/Group-710.png" />
      </Container>

     
    </>
  );
}

export default Main;

// *** Styles ***
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  background-color: #FAF8F6;
  padding: 34px;
  padding-top: 43px;
  padding-bottom: 25px;
  border-radius: 18px 0px 0px 18px;
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8rem;
  padding-top: 35px;
  padding-bottom: 80px;
  justify-content: center;

  `;
