<?php
header('Content-Type: application/json');

$host = "localhost";
$user = "root";
$pass = ""; // tu contraseña de MySQL, si tienes
$db = "hotel"; // el nombre de tu base de datos

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "error" => $conn->connect_error]);
    exit;
}

$result = $conn->query("SELECT * FROM habitaciones LIMIT 5");
$rows = [];
while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}

echo json_encode(["success" => true, "data" => $rows]);
$conn->close();