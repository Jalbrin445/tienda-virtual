# Tienda Virtual API (Backend)

API RESTful desarrollada en **Node.js** y **Express** para una tienda virtual, estructurada bajo una arquitectura limpia de capas (**Rutas, Controladores, Servicios y Modelos**) para garantizar escalabilidad, mantenibilidad y separación de responsabilidades.

## Características Principales.

* **Arquitectura Modular:** Separación estricta de responsabilidades (Rutas, Controladores, Servicios y Modelos).
* **Autenticación Segura:** Control de acceso mediante tokens (JWT).
* **Manejo de Errores Centralizado:** Respuestas HTTP claras y estructuradas en formato JSON.
* **Logs y Auditoría:** Middleware personalizado para registro de peticiones en tiempo real.
* **Validación de Datos:** Control y saneamiento de entradas de cliente.

## Estructura del Proyecto

El proyecto sigue una organización profesional por capas:

```text
server/
├── src/
│   ├── config/           # Configuración de base de datos y variables de entorno
│   ├── controllers/      # Coordinadores HTTP (Manejo de req, res y códigos de estado)
│   ├── services/         # Capa de lógica de negocio pura
│   ├── models/           # Esquemas y persistencia de datos (Base de datos)
│   ├── routes/           # Enrutadores con express.Router()
│   ├── middlewares/      # Funciones intermedias (Auth, Logger, etc.)
│   ├── app.js            # Configuración principal de Express y middlewares globales
│   └── server.js         # Punto de entrada para levantar el servidor HTTP
├── .env.example          # Plantilla de variables de entorno
├── .gitignore
├── package.json
└── README.md
```

## Tecnologías Utilizadas

* **Node.js:** Entorno de Ejecución para JavaScript.
* **Express:** Framework web para Node.js.
* **PostgreSQL:** Base de datos para garantizar la integirdad de las transacciones de la tienda.
* **JSON Web Tokens (JWT):** Autenticación y seguridad.
* **Nodemon:** Herramienta de desarrollo para reinicio automático del servidor.

## Instalación y Uso

Este backend utiliza pnpm como gestor de paquetes. Por lo tanto, asegúrate de tenerlo instalada con:
    ```bash
    npm install -g pnpm
    ```
1. Instalar las dependencias:
```bash
pnpm install
```

2. Configurar las variables de entorno:

* Duplica el archivo **.env.example** y renómbralo a `.env` dentro de `server/`.
* Completa las credenciales de PostgreSQL. Puedes configurar la conexión con `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD` y `DB_NAME`, o usar `DATABASE_URL`.
* `PORT` cambia el puerto HTTP del servidor; si no se define, usa `3000`. `DB_PORT` usa `5432` si no se define.
* No subas `.env` al repositorio: contiene credenciales y ya está excluido por `.gitignore`.

3. Inicia el servidor en modo desarrollo (con recarga automática mediante Nodemon):
```bash
pnpm run dev
```
4. Iniciar el servidor en modo producción:
```bash
pnpm start
```
