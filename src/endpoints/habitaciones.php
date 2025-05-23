<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Solo para desarrollo

require_once 'conexion.php'; // Asegúrate de tener tu conexión aquí

$sql = "SELECT id, numero, estado, capacidad, descripcion FROM habitaciones";
$result = $conn->query($sql);

$habitaciones = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $habitaciones[] = $row;
    }
}

echo json_encode($habitaciones);

$conn->close();
?>