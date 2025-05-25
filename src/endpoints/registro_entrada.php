<?php
// Endpoint: Registra la hora de entrada de un recepcionista en la tabla 'fichajes'.

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include 'conexion.php';

// Recibe el ID del recepcionista por POST (JSON)
$data = json_decode(file_get_contents("php://input"), true);
$recepcionista_id = intval($data["recepcionista_id"] ?? 0);

if (!$recepcionista_id) {
    http_response_code(400);
    echo json_encode(["error" => "ID de recepcionista no válido"]);
    exit;
}

// Inserta el fichaje de entrada con la fecha y hora actual
$sql = "INSERT INTO fichajes (recepcionista_id, tipo, fecha_hora) VALUES (?, 'entrada', NOW())";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $recepcionista_id);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "mensaje" => "Entrada registrada correctamente"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "No se pudo registrar la entrada"]);
}

$stmt->close();
$conn->close();