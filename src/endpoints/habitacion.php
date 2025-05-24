<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
include 'conexion.php';

$id = intval($_GET['id']);
$sql = "SELECT id, numero, descripcion, precio_base FROM habitaciones WHERE id = $id";
$result = $conn->query($sql);

if ($row = $result->fetch_assoc()) {
    // Asegúrate de que precio_base es numérico
    $row['precio_base'] = floatval($row['precio_base']);

    // Obtener imágenes asociadas
    $imagenes = [];
    $sqlImg = "SELECT url FROM imagenes_habitacion WHERE habitacion_id = $id";
    $resImg = $conn->query($sqlImg);
    while ($img = $resImg->fetch_assoc()) {
        $imagenes[] = $img['url'];
    }
    $row['imagenes'] = $imagenes;
    echo json_encode($row);
} else {
    http_response_code(404);
    echo json_encode(["error" => "Habitación no encontrada"]);
}
?>