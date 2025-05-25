<?php
/**
 * Endpoint para confirmar una reserva tras el pago ficticio.
 * - Recibe los datos de la reserva por POST (JSON).
 * - Guarda la reserva en la base de datos.
 * - Actualiza el estado de la habitación a 'Ocupada'.
 * - Devuelve success:true y el id de la reserva creada, o error en caso de fallo.
 */

// -------------------- CABECERAS CORS Y MANEJO DE PRE-FLIGHT --------------------
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

// Si la petición es OPTIONS (preflight), responde con 200 y termina
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// -------------------- CONEXIÓN A LA BASE DE DATOS --------------------
include 'conexion.php';

// -------------------- LECTURA Y VALIDACIÓN DE DATOS --------------------
// Recoge los datos enviados por POST (JSON)
$data = json_decode(file_get_contents('php://input'), true);

// (Opcional) Guarda los datos recibidos para depuración
// file_put_contents('debug_confirmar.txt', print_r($data, true));

// Validación básica de campos obligatorios
if (
    !isset($data['cliente_id']) ||
    !isset($data['habitacion_id']) ||
    !isset($data['fecha_entrada']) ||
    !isset($data['fecha_salida']) ||
    !isset($data['total'])
) {
    http_response_code(400);
    echo json_encode(["error" => "Faltan datos obligatorios"]);
    exit;
}

// Escapa y recoge los datos principales
$cliente_id = intval($data['cliente_id']);
$habitacion_id = intval($data['habitacion_id']);
$fecha_entrada = $conn->real_escape_string($data['fecha_entrada']);
$fecha_salida = $conn->real_escape_string($data['fecha_salida']);
$total = floatval($data['total']);
$estado = 'pagada';

// Extras opcionales (por defecto 0)
$bufet = isset($data['bufet']) ? intval($data['bufet']) : 0;
$parking = isset($data['parking']) ? intval($data['parking']) : 0;

// -------------------- INSERCIÓN DE LA RESERVA --------------------
$sql = "INSERT INTO reservas (cliente_id, habitacion_id, fecha_entrada, fecha_salida, bufet, parking, total, estado)
        VALUES ($cliente_id, $habitacion_id, '$fecha_entrada', '$fecha_salida', $bufet, $parking, $total, '$estado')";

if ($conn->query($sql) === TRUE) {
    // -------------------- ACTUALIZA EL ESTADO DE LA HABITACIÓN --------------------
    // Marca la habitación como 'Ocupada' para que no aparezca como disponible
    $update_sql = "UPDATE habitaciones SET estado = 'Ocupada' WHERE id = $habitacion_id";
    $conn->query($update_sql);

    // Devuelve éxito y el id de la reserva creada
    echo json_encode(["success" => true, "reserva_id" => $conn->insert_id]);
} else {
    // Si hay error al insertar, devuelve error 500 y el mensaje
    http_response_code(500);
    echo json_encode(["error" => $conn->error]);
}

// -------------------- CIERRE DE CONEXIÓN --------------------
$conn->close();