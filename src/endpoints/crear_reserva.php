<?php
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

$data = json_decode(file_get_contents('php://input'), true);

$habitacion_id = intval($data['habitacion_id']);
$fecha_entrada = $conn->real_escape_string($data['fecha_entrada']);
$fecha_salida = $conn->real_escape_string($data['fecha_salida']);
$bufet = isset($data['bufet']) ? 1 : 0;
$parking = isset($data['parking']) ? 1 : 0;
$total = floatval($data['total']);

// Validación básica de campos obligatorios
if (
    empty($habitacion_id) ||
    empty($fecha_entrada) ||
    empty($fecha_salida)
) {
    http_response_code(400);
    echo json_encode(["error" => "Faltan datos obligatorios"]);
    exit;
}

// Inserta la reserva en la base de datos
$sql = "INSERT INTO reservas (habitacion_id, fecha_entrada, fecha_salida, bufet, parking, total)
        VALUES ($habitacion_id, '$fecha_entrada', '$fecha_salida', $bufet, $parking, $total)";
if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "reserva_id" => $conn->insert_id]);
} else {
    http_response_code(500);
    echo json_encode(["error" => $conn->error]);
}