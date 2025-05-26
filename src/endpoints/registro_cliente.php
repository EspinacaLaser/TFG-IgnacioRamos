<?php
// Habilita CORS para permitir peticiones desde el frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Maneja la preflight request de CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

header('Content-Type: application/json');

// Solo permite el método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Método no permitido']);
    exit;
}

// Recoge los datos enviados en el body (JSON)
$input = json_decode(file_get_contents('php://input'), true);
$nombre = $input['nombre'] ?? '';
$email = $input['email'] ?? '';
$telefono = $input['telefono'] ?? '';
$password = $input['password'] ?? '';

// Valida que se hayan enviado todos los datos
if (!$nombre || !$email || !$password || !$telefono) {
    echo json_encode(['success' => false, 'error' => 'Faltan datos']);
    exit;
}

// Conexión a la base de datos
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
$stmt = $conn->prepare("INSERT INTO clientes (nombre, email, telefono, password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nombre, $email, $telefono, $hash);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Registro exitoso']);
} else {
    echo json_encode(['success' => false, 'error' => 'Error al registrar']);
}

$stmt->close();
$conn->close();