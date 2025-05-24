<?php
header('Content-Type: application/json');
include 'conexion.php';

$id = intval($_GET['id']);
$sql = "SELECT id, numero, descripcion, precio_base, imagen_destacada FROM habitaciones WHERE id = $id";
$result = $conn->query($sql);

if ($row = $result->fetch_assoc()) {
    echo json_encode($row);
} else {
    http_response_code(404);
    echo json_encode(["error" => "Habitación no encontrada"]);
}