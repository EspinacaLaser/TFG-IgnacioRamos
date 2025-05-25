<?php
// Endpoint: Devuelve todas las reservas del sistema para uso del recepcionista.
// Incluye datos del cliente, habitación, fechas, estado, bufet, parking y total.

header("Access-Control-Allow-Origin: *"); // Permite peticiones desde cualquier origen (CORS)
header("Content-Type: application/json"); // Responde en formato JSON
include 'conexion.php'; // Conexión a la base de datos

// Consulta SQL para obtener todas las reservas con información relevante
$sql = "
    SELECT 
        r.id,
        c.nombre AS nombre_cliente,
        c.email AS email_cliente,
        CONCAT('Habitación ', h.numero) AS nombre_habitacion,
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

// Control de error en la consulta
if (!$res) {
    http_response_code(500);
    echo json_encode(["error" => "Error en la consulta"]);
    exit;
}

// Construye el array de reservas
$reservas = [];
while ($row = $res->fetch_assoc()) {
    $reservas[] = $row;
}

// Devuelve el array como JSON
echo json_encode($reservas);
$conn->close();