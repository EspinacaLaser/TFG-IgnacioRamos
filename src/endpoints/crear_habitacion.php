<?php
// Endpoint para crear una nueva habitación y asociar imágenes
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Responde a preflight CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Solo permite POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit();
}

include 'conexion.php';

// Recoge los datos enviados en el body (JSON)
$data = json_decode(file_get_contents("php://input"), true);

// Validación de campos obligatorios
$numero = trim($data['numero'] ?? '');
$estado = $data['estado'] ?? 'disponible';
$capacidad = intval($data['capacidad'] ?? 0);
$descripcion = trim($data['descripcion'] ?? '');
$precio_base = floatval($data['precio_base'] ?? 0);
$imagenes = $data['imagenes'] ?? []; // Array de URLs

// Validaciones básicas
if (!$numero || !$capacidad || !$precio_base) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan campos obligatorios']);
    exit();
}
if (!in_array($estado, ['disponible', 'ocupada', 'mantenimiento'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Estado no válido']);
    exit();
}

// Comprobar que el número de habitación es único
$stmt = $conn->prepare("SELECT id FROM habitaciones WHERE numero = ?");
$stmt->bind_param("s", $numero);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows > 0) {
    http_response_code(409);
    echo json_encode(['error' => 'El número de habitación ya existe']);
    $stmt->close();
    $conn->close();
    exit();
}
$stmt->close();

// Insertar la habitación
$stmt = $conn->prepare("INSERT INTO habitaciones (numero, estado, capacidad, descripcion, precio_base) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssisd", $numero, $estado, $capacidad, $descripcion, $precio_base);

if ($stmt->execute()) {
    $habitacion_id = $stmt->insert_id;
    $stmt->close();

    // Insertar imágenes si se han enviado
    if (is_array($imagenes) && count($imagenes) > 0) {
        $stmt_img = $conn->prepare("INSERT INTO imagenes_habitacion (habitacion_id, url) VALUES (?, ?)");
        foreach ($imagenes as $url) {
            $url = trim($url);
            if ($url) {
                $stmt_img->bind_param("is", $habitacion_id, $url);
                $stmt_img->execute();
            }
        }
        $stmt_img->close();
    }

    echo json_encode(['success' => true, 'message' => 'Habitación creada correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al crear la habitación']);
}

$conn->close();