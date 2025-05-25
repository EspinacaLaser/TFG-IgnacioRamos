<?php
// Endpoint: Devuelve todas las reservas del sistema para uso del recepcionista.

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include 'conexion.php';

// Consulta SQL para obtener todas las reservas con información relevante
$sql = "
    SELECT 
        r.id,
        c.nombre AS nombre_cliente,
        c.email AS email_cliente,
        c.telefono AS telefono_cliente,   -- <--- Añadido aquí
        c.id AS cliente_id,
        CONCAT('Habitación ', h.numero) AS nombre_habitacion,
        h.numero AS numero_habitacion,
        h.capacidad,
        r.fecha_entrada,
        r.fecha_salida,
        r.estado,
        r.bufet,
        r.parking,
        r.total
    FROM reservas r
    JOIN clientes c ON r.cliente_id = c.id
    JOIN habitaciones h ON r.habitacion_id = h.id
    ORDER BY r.fecha_entrada DESC
";
$res = $conn->query($sql);

if (!$res) {
    http_response_code(500);
    echo json_encode(["error" => "Error en la consulta"]);
    exit;
}

$reservas = [];
while ($row = $res->fetch_assoc()) {
    $reservas[] = $row;
}

echo json_encode($reservas);
$conn->close();
?>