Proyecto Final Book Point

Book Point es una tienda virtual donde los usuarios pueden acceder a las compras de libros, dejar review sobre los mismos a los autores y tienen la posibilidad de adquirir a través del sitio web gift cards para los usuarios que quieran dar un regalo de manera innovadora. 

Bookpoint presenta una sección de "Review" que permite que los usuarios registrados puedan enviar un review sobre el libro, pudiendo modificar datos si lo desean (apellido, contraseña, mensaje del review) o eliminar el comentario. 

A su vez cuenta con la sección de login, que permite al usuario registrarse , ingresando los datos del formulario y continuando navegando a través de las páginas seguiendo logueado con su usuario. Si el usuario lo desea puede desloguearse del sitio web , cambiar su contraseña o eliminar su cuenta. 

Este proyecto consta de un backend desarrollado en Node.js, la base de datos es con MongoDB, y el frontend está desarrollado en React.

Características
La aplicación tiene las siguientes funciones:

- Registrarse en el sitio web, completando un formulario donde el usuario puede acceder a su perfil personal
- Ingresar al sitio como usuario, e ingresar al perfil del usuario
- Eliminar perfil del usuario
- Editar contraseña del usuario
- Mantenerse logueado y seguir navegando por diferentes secciones de la página
- Desloguearse cuando lo deseen 
- Escribirle comentarios a los autores de los libros 
- Borrar el comentario del autor si lo desean
- Editar el comentario del autor si lo desean 
- Editar o Borrar otros datos en el comentario del autor como (apellido, contraseña o mensaje)
- Permite visualizar los libros mas vendidos, los libros por categorias
- Permite visualizar las gift cards disponibles para los usuarios que quieran enviar regalos 

Base de Datos

(MongoDB): Utilizada para almacenar datos relacionados con: 

- usuarios
- contraseñas
- Review sobre libros
- categoria de los libros
- Información sobre las gift cards en el landing page de la página ( desde Mongo DB, lee la informacion sobre la foto, el titulo, el sub-titulo, el boton)
- Información sobre las cards de los libros con los precios ( desde MongoDB lee la informacion que contienen la tarjetas, como el titulo, subtitulo, precio, icono de estrellas, imagen del libro y el botón de agregar con su icono) y su categoria - Backend (Node.js)

Express: Framework web de Node.js para crear API de forma rápida y sencilla.
Mongoose.
Bcrypt: Librería para el cifrado de contraseñas.
Jsonwebtoken: Implementación de JSON Web Tokens (JWT) para autenticación.
Cors:Middleware de Express para habilitar el intercambio de recursos de origen cruzado (CORS).
Dotenv: Módulo para cargar variables de entorno desde un archivo .env.
MongoDB: Librería de modelado de datos para MongoDB.
Node.js: Entorno de ejecución para JavaScript del lado del servidor.
Frontend (React)

React: Biblioteca JavaScript para construir interfaces de usuario.
React Router Dom: Enrutamiento para aplicaciones de React, facilitando la navegación entre diferentes vistas.
Bootstrap: Framework CSS para el diseño y la maquetación de la interfaz de usuario.
Bootstrap icons: libreria de iconos de bootstrap
React Bootstrap: Implementación de componentes de Bootstrap como elementos de React.
Axios: Cliente HTTP basado en promesas para realizar solicitudes a un servidor.
react-hot-toast: Para el envio de notificaciones.



¿Cómo instalar la aplicación? 

Backend

Clona este repositorio en tu máquina local utilizando el siguiente comando.
git clone https://github.com/florr-c/book-point-backend

Configura las variables de entorno necesarias. Crea un archivo .env en la raíz del proyecto y proporciona los valores necesarios para las variables de entorno como en el ejemplo: 

Ejemplo : 

PORT=8000
BASE_URL=http://localhost:8000
DB_URL=mongodb+srv://florr12345:12345Fc@cluster0.874fiin.mongodb.net/?retryWrites=true&w=majority
MONGO_URL = mongodb+srv://florr12345:12345Fc@cluster0.874fiin.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET = book123point4567


Antes de comenzar a ejecutar el comando para iniciar, debe realizar npm install para instalar todo lo necesario para que la aplicación funcione correctamente. Luego ejecutar el comando "node app.js" para que la DB comience a funcionar. 

Frontend

Clona este repositorio en tu máquina local utilizando el siguiente comando.
git clone https://github.com/florr-c/book-point-front


Antes de comenzar a ejecutar el comando para iniciar, debe realizar npm install para instalar todo lo necesario para que la aplicación funcione correctamente. Luego ejecutar el comando "npm run dev" para que se ejecute la app. 