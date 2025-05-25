<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include 'conexion.php';

$sql = "
    SELECT 
        r.id,
        c.nombre AS nombre_cliente,
        CONCAT('Habitación ', h.numero) AS nombre_habitacion,
        r.fecha_entrada,
        r.fecha_salida,
        r.estado
    FROM reservas r
    JOIN clientes c ON r.cliente_id = c.id
    JOIN habitaciones h ON r.habitacion_id = h.id
    ORDER BY r.fecha_entrada DESC
";
$res = $conn->query($sql);
$reservas = [];
while ($row = $res->fetch_assoc()) {
    $reservas[] = $row;
}
echo json_encode($reservas);
$conn->close();