<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Método no permitido']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$email = $input['email'] ?? '';
$pass = $input['password'] ?? '';

if (!$email || !$pass) {
    echo json_encode(['success' => false, 'error' => 'Faltan datos']);
    exit;
}

$host = "localhost";
$db = "gestion_hotel";
$db_user = "root";
$db_pass = "";

$conn = new mysqli($host, $db_user, $db_pass, $db);
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'error' => 'Error de conexión']);
    exit;
}

$stmt = $conn->prepare("SELECT id, nombre, email, password FROM clientes WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    if (password_verify($pass, $row['password'])) {
        echo json_encode([
            'success' => true,
            'user' => [
                'id' => $row['id'],
                'nombre' => $row['nombre'],
                'email' => $row['email'],
                'rol' => 'cliente'
            ]
        ]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Contraseña incorrecta']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Usuario no encontrado']);
}

$stmt->close();
$conn->close();