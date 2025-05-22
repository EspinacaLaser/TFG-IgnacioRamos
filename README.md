# Proyecto de Gestión Hotelera

Aplicación web para la gestión integral de un hotel, desarrollada como Trabajo de Fin de Grado (TFG) en DAW. Incluye interfaces y funcionalidades diferenciadas para **cliente**, **recepcionista** y **administrador**.

## 🛠 Tecnologías utilizadas

- **React + TypeScript**: Frontend moderno y tipado.
- **Vite**: Bundler ultrarrápido.
- **React Router DOM**: Navegación SPA.
- **Tailwind CSS**: Utilidades CSS para un diseño rápido, responsivo y profesional.
- **PHP (API REST)** y **MySQL**: Backend y base de datos (no incluidos en este repo).

## 🧱 Estructura del proyecto

```
/hotel-gestion
├── public/
├── src/
│   ├── assets/         # Imágenes, logos, etc.
│   ├── components/     # Componentes reutilizables (Header, Footer, Login, etc.)
│   ├── pages/          # Vistas por rol (cliente, recepcionista, admin, shared)
│   ├── routes/         # Configuración de rutas
│   ├── layouts/        # Layouts reutilizables (por rol)
│   ├── services/       # Lógica de consumo de API
│   └── App.tsx         # Componente raíz
├── index.html
├── tailwind.config.js
├── package.json
└── README.md
```

## 🚀 Instalación y uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/hotel-gestion.git
   cd hotel-gestion
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Instala y configura Tailwind CSS:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   - Edita `tailwind.config.js` para incluir los paths de tus archivos.
   - Asegúrate de importar Tailwind en `src/index.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Accede a [http://localhost:5173](http://localhost:5173).

## 📦 Scripts útiles

- `npm run dev` — Servidor de desarrollo
- `npm run build` — Build de producción
- `npm run preview` — Previsualización de la build
- `npm run lint` — Linter de código

## 🧩 Características destacadas

- **Diseño responsive y profesional** gracias a Tailwind CSS.
- **Rutas protegidas** según el rol del usuario (cliente, recepcionista, admin).
- **Componentes reutilizables** y estructura modular.
- **Flujo de autenticación completo**: login y registro de clientes, login de personal autorizado, logout y protección de rutas.
- **Visualización del usuario autenticado** en los headers de cada rol.
- **Preparado para integración con backend PHP/MySQL**.
- **Fácil de extender**: añade nuevos roles, páginas o componentes fácilmente.

## 🔒 Seguridad y autenticación

- El sistema guarda el usuario autenticado en `localStorage` tras el login.
- Los layouts de cada rol protegen las rutas privadas y redirigen a `/login` si el usuario no está autenticado o no tiene el rol adecuado.
- El nombre del usuario aparece en el header junto al botón de cerrar sesión.
- El registro está disponible solo para clientes.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.

---

> **Nota:**  
> La lógica de negocio, autenticación avanzada y documentación detallada se desarrollan y explican en la memoria del TFG.