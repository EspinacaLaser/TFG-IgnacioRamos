-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-05-2025 a las 13:40:49
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestion_hotel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre_completo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`id`, `usuario`, `password`, `nombre_completo`) VALUES
(1, 'admin1', '$2y$10$ffvsTenkM47HKkH.ThXnN.LOT9skPf2HE3Rjtsfygd6mohcoPhBEy', 'IgnacioAdmin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fecha_registro` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `email`, `password`, `fecha_registro`) VALUES
(1, 'Cliente Prueba', 'cliente@ejemplo.com', '$2y$10$O/Pi6WRCkE32uH0AwtP6/e9fP4pYOeiwNJeo9Hivo8pvTXcMQmGQW', '2025-05-21 23:51:38'),
(8, 'gloosito', 'correo2@gmail.com', '$2y$10$PGC9WiFFdhTSF7OV5nZbXOmW4R1qiz/fLKwCRBYI0Ez.U.2FhcOY6', '2025-05-25 10:36:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `id` int(11) NOT NULL,
  `reserva_id` int(11) NOT NULL,
  `fecha_emision` datetime NOT NULL DEFAULT current_timestamp(),
  `total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fichajes`
--

CREATE TABLE `fichajes` (
  `id` int(11) NOT NULL,
  `recepcionista_id` int(11) NOT NULL,
  `tipo` enum('entrada','salida') NOT NULL,
  `fecha_hora` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `habitaciones` (
  `id` int(11) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `estado` enum('disponible','ocupada','mantenimiento') DEFAULT 'disponible',
  `capacidad` int(11) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio_base` decimal(8,2) NOT NULL DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `habitaciones` (`id`, `numero`, `estado`, `capacidad`, `descripcion`, `precio_base`) VALUES
(4, '201', 'disponible', 2, 'Amplia habitación de matrimonio con una cama doble grande, decoración elegante y ventanales que ofrecen abundante luz natural. Incluye baño privado, escritorio, armario espacioso y todas las comodidades para una estancia confortable. Ideal para parejas que buscan tranquilidad y confort en un ambiente moderno y acogedor.', 120.00),
(5, '202', 'disponible', 3, 'Habitación triple perfecta para familias o grupos pequeños, equipada con tres camas individuales, zona de estar y baño privado. Dispone de espacio suficiente para el equipaje, escritorio, televisión y vistas al jardín interior. El ambiente es luminoso y funcional, pensado para el descanso y la comodidad de todos los huéspedes.', 90.00),
(6, '203', 'disponible', 1, 'Acogedora habitación individual diseñada para viajeros solitarios, con una cama cómoda, escritorio y baño privado. La decoración es moderna y funcional, con detalles que aportan calidez y tranquilidad. Perfecta para estancias cortas o viajes de negocios, ofrece privacidad y todo lo necesario para una estancia agradable.', 50.00),
(7, '204', 'mantenimiento', 2, 'Habitación actualmente en mantenimiento. Pronto estará disponible para su reserva con todas las comodidades y servicios habituales. Gracias por su comprensión.', 0.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_habitacion`
--

CREATE TABLE `imagenes_habitacion` (
  `id` int(11) NOT NULL,
  `habitacion_id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenes_habitacion`
--

INSERT INTO `imagenes_habitacion` (`id`, `habitacion_id`, `url`) VALUES
(1, 4, '/hotel-api/img/habitaciones/matrimonio1.jpg'),
(2, 4, '/hotel-api/img/habitaciones/matrimonio2.jpg'),
(3, 4, '/hotel-api/img/habitaciones/matrimonio3.jpg'),
(4, 4, '/hotel-api/img/habitaciones/matrimonio4.jpg'),
(5, 5, '/hotel-api/img/habitaciones/triple1.jpg'),
(6, 5, '/hotel-api/img/habitaciones/triple2.jpg'),
(7, 5, '/hotel-api/img/habitaciones/triple3.jpg'),
(8, 5, '/hotel-api/img/habitaciones/triple4.jpg'),
(9, 6, '/hotel-api/img/habitaciones/individual1.jpg'),
(10, 6, '/hotel-api/img/habitaciones/individual2.jpg'),
(11, 6, '/hotel-api/img/habitaciones/individual3.jpg'),
(12, 6, '/hotel-api/img/habitaciones/individual4.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recepcionistas`
--

CREATE TABLE `recepcionistas` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombre_completo` varchar(100) DEFAULT NULL,
  `activo` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `habitacion_id` int(11) NOT NULL,
  `fecha_entrada` date NOT NULL,
  `fecha_salida` date NOT NULL,
  `estado` enum('pendiente','pagada') DEFAULT 'pendiente',
  `bufet` tinyint(1) DEFAULT 0,
  `parking` tinyint(1) DEFAULT 0,
  `total` decimal(10,2) NOT NULL DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reserva_id` (`reserva_id`);

--
-- Indices de la tabla `fichajes`
--
ALTER TABLE `fichajes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recepcionista_id` (`recepcionista_id`);

--
-- Indices de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `numero` (`numero`);

--
-- Indices de la tabla `imagenes_habitacion`
--
ALTER TABLE `imagenes_habitacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `habitacion_id` (`habitacion_id`);

--
-- Indices de la tabla `recepcionistas`
--
ALTER TABLE `recepcionistas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cliente_id` (`cliente_id`),
  ADD KEY `habitacion_id` (`habitacion_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administradores`
--
ALTER TABLE `administradores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `fichajes`
--
ALTER TABLE `fichajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `imagenes_habitacion`
--
ALTER TABLE `imagenes_habitacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `recepcionistas`
--
ALTER TABLE `recepcionistas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD CONSTRAINT `facturas_ibfk_1` FOREIGN KEY (`reserva_id`) REFERENCES `reservas` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `fichajes`
--
ALTER TABLE `fichajes`
  ADD CONSTRAINT `fichajes_ibfk_1` FOREIGN KEY (`recepcionista_id`) REFERENCES `recepcionistas` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `imagenes_habitacion`
--
ALTER TABLE `imagenes_habitacion`
  ADD CONSTRAINT `imagenes_habitacion_ibfk_1` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
