<?php
/**
 * Endpoint para listar todos los clientes registrados.
 * Devuelve un array JSON con los datos principales de cada cliente.
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Manejo de preflight CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include 'conexion.php';

// Consulta para obtener los clientes
$sql = "SELECT id, nombre, email, telefono, fecha_registro FROM clientes ORDER BY id DESC";
$result = $conn->query($sql);

$clientes = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $clientes[] = $row;
    }
}

echo json_encode($clientes);

$conn->close();