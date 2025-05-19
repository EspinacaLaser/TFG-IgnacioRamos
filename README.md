# Proyecto de Gestión Hotelera

Este es un proyecto de gestión hotelera desarrollado como parte del Trabajo de Fin de Grado (TFG) del Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW). Se trata de una aplicación web construida con **React**, **TypeScript** y **Vite**, orientada a la gestión de reservas y operaciones en un hotel. La aplicación cuenta con varias interfaces según el tipo de usuario: cliente, recepcionista y administrador.

## 🛠 Tecnologías utilizadas

- **React**: Librería principal para construir interfaces de usuario dinámicas.
- **TypeScript**: Añade tipado estático a JavaScript para mayor robustez y mantenimiento.
- **Vite**: Herramienta moderna para crear y ejecutar proyectos de React de forma rápida.
- **React Router DOM**: Manejador de rutas para permitir navegación entre vistas según el tipo de usuario.
- **CSS personalizado / Variables CSS**: Para gestionar el estilo e identidad visual del proyecto (colores, tipografías, etc.).

## 🧱 Estructura del proyecto

La base del proyecto se ha generado con `Vite` usando el template oficial de React con TypeScript. A partir de ahí, se ha instalado y configurado React Router DOM para dividir la aplicación en distintas rutas e interfaces. Estas rutas representan las vistas según el rol del usuario (cliente, recepcionista o administrador).

La estructura general es la siguiente:

/hotel-gestion
├── public/
├── src/
│ ├── assets/ # Imágenes, logos, etc.
│ ├── components/ # Componentes reutilizables
│ ├── pages/ # Páginas principales por rol
│ ├── routes/ # Definición de rutas con React Router
│ ├── styles/ # Archivos CSS y variables globales
│ ├── types/ # Tipos TypeScript personalizados
│ └── App.tsx # Componente raíz con las rutas
├── index.html
├── package.json
└── README.md


## 🔌 Instalación del proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/hotel-gestion.git
   cd hotel-gestion
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Esto abrirá la aplicación en tu navegador en `http://localhost:5173` (o el puerto que indique la terminal).

## 🚀 Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera la build de producción.
- `npm run preview`: Previsualiza la build de producción.
- `npm run lint`: Ejecuta el linter para comprobar la calidad del código.

## 🏗️ Pasos para crear el proyecto desde cero

1. Crear el proyecto base con Vite, React y TypeScript:

   ```bash
   npm create vite@latest hotel-gestion -- --template react-ts
   cd hotel-gestion
   ```

2. Instalar React Router DOM:

   ```bash
   npm install react-router-dom
   ```

3. (Opcional) Instalar ESLint y otras herramientas de desarrollo:

   ```bash
   npm install -D eslint
   ```

4. Crear la estructura de carpetas en `src/` según las necesidades del proyecto.

5. Personalizar los archivos y comenzar el desarrollo.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia de Ignacio
