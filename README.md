# Proyecto Gestión Hotelera

¡Hola! Este es mi proyecto de fin de ciclo de DAW, una aplicación web para gestionar un hotel desde cero. Aquí tienes toda la info básica y lo que puedes encontrar dentro del proyecto.

---

## 👤 Tipos de usuario y funciones

### Cliente
- Puede **registrarse** o **loguearse** desde la web.
- Tiene una interfaz agradable donde puede navegar por páginas como:
  - **Inicio**
  - **Habitaciones**: ve todas las habitaciones disponibles, con sus detalles completos.
  - **Reservar**: puede reservar una habitación disponible, eligiendo fechas de entrada y salida, introduciendo sus datos personales y pasando por una pasarela de pago ficticia (por seguridad, no es real).
  - **Mis reservas**: ve sus reservas activas, puede cancelarlas y descargar un ticket en PDF como si fuese una factura.
- Solo puede ver y gestionar sus propios datos y reservas.
- Puede cerrar sesión en cualquier momento desde el menú.

### Recepcionista
- Solo puede **loguearse** (no hay registro para este rol, los usuarios ya están dados de alta en la BBDD para simular un caso real).
- Puede ver un **listado de todas las reservas activas**, ver información adicional de cada reserva y borrar reservas si es necesario.
- Tiene la opción de **registrar su hora de entrada y salida** del trabajo (fichar jornada).
- No puede crear habitaciones ni gestionar usuarios.
- Puede cerrar sesión en cualquier momento desde el menú.

### Administrador
- Solo puede **loguearse** (usuarios ya creados en la BBDD).
- Puede **crear habitaciones** introduciendo todos los parámetros necesarios.
- Puede ver un **listado de todos los clientes registrados** en la web.
- Puede ver el **registro de las horas de entrada y salida** de los recepcionistas para llevar el control de su horario.
- Puede ver/eliminar habitaciones y acceder a toda la gestión.
- Puede cerrar sesión en cualquier momento desde el menú.

---

## 🔑 Autenticación y AuthContext

- El proyecto usa un **AuthContext** propio que guarda la información del usuario logueado en `localStorage`.
- Esto permite que, aunque recargues la página, sigas autenticado y con tu sesión activa.
- El AuthContext también gestiona el cierre de sesión y la protección de rutas según el rol del usuario.
- Todos los usuarios pueden cerrar sesión en cualquier momento desde el menú superior.

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

La base de datos del proyecto se llama **gestion_hotel** y está pensada para cubrir todas las necesidades de gestión de un hotel real.  
Incluye las siguientes tablas principales:

- **clientes**: Guarda los datos de los usuarios registrados en la web (nombre, email, teléfono, contraseña y fecha de registro). Cada cliente puede tener varias reservas.
- **recepcionistas**: Aquí están los trabajadores del hotel que pueden acceder al panel de recepción. Incluye usuario, contraseña, nombre completo y si están activos.
- **administradores**: Usuarios con permisos de administración total. Tienen usuario, contraseña y nombre completo.
- **habitaciones**: Cada habitación del hotel tiene su propio registro con número, estado (disponible, ocupada, mantenimiento), capacidad, descripción y precio base.
- **imagenes_habitacion**: Relaciona cada habitación con sus imágenes (guarda la URL de cada imagen asociada a una habitación).
- **reservas**: Aquí se guardan todas las reservas hechas por los clientes, con referencias a la habitación y al cliente, fechas de entrada y salida, estado de la reserva, servicios extra (bufet, parking) y el total pagado.
- **fichajes**: Registra las horas de entrada y salida de los recepcionistas para el control de jornada laboral. Cada registro indica el recepcionista, el tipo de fichaje (entrada/salida) y la fecha/hora.
- **facturas**: (opcional) Guarda las facturas generadas a partir de reservas, con fecha de emisión y total.

Todas las tablas están relacionadas mediante claves foráneas para asegurar la integridad de los datos.  
El archivo SQL para crear y poblar la base de datos está en `/src/sql/gestion_hotel.sql`.  
Solo tienes que importarlo en tu phpMyAdmin o gestor de MySQL y tendrás la estructura y algunos datos de ejemplo listos para usar.

**Consejo:**  
Si quieres probar el proyecto desde cero, importa el SQL antes de arrancar el frontend y el backend, así tendrás usuarios, habitaciones y reservas de prueba para ver cómo funciona todo.

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

- **Cliente:** puede registrarse, loguearse, ver habitaciones, reservar, cancelar reservas, descargar tickets en PDF y cerrar sesión.
- **Recepcionista:** puede loguearse, ver/borrar reservas, fichar entrada/salida y cerrar sesión.
- **Admin:** puede loguearse, crear habitaciones, ver/eliminar habitaciones, ver clientes, ver jornadas de trabajadores y cerrar sesión.

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
Ignacio 🚀