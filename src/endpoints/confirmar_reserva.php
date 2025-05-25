<?php

// Endpoint para confirmar una reserva tras el pago ficticio.
// Recibe los datos de la reserva por POST (JSON) y la guarda en la base de datos.
// Devuelve success:true y el id de la reserva creada, o error en caso de fallo.

// Cabeceras CORS y manejo de preflight
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include 'conexion.php';

// Recoge los datos enviados por POST (JSON)
$data = json_decode(file_get_contents('php://input'), true);
file_put_contents('debug_confirmar.txt', print_r($data, true));
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

// Escapa y recoge los datos
$cliente_id = intval($data['cliente_id']);
$habitacion_id = intval($data['habitacion_id']);
$fecha_entrada = $conn->real_escape_string($data['fecha_entrada']);
$fecha_salida = $conn->real_escape_string($data['fecha_salida']);
$total = floatval($data['total']);
$estado = 'pagada';

// Extras opcionales
$bufet = isset($data['bufet']) ? 1 : 0;
$parking = isset($data['parking']) ? 1 : 0;

// Inserta la reserva en la base de datos
$sql = "INSERT INTO reservas (cliente_id, habitacion_id, fecha_entrada, fecha_salida, bufet, parking, total, estado)
        VALUES ($cliente_id, $habitacion_id, '$fecha_entrada', '$fecha_salida', $bufet, $parking, $total, '$estado')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "reserva_id" => $conn->insert_id]);
} else {
    http_response_code(500);
    echo json_encode(["error" => $conn->error]);
}