#Vinos_Argentina - Proyecto de venta de vinos online

##Introducción

Este proyecto consiste en una aplicación web que permite a los usuarios comprar vinos online de forma fácil y segura. El objetivo es ofrecer una amplia variedad de vinos de calidad, procedentes de diferentes variedades y bodegas, a precios competitivos y con envío a domicilio.

La aplicación web cuenta con las siguientes características:

- Un catálogo de vinos con información sobre cada producto, como el nombre, la denominación de origen, el tipo, la añada, la graduación alcohólica, el precio y la valoración de los clientes.
- Un sistema de búsqueda y filtrado de vinos por diferentes criterios, como el nombre, la variedad, el tipo o el precio.
- Un sistema de recomendación de vinos basado en las preferencias y el historial de compras de cada usuario (Proximamente).
- Un carrito de compras donde los usuarios pueden añadir, modificar o eliminar los vinos que quieren comprar.
- Un sistema de pago seguro mediante tarjeta de crédito, debito o MercadoPago.
- Un sistema de gestión de pedidos donde los usuarios pueden consultar el estado de sus compras y recibir notificaciones sobre el envío y la entrega (Proximamente).
- Un sistema de registro e inicio de sesión donde los usuarios pueden crear una cuenta personalizada con sus datos personales y sus direcciones de envío.
- Un sistema de valoración y comentarios donde los usuarios pueden puntuar y opinar sobre los vinos que han comprado (Proximamente).

## Tecnologías utilizadas

El proyecto está desarrollado con las siguientes tecnologías:

### FRONTEND

El frontend está hecho con **ANGULAR**, un framework para crear aplicaciones web dinámicas y responsivas. Se ha utilizado la versión 12.2.0.

El diseño y la maquetación se han realizado con **HTML**, **CSS** y **BOOTSTRAP**, un framework para crear interfaces web elegantes y adaptativas. Se ha utilizado la versión 5.1.0.

La comunicación con el backend se ha realizado mediante **servicios REST** que consumen datos en formato **JSON**.

### BACKEND

El backend está hecho con **SPRING**, un framework para crear aplicaciones web basadas en Java. Se ha utilizado la versión 2.5.4.

El lenguaje de programación utilizado es **JAVA**, en su versión 8.0.

La gestión de dependencias se ha realizado con **MAVEN**, una herramienta para automatizar el proceso de construcción del software. Se ha utilizado la versión 3.8.2.

El proyecto está basado en **SPRING BOOT**, una herramienta que simplifica la configuración y el despliegue de aplicaciones web basadas en Spring. Se ha utilizado la versión 2.5.4.

El proyecto utiliza las siguientes librerías o módulos de Spring:

- **SPRING WEB**: para crear servicios web RESTful.
- **SPRING DATA JPA**: para acceder y manipular datos en una base de datos relacional mediante el uso del lenguaje **JPQL** (Java Persistence Query Language).
- **SPRING SECURITY**: para proporcionar seguridad a la aplicación web mediante el uso de autenticación, autorización y protección contra ataques comunes como CSRF (Cross-Site Request Forgery).
- **SPRING BOOT DEVTOOLS**: para facilitar el desarrollo y la depuración del código mediante el uso de funciones como el reinicio automático o el reemplazo en caliente.

## Base de datos

La base de datos utilizada es **MySQL**, un sistema de gestión de bases de datos relacionales. Se ha utilizado la versión 8.0.26.

El modelo entidad-relación de la base de datos es el siguiente:

![Modelo entidad-relación]

--- --- ---
Entidades:

Cliente

Atributos: id, nombre, apellido, email, contraseña, fecha_nacimiento, telefono
Direccion

Atributos: id, calle, numero, piso, departamento, ciudad, provincia, codigo_postal
Pedido

Atributos: id, fecha, total, estado
Relación: cliente_id (clave foránea relacionada con la entidad Cliente)
Producto

Atributos: id, nombre, denominacion_origen, tipo, anada, graduacion_alcoholica, precio, stock
Relación: Linea_Pedido (para la relación "Contiene"), Valoracion (para la relación "Valora")
Linea_Pedido (Entidad de relación para la relación "Contiene")

