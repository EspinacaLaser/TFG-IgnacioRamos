<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Método no permitido']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$nombre = $input['nombre'] ?? '';
$email = $input['email'] ?? '';
$password = $input['password'] ?? '';

if (!$nombre || !$email || !$password) {
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

// Comprobar si el email ya existe
$stmt = $conn->prepare("SELECT id FROM clientes WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(['success' => false, 'error' => 'El email ya está registrado']);
    $stmt->close();
    $conn->close();
    exit;
}
$stmt->close();

// Hashear la contraseña
$hash = password_hash($password, PASSWORD_DEFAULT);

// Insertar el nuevo cliente
$stmt = $conn->prepare("INSERT INTO clientes (nombre, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nombre, $email, $hash);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Registro exitoso']);
} else {
    echo json_encode(['success' => false, 'error' => 'Error al registrar']);
}

$stmt->close();
$conn->close();