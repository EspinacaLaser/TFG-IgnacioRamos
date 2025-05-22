<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Método no permitido']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$user = $input['usuario'] ?? '';
$pass = $input['password'] ?? '';

if (!$user || !$pass) {
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

$stmt = $conn->prepare("SELECT id, usuario, password, nombre_completo, activo FROM recepcionistas WHERE usuario = ?");
$stmt->bind_param("s", $user);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    if (!$row['activo']) {
        echo json_encode(['success' => false, 'error' => 'Usuario inactivo']);
    } elseif (password_verify($pass, $row['password'])) {
        echo json_encode([
            'success' => true,
            'user' => [
                'id' => $row['id'],
                'usuario' => $row['usuario'],
                'nombre_completo' => $row['nombre_completo'],
                'rol' => 'recepcionista'
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