Atributos: id, cantidad, subtotal
Relaciones: pedido_id (clave foránea relacionada con la entidad Pedido), producto_id (clave foránea relacionada con la entidad Producto)
Valoracion (Entidad de relación para la relación "Valora")

Atributos: id, puntuacion, comentario, fecha
Relaciones: cliente_id (clave foránea relacionada con la entidad Cliente), producto_id (clave foránea relacionada con la entidad Producto)
Relaciones:

Cliente -> Direccion (Tiene) - Relación uno a muchos
Cliente -> Pedido (Realiza) - Relación uno a muchos
Pedido -> Producto (Contiene) - Relación muchos a muchos, materializada por la entidad Linea_Pedido
Cliente -> Producto (Valora) - Relación muchos a muchos, materializada por la entidad Valoracion
--- --- --- 

Los scripts para crear y poblar las tablas se encuentran en el directorio **src/main/resources** del proyecto, en los archivos **schema.sql** y **data.sql** respectivamente.

## Instalación y ejecución

Para instalar y ejecutar el proyecto se requiere tener instalado previamente:

- **Node.js**: un entorno de ejecución para JavaScript. Se ha utilizado la versión 14.17.5.
- **Angular CLI**: una herramienta para crear y gestionar proyectos Angular. Se ha utilizado la versión 12.2.0.
- **Java Development Kit (JDK)**: un conjunto de herramientas para desarrollar aplicaciones Java. Se ha utilizado la versión 11.
- **Maven**: una herramienta para gestionar dependencias y construir software Java. Se ha utilizado la versión 3.8.2.
- **MySQL**: un sistema de gestión de bases de datos relacionales. Se ha utilizado la versión 8.0.26.

Los pasos para instalar y ejecutar el proyecto son los siguientes:

1. Clonar o descargar el repositorio de Github en una carpeta local.
2. Abrir una terminal y situarse en la carpeta del proyecto.
3. Ejecutar el comando `npm install` para instalar las dependencias del frontend.
4. Ejecutar el comando `ng serve` para iniciar el servidor del frontend en el puerto 4200.
5. Abrir otra terminal y situarse en la carpeta del proyecto.
6. Ejecutar el comando `mvn spring-boot:run` para iniciar el servidor del backend en el puerto 8080.
7. Abrir un navegador web y acceder a la dirección http://localhost:4200 para ver la aplicación web.

## Capturas de pantalla o vídeos

Aquí se muestran algunas capturas de pantalla o vídeos que ilustran el funcionamiento del proyecto y sus principales funcionalidades:

- Página principal: muestra el catálogo de vinos con información detallada sobre cada producto.

![Página principal]

- Página de carrito: muestra los vinos que el usuario ha añadido al carrito y permite modificar o eliminar la cantidad. Página de pago: permite al usuario introducir sus datos de pago y confirmar su compra

![Página de carrito y Página de pago]

- Página de pedidos: muestra el historial de pedidos del usuario y el estado de cada uno.

![Página de pedidos]

- Página de inicio de sesión: permite al usuario acceder a su cuenta con su correo electrónico y su contraseña.

![Página de inicio de sesión]

## Créditos y agradecimientos

Este proyecto ha sido realizado por:

- Fabricio Matias Toso, desarrollador frontend.
- Fabricio Matias Toso, desarrollador backend.
- Fabricio Matias Toso, diseño gráfico.

Quiero agradecer a las siguientes fuentes de información o recursos que hemos utilizado para realizar este proyecto:

- [Angular](https://angular.io/): el framework para crear aplicaciones web dinámicas y responsivas.
- [Bootstrap](https://getbootstrap.com/): el framework para crear interfaces web elegantes y adaptativas.
- [Spring](https://spring.io/): el framework para crear aplicaciones web basadas en Java.
- [MySQL](https://www.mysql.com/): el sistema de gestión de bases de datos relacionales.
- [Unsplash](https://unsplash.com/): el sitio web que ofrece imágenes gratuitas y de alta calidad.
- [Lorem Ipsum](https://www.lipsum.com/): el generador de texto ficticio que hemos usado para rellenar los comentarios de los clientes.

Espero que este proyecto te haya gustado y te haya servido para aprender algo nuevo. Si tienes alguna duda, sugerencia o comentario, no dudes en contactarme. ¡Gracias por tu atención! 😊
