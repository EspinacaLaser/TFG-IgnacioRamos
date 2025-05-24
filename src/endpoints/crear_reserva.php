<?php
header('Content-Type: application/json');
include 'conexion.php';

$data = json_decode(file_get_contents('php://input'), true);

$habitacion_id = intval($data['habitacion_id']);
$fecha_entrada = $conn->real_escape_string($data['fecha_entrada']);
$fecha_salida = $conn->real_escape_string($data['fecha_salida']);
$nombre = $conn->real_escape_string($data['nombre']);
$email = $conn->real_escape_string($data['email']);
$telefono = $conn->real_escape_string($data['telefono']);
$prefijo = $conn->real_escape_string($data['prefijo']);
$bufet = isset($data['bufet']) ? 1 : 0;
$parking = isset($data['parking']) ? 1 : 0;
$total = floatval($data['total']);

$sql = "INSERT INTO reservas (habitacion_id, fecha_entrada, fecha_salida, nombre, email, telefono, prefijo, bufet, parking, total)
        VALUES ($habitacion_id, '$fecha_entrada', '$fecha_salida', '$nombre', '$email', '$telefono', '$prefijo', $bufet, $parking, $total)";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "reserva_id" => $conn->insert_id]);
} else {
    http_response_code(500);
    echo json_encode(["error" => $conn->error]);
}