# Tienda Virtual - Frontend (React)

Interfaz de usuario para la tienda virtual diseñada para ofrecer una experiencia rápida, reactiva y moderna. Este cliente web consume la API RESTful del backend para gestionar productos, usuarios y el carrito de compras.

## Características Principales

- **Desarrollo Ultrarrápido:** Empaquetado y recarrga en caliente gestionados por **Vite**.
- **Diseño Responsivo:** Estilos modernos construidos de forma nativa con **Tailwind CSS v4**.
- **Enrutamiento Fluido:** Navegación SPA (Single Page Application) fluida gracias a **React Router v7**.
- **Feedback Interactivo:** Sistema de notificaciones amigables para el usuario utilizando **React Hot Toast**.
- **Calidad de Código:** Configuración estricta de **ESLint** con reglas React y React Hooks para mantener un código limpio.

## Estructura del Proyecto

```text
frontend/
├── public/             # Assets estáticos (íconos, fuentes)
├── src/
│   ├── assets/         # Imágenes de la tienda y recursos multimedia
│   ├── components/     # Componentes UI reutilizables (Botones, Navbar, Tarjetas de producto)
│   ├── context/        # Estados globales (Context API para Carrito, Autenticación)
│   ├── pages/          # Vistas principales (Inicio, Catálogo, Checkout)
│   ├── services/       # Funciones para consumir la API del backend (fetch/axios)
│   ├── App.jsx         # Componente raíz y configuración de rutas
│   └── main.jsx        # Punto de entrada principal de React
├── vite.config.js      # Configuración de Vite y plugins
└── package.json        # Dependencias y scripts
```

## Tecnologías Utilizadas.

* **Producción:**
```text
tailwindcss/vite: 4.3.3
react: 19.2.8
react-dom: 19.2.8
react-hot-toast: 2.6.1
react-router-dom: 7.18.4
```

* **Desarrollo:**
```text
eslint/js: 10.0.1
types/react: 19.2.18
types/react-dom: 19.2.5
vitejs/plugin-react: 6.1.1
autoprefixer: 10.5.4
eslint: 10.9.1
eslint-plugin-react-hooks: 7.1.1
eslint-plugin-react-refresh: 0.5.6
globals: 17.12.0
postcss: 8.5.28
tailwindcss: 4.3.3
vite: 8.2.2
```

# Instalación y uso:

1. Instalar dependencias:
```bash
pnpm install
```
2. Iniciar el servidor de desarrollo:
```bash
pnpm run dev
```