import React from 'react'
import styled from 'styled-components';
function Footer() {


    return(
        <FooterContainer className="main-footer ">
        <div className="footer-middle">
        <div className="row">
        {/* Columna 1 */}
        <div className="col-md-3 col-sm-6">
            <h4>Conoce sobre nosotros </h4>
        <ul className='list-unstyled'>
            <li> Carreras </li>
            <li>Blog </li>
            <li>Sobre Bookpoint </li>
            <li>Bookpoint Devices </li>
        </ul>
        </div>

         {/* Columna 2 */}
         <div className="col-md-3 col-sm-6">
         <h4>Hace dinero con nosotros </h4>
        <ul className='list-unstyled'>
        <li>Vende productos de Bookpoint </li>
        <li>Vende en Bookpoint Business </li>
        <li>Vende apps en Bookpoint </li>
        <li>Promociona tus productos </li>
        </ul>
        </div>

          {/* Columna 3 */}
          <div className="col-md-3 col-sm-6">
         <h4>Pagos </h4>
        <ul className='list-unstyled'>
        <li>Bookpoint Tarjeta Business </li>
        <li>Compra con puntos </li>
        <li>Descuentos </li>
        <li>Mi cuenta </li>
        </ul>
        </div>

         {/* Columna 1 */}
         <div className="col-md-3 col-sm-6">
            <h4>Ayuda </h4>
        <ul className='list-unstyled'>
            <li>Mis pedidos </li>
            <li>envios </li>
            <li>devoluciones y reemplazos </li>
            <li>Ayuda </li>
        </ul>
        </div>
        </div>

        {/*Footer Bottom  */}
        <div className="footer-bottom container">
        <img src="/assets/landing/logo-footer.png" style={{width:'150px'}} alt="logo" />
        <p className="text-xs-center">
        &copy;{new Date().getFullYear()} Bookpoint Website- All Rights Reserved
        </p>
        </div>
        </div>
        </FooterContainer>
    )
}

export default Footer;

// ** Styles **

const FooterContainer = styled.footer`

.footer-middle{
    background: #7FA683;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 100px;
    padding-right: 100px;
}

.footer-bottom{
    display: flex;
    flex-direction: column;
    align-items: center;

}

.row h4 {
    font-size: 20px;
}

`;