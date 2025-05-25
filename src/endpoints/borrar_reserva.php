<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include 'conexion.php';

// Recibe el id de la reserva por POST (JSON)
$data = json_decode(file_get_contents("php://input"), true);
$reserva_id = intval($data["reserva_id"] ?? 0);

if (!$reserva_id) {
    http_response_code(400);
    echo json_encode(["error" => "ID de reserva no válido"]);
    exit;
}

// 1. Obtener el id de la habitación asociada a la reserva
$sql_hab = "SELECT habitacion_id FROM reservas WHERE id = $reserva_id";
$res_hab = $conn->query($sql_hab);
if (!$res_hab || $res_hab->num_rows === 0) {
    http_response_code(404);
    echo json_encode(["error" => "Reserva no encontrada"]);
    exit;
}
$habitacion_id = $res_hab->fetch_assoc()["habitacion_id"];

// 2. Borrar la reserva
$sql_del = "DELETE FROM reservas WHERE id = $reserva_id";
$res_del = $conn->query($sql_del);

// 3. Actualizar el estado de la habitación a 'disponible'
$sql_upd = "UPDATE habitaciones SET estado = 'disponible' WHERE id = $habitacion_id";
$res_upd = $conn->query($sql_upd);

if ($res_del && $res_upd) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error al borrar la reserva o actualizar la habitación"]);
}

$conn->close();