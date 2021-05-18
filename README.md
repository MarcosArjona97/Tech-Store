# Aenima-Project

Este fue el proyecto realizado para la postulación en Aenima.

Es una página web que muestra un catalogo de productos, en mi caso, componentes de PC. 
En su home page se puede apreciar la lista de productos con su respectiva imagen, nombre y precio, además de algunos efectos al pasar el mouse por encima y pudiendo acceder a la descripción completa del producto al hacer click sobre él.

Sobre el lado izquierdo se complementa una Side-bar la cual contiene la barra de búsqueda, opciones de ordenado por orden alfabético o precio, un botón mostrar todos los productos y otro para acceder a la página de administración de productos la cual me explayaré a continuación.

La página de administración consta de una pagina en blanco, la Barra de navegación superior (que está presente en todas las rutas) y una Side-bar del lado izquierdo la cual tiene 2 botones: Crear producto y Modificar/Eliminar producto.



## CREAR PRODUCTO
Al clickear esta opción se nos mostrará un formulario para completar con Nombre, Descripción, Precio y URL de la imagen del producto.




## MODIFICAR/ELIMINAR PRODUCTO
En esta instancia tendremos acceso a una lista de todos los productos existentes, y al final de cada producto 2 botones con iconos los cuales nos permiten Modificar o Eliminar ese producto. Al intentar eliminar nos dará una advertencia para asegurarnos, en caso de confirmar, se nos avisará que fue borrado e instantáneamente el producto desaparecerá. Cuando queramos modificar, se desplegará un formulario en el mismo lugar (reemplazando a la lista de productos) y el mismo estará completado por defecto con la informacion de ese producto con la posibilidad de hacer todos los cambios pertinentes.

## TECNOLOGIAS UTILIZADAS
- Javascript
- React.js
- React-Redux
- Sweetalert2
- HTML5
- CSS3
- Node.js
- Express.js
- PostgreSQL
- Sequelize

## INSTRUCCIONES PARA CORRER EL PROYECTO

- Tener instalado Postgresql
- Realizar `npm install` tanto sobre la carpeta `api` como en la carpeta `client`
- Crear un archivo `.env` dentro de `api` con las siguientes variables las cuales deben ser completadas con la propia información de postgres y la base de datos del usuario que corra el proyecto: 

```
DB_USER=postgresUser
DB_PASSWORD=userPassword
DB_HOST=localhost
DB_NAME=databaseName
```

- Hacer `npm start` desde `api` y desde `client`
- En postgres se debe crear una base de datos (este nombres es el que ira en el archivo `.env`) e importar el contenido del archivo `aenimadb`
