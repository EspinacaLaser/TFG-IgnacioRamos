<?php
// Endpoint para obtener todas las reservas de un cliente concreto (por cliente_id)
// Devuelve: id, nombre_cliente, nombre_habitacion, fecha_entrada, fecha_salida, estado, total

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

include 'conexion.php';

$cliente_id = intval($_GET['cliente_id'] ?? 0);

if (!$cliente_id) {
    http_response_code(400);
    echo json_encode(["error" => "Falta cliente_id"]);
    exit;
}

$sql = "
    SELECT 
        r.id,
        c.nombre AS nombre_cliente,
        CONCAT('Habitación ', h.numero) AS nombre_habitacion,
        r.fecha_entrada,
        r.fecha_salida,
        r.estado,
        r.total
    FROM reservas r
    JOIN clientes c ON r.cliente_id = c.id
    JOIN habitaciones h ON r.habitacion_id = h.id
    WHERE r.cliente_id = $cliente_id
    ORDER BY r.fecha_entrada DESC
";

$res = $conn->query($sql);
$reservas = [];
while ($row = $res->fetch_assoc()) {
    $reservas[] = $row;
}

echo json_encode($reservas);
$conn->close();