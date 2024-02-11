<a name="readme-top"></a>

# Documentación de la API de Tareas

> Esta documentación explica el funcionamiento de la API de Tareas desarrollada con Express y Typescript. Se describe cómo ejecutar la API localmente y luego cómo se ha implementado en AWS Elastic Beanstalk y RDS, conectándose a una base de datos PostgreSQL. Además, se incluyen capturas de pantalla de ejemplos de los diferentes métodos.

## Ejecución en local

### Requisitos

-- Node.js

-- Npm

-- PostgreSQL

### Instalación

1. Clonar el repositorio
   ```sh
    git clone https://github.com/srdgz/taskslist-api.git
    cd taskslist-api
   ```
2. Instalar dependencias
   ```sh
    npm install
   ```
3. Configurar la base de datos local
   ```sh
    Con una herramienta como pgAdmin configura las credenciales de la base de datos de PostgreSQL que encontrarás en el archivo `knexfile.ts` en el directorio `src`
   ```
4. Ejecutar migraciones y semillas
   ```sh
   npx knex migrate:latest
   npx knex seed:run
   ```
5. Iniciar la API localmente
   ```sh
   npm run start
   ```
6. Acceder a la API
   ```sh
   http://localhost:3000
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Arquitectura en AWS

### Servicios utilizados

1. AWS Elastic Beanstalk

   - Despliegue de la API

2. Amazon RDS (PostgreSQL)
   - Base de datos gestionada

### Configuración

- Elastic Beanstalk:

  - Plataforma: Node.js
  - Entorno: Desarrollo y Producción

- Amazon RDS:
  - Motor de Base de Datos: PostgreSQL
  - Instancia: db.t4.micro
  - Configuración de grupos de seguridad para controlar el acceso a la base de datos

### Relación entre servicios

Elastic Beanstalk es la plataforma que aloja la API de Node.js (Express.js) Ésta se conecta a la base de datos PostgreSQL en AWS RDS.

Las credenciales de conexión y la información de la base de datos se gestionan de forma segura a través de las variables de entorno.

En este caso se han configurado los grupos de seguridad de AWS RDS que controlan el acceso a la base de datos (de forma excepcional se permite el acceso desde cualquier IP)

### URL de la API en AWS

[AWS](http://srdgz.eu-west-3.elasticbeanstalk.com/)

## API endpoints

1. Mensaje de bienvenida
   - Endpoint: "/"
   - Método: GET
   - Descripción: muestra un mensaje de bienvenida a la API
   - Prueba con Postman: [LocalHost_Inicio](https://ibb.co/F3jhzVg)
2. Obtener todas las tareas
   - Endpoint: "/tasks"
   - Método: GET
   - Descripción: devuelve una lista con todas las tareas almacenadas en la base de datos
   - Prueba con Postman: [LocalHost_GetAll](https://ibb.co/XpWLkDv)
3. Obtener una tarea
   - Endpoint: "/tasks/:id"
   - Método: GET
   - Descripción: devuelve los detalles de una tarea específica identificada por el parámetro ID
   - Prueba con Postman: [LocalHost_GetOne](https://ibb.co/Dp9gftv)
4. Crear una tarea
   - Endpoint: "/tasks"
   - Método: POST
   - Descripción: añade una nueva tarea a la base de datos. Requiere los siguientes campos en el cuerpo del JSON: title, description, and status (Pendiente, En progreso, o Completado)
   - Prueba con Postman: [LocalHost_Create](https://ibb.co/MnqKjKh)
5. Actualizar una tarea
   - Endpoint: "/tasks/:id"
   - Método: PUT
   - Descripción: actualiza los campos de una tarea específica identificada por el parámetro ID. Requiere que en el cuerpo del JSON se incluya el campo a modificar (uno o varios): title, description, o status (Pendiente, En progreso, o Completado)
   - Prueba con Postman: [LocalHost_Update](https://ibb.co/kgz2387)
6. Eliminar todas las tareas
   - Endpoint: "/tasks"
   - Método: DELETE
   - Descripción: elimina todas las tareas de la base de datos
   - Prueba con Postman: [LocalHost_DeleteAll](https://ibb.co/swswfSj)
7. Eliminar una tarea
   - Endpoint: "/tasks/:id"
   - Método: DELETE
   - Descripción: elimina una tarea específica identificada por el parámetro ID de la base de datos
   - Prueba con Postman: [LocalHost_DeleteOne](https://ibb.co/BZwqWjP)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Autora

👩🏻 GitHub: [@srdgz](https://github.com/srdgz)

🖥️ LinkedIn: [LinkedIn](https://www.linkedin.com/in/sandra-rodriguez-reyes)
