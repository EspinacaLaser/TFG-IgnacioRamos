# Proyecto Gestión Hotelera

¡Hola! Este es mi proyecto de fin de ciclo de DAW, una aplicación web para gestionar un hotel desde cero. Aquí tienes toda la info básica y lo que puedes encontrar dentro del proyecto.

---

## 👤 Tipos de usuario y roles

### Cliente
- Se registra y accede desde la web.
- Puede ver habitaciones, reservar, consultar/cancelar sus reservas y editar sus datos.
- Solo ve lo suyo, no puede tocar nada de gestión.

### Recepcionista
- Acceso solo para personal (login propio).
- Puede ver todas las habitaciones, ver detalles, eliminar, gestionar reservas de clientes, y fichar su jornada (entrada/salida).
- No puede crear habitaciones ni gestionar usuarios.

### Administrador
- Acceso solo para admins (login propio).
- Puede crear habitaciones nuevas, ver/eliminar todas las habitaciones, ver todos los clientes registrados y ver las jornadas de los recepcionistas.
- No puede reservar ni fichar jornadas.

---

## 🛠 Tecnologías usadas

- **React + TypeScript** para el frontend.
- **Vite** para el arranque rápido.
- **React Router DOM** para las rutas.
- **Material UI (MUI)** para los componentes y el diseño (antes usaba Tailwind, pero me pasé a MUI porque es más cómodo y potente para React).
- **Theme propio** en MUI: colores, fuentes y tamaños definidos a mi gusto en `main.tsx`.
- **PHP** para los endpoints y lógica del backend.
- **MySQL** como base de datos.

---

## 🎨 Diseño y theme

- Todo el diseño usa el theme global de MUI que definí en `main.tsx`.
- Colores y fuentes personalizados.
- Todo es responsive, así que se ve bien en móvil y en PC.
- Nada de Tailwind, ahora todo es MUI y theme propio.

---

## 📁 Estructura de carpetas

```
/hotel-gestion
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── admin/
│   │   ├── habitaciones/
│   │   ├── login/
│   │   ├── pago/
│   │   ├── recepcion/
│   │   ├── reservas/
│   │   └── ui/
│   ├── context/
│   ├── endpoints/         # (los endpoints reales están en htdocs/hotel-api)
│   ├── hash/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── sql/               # aquí está mi BDD exportada
│   └── App.tsx
├── index.html
├── package.json
└── README.md
```

---

## 🗄️ Base de datos y tablas

- **clientes**: los usuarios normales.
- **recepcionistas**: los trabajadores.
- **administradores**: los admins.
- **habitaciones**: cada habitación del hotel.
- **imagenes_habitacion**: imágenes asociadas a habitaciones.
- **reservas**: reservas hechas por los clientes.
- **fichajes**: entradas y salidas de los recepcionistas (para el control de jornada).

---

## 🔗 Endpoints principales (PHP)

- **Habitaciones**
  - `crear_habitacion.php`: crear habitación (solo admin).
  - `listar_habitaciones.php`: ver habitaciones.
  - `eliminar_habitacion.php`: borrar habitación.
  - `detalle_habitacion.php`: ver detalles.
- **Imágenes**
  - `imagenes_habitaciones.php`: lista imágenes disponibles.
  - `subir_imagen_habitacion.php`: (opcional) subir imagen.
- **Clientes**
  - `listar_clientes.php`: ver todos los clientes.
- **Recepcionistas y jornadas**
  - `listar_jornadas.php`: ver jornadas de los recepcionistas.
- **Reservas**
  - `crear_reserva.php`, `confirmar_reserva.php`, `listar_reservas.php`, etc.
- **Utilidades**
  - `/util/` contiene scripts como generación de PDFs (`fpdf`) y utilidades varias.

---

## 🚦 ¿Qué puede hacer cada usuario?

- **Cliente:** solo ve y gestiona lo suyo.
- **Recepcionista:** gestiona habitaciones y reservas, y ficha su jornada.
- **Admin:** puede crear habitaciones, ver/eliminar todo, ver clientes y jornadas.

---

## 🚀 Guía para instalar y ejecutar el proyecto en otro equipo

### 1. **Clona o descarga el proyecto**

Descarga el ZIP desde GitHub o clónalo:
```bash
git clone https://github.com/tu-usuario/hotel-gestion.git
cd hotel-gestion
```

### 2. **Instala las dependencias del frontend**

Necesitas Node.js instalado. Luego ejecuta:
```bash
npm install
```

### 3. **Configura el backend (PHP + MySQL)**

- **Instala XAMPP** (o similar) en tu equipo.
- Copia la carpeta `src/endpoints/` a:
  ```
  C:\xampp\htdocs\hotel-api\
  ```
  (o la ruta que uses para tu servidor local).
- **Imágenes de habitaciones:**  
  Dentro del proyecto tienes una carpeta con imágenes de habitaciones.  
  **Copia todas esas imágenes a:**  
  ```
  C:\xampp\htdocs\hotel-api\img\habitaciones\
  ```
  (crea la carpeta si no existe y mete ahí las imágenes que quieras usar).
- **PDF y utilidades:**  
  Si vas a usar la generación de PDFs o utilidades, copia la carpeta `util/` (que incluye `fpdf` y scripts propios) a:
  ```
  C:\xampp\htdocs\hotel-api\util\
  ```

### 4. **Restaura la base de datos**

- Abre **phpMyAdmin** o tu gestor de MySQL.
- Crea una base de datos nueva (por ejemplo, `hotel_gestion`).
- Importa el archivo SQL que está en:
  ```
  /src/sql/gestion_hotel.sql
  ```
- Comprueba que todas las tablas y datos se han importado correctamente.

### 5. **Configura las rutas de los endpoints**

- Asegúrate de que las rutas en el frontend (fetch a los endpoints PHP) coinciden con la ruta real de tu servidor local, normalmente:
  ```
  http://localhost/hotel-api/...
  ```
- Si cambias la ruta, actualiza las URLs en los servicios del frontend.

### 6. **Extensiones y utilidades**

- Si usas generación de PDFs, asegúrate de que la carpeta `/util/` (con `fpdf` y demás scripts) está en:
  ```
  C:\xampp\htdocs\hotel-api\util\
  ```
- No olvides tener habilitado el módulo `mysqli` en tu PHP.

### 7. **Arranca el frontend**

```bash
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📝 Notas y consejos

- **Usuarios y contraseñas:** Puedes crear usuarios desde el propio frontend o insertar algunos en la base de datos para probar.
- **Imágenes:** Si quieres usar tus propias imágenes de habitaciones, ponlas en la carpeta indicada y usa la ruta relativa `/hotel-api/img/habitaciones/tuimagen.jpg` al crear habitaciones.
- **PDFs y utilidades:** Si usas funciones como exportar reservas a PDF, asegúrate de que la carpeta `util/` está bien ubicada y que tienes permisos de escritura.
- **CORS:** Si tienes problemas de CORS, revisa los headers en los endpoints PHP.
- **Todo el código es mío, hecho desde cero para el TFG de DAW.**

---

**¡Gracias por molestarte en leer el readme de mi proyecto :]**  
Ignacio, 21 años, futuro Técnico Superior en Desarrollo de Aplicaciones Web 🚀