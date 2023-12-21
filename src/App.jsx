import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicUrls } from "./config";
import Header from "./components/Header";
import Home from "./screens/Home";
import GiftCard from "./screens/GiftCard";
import Contact from "./screens/Contact";
import Login from "./screens/Login";
import Vendidos from "./screens/Vendidos";
import Categorias from "./screens/Categorias";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { UserContextProvider } from "../context/userContext";
import { Toaster } from 'react-hot-toast'

function App() {
  
  console.log("got to APP");
  return (
    <UserContextProvider>
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path={publicUrls.home} element={<Home />} />
          <Route path={publicUrls.contact} element={<Contact /> }/>
          <Route path={publicUrls.categories} element={<Categorias />} />
          <Route path={publicUrls.bestSellers} element={<Vendidos />} />
          <Route path={publicUrls.login} element={<Login/>} />
          <Route path={publicUrls.giftCards} element={<GiftCard />} />

          

          giftCards

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
