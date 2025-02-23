# Challenge nodejs + react.js - afrus.org

Este proyecto consiste en una API REST desarrollada con Node.js, Express y Prisma, y una aplicación frontend desarrollada con React. A continuación, se detallan los pasos para ejecutar tanto la API REST como la aplicación React, así como para ejecutar los tests correspondientes.

---

## **Tabla de Contenidos**

1. [Requisitos Previos](#requisitos-previos)
2. [Configuración y ejecución del proyecto](#configuración-del-y-ejecucion-del-proyecto)
3. [Documentación de la API](#documentación-de-la-api)
4. [Limitaciones de la API](#limitaciones-de-la-api)
5. [Notas adicionales](#notas-adicionales)

---

## **Requisitos Previos**

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (v18 o superior)
- **npm** (viene con Node.js)
- **Docker** (para ejecutar la base de datos MySQL y Swagger UI)
- **Docker Compose** (viene con Docker)

---

## **Configuración y ejecución del proyecto**

1.  Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2.  Levanta los servicios con Docker Compose:

    ```bash
    docker-compose up --build
    ```

    Esto levantará los siguientes servicios:
    La base de datos MySQL
    React App disponible en http://localhost:3000.
    API REST disponible en http://localhost:3001.
    Swagger UI disponible en http://localhost:8080.

3.  Aplica las migraciones de Prisma:

    ```bash
    sudo docker exec api_rest npx prisma migrate dev --name init
    ```

4.  Ejecutar los seeders:

    ```bash
    sudo docker exec api_rest node database/seeders/seed.js
    ```

5.  Ejecuta los servicios:

    ```bash
    sudo docker exec api_rest node src/services/FetchFilteredProductService.js
    sudo docker exec api_rest node src/services/FetchTransactionsReportService.js
    ```

6.  Ejecuta los tests unitarios:

    ```bash
    sudo docker exec api_rest npm test
    ```

7.  Ejecuta los tests E2E y de componentes:

    ```bash
    cd frontend
    npx cypress open
    ```

## **Documentación de la API**

La documentación de la API está disponible en Swagger UI. Una vez que la API REST esté en ejecución, accede a:
Copy

http://localhost:8080

Aquí podrás ver y probar todos los endpoints disponibles.

## **Limitaciones de la API**

La API REST desarrollada en este proyecto no incluye las siguientes funcionalidades:

Autenticación de Usuarios: No se implementó un sistema de autenticación (por ejemplo, JWT, OAuth, etc.).
Roles y Permisos: No se manejan roles ni permisos para los usuarios.
Rate Limiting: No se limita el número de solicitudes que un cliente puede hacer en un período de tiempo.
Caché: No se implementó un sistema de caché para mejorar el rendimiento de las consultas frecuentes.

## **Notas Adicionales**

Base de Datos: La base de datos MySQL se ejecuta en un contenedor de Docker. Los datos persisten en un volumen de Docker.

Variables de Entorno: Asegúrate de configurar correctamente las variables de entorno en los archivos .env.

Prisma: Las migraciones y seeders se ejecutan dentro del contenedor de la API REST.
