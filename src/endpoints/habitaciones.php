<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once 'conexion.php';

$sql = "SELECT h.id, h.numero, h.estado, h.capacidad, h.descripcion, i.url
        FROM habitaciones h
        LEFT JOIN imagenes_habitacion i ON h.id = i.habitacion_id
        ORDER BY h.id";

$result = $conn->query($sql);

$habitaciones = [];
while ($row = $result->fetch_assoc()) {
    $id = $row['id'];
    if (!isset($habitaciones[$id])) {
        $habitaciones[$id] = [
            'id' => $row['id'],
            'numero' => $row['numero'],
            'estado' => $row['estado'],
            'capacidad' => $row['capacidad'],
            'descripcion' => $row['descripcion'],
            'imagenes' => []
        ];
    }
    if ($row['url']) {
        $habitaciones[$id]['imagenes'][] = $row['url'];
    }
}

echo json_encode(array_values($habitaciones));
$conn->close();
?>