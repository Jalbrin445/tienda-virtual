# Tienda Virtual - Proyecto Full Stack

Este repositorio contiene el código fuente completo de una tienda virtual, dividido en una arquitectura cliente-servidor (Monorepo). El proyecto está construido con un enfoque moderno utilizando **React** para la interfaz de usuario y **Node.js (Express)** con **PostgreSQL** para el manejo de datos y lógica de negocio.

## Estructura del Respositorio

El proyecto se divide en dos directorios principales

- [`/client`](./client/README.md): Aplicación cliente desarrollada con React y Tailwind CSS.
- [`/server`](./server/README.md): API RESTful desarrollada con Node.js, Express y PostgreSQL.

## Guíua de instalación y configuración local (Global)

Para ejecutar ese proyecto en tu entorno local, necesitarás tener instalado Node.js y un gestor de paquetes (preferiblemente `pnpm`, que es el utilizado en el entorno backend).

1. **Clonar el repositorio:**
    ```bash
    git clone <https://github.com/Jalbrin445/tienda-virtual>
    cd <tienda-virtual>
    ```
2. **Levantar el Backend:**

    ```bash
    cd server
    pnpm install
    pnpm run dev
    ```

3. **Levantar el Frontend:**

    ```bash
    cd client
    npm install
    npm run dev
    ```

## Contribuciones.

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, sigue estos pasos:

1. Haz un Fork del proyecto.
2. Crea una rama con tu nueva característica con
    ```bash 
    git checkout -b feature/NuevaCaracteristica
    ```
3. Realiza tus cambios y haz commit
    ```bash
    git commit -m 'Añadir nueva característica'
    ```
4. Haz push a tu rama
    ```bash
    git push origin feature/NuevaCaracteristica
    ```

## Licencia.

Este proyecto está bajo la licencia **ISC**.

## Contacto
* Desarrollador/Autor: [@Jalbrin445](https://github.com/Jalbrin445)
* Correo: [mezaguzmanjuanalbrin@gmail.com](mailto:mezaguzmanjuanalbrin@gmail.com)
* Portafolio web: [Mi-portafolio](https://mi-portafoliojamg.vercel.app/#)
