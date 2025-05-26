<?php
/**
 * Endpoint para listar las jornadas de los recepcionistas.
 * Devuelve: id, nombre_completo, fecha, hora_entrada, hora_salida
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include 'conexion.php';

// Consulta: empareja fichajes de entrada y salida por recepcionista y fecha
$sql = "
SELECT
    r.id AS recepcionista_id,
    r.nombre_completo,
    DATE(f1.fecha_hora) AS fecha,
    TIME(f1.fecha_hora) AS hora_entrada,
    TIME(f2.fecha_hora) AS hora_salida
FROM
    fichajes f1
    INNER JOIN fichajes f2 ON f1.recepcionista_id = f2.recepcionista_id
        AND DATE(f1.fecha_hora) = DATE(f2.fecha_hora)
        AND f1.tipo = 'entrada'
        AND f2.tipo = 'salida'
        AND f2.fecha_hora > f1.fecha_hora
    INNER JOIN recepcionistas r ON r.id = f1.recepcionista_id
WHERE
    NOT EXISTS (
        SELECT 1 FROM fichajes f3
        WHERE f3.recepcionista_id = f1.recepcionista_id
          AND f3.tipo = 'salida'
          AND DATE(f3.fecha_hora) = DATE(f1.fecha_hora)
          AND f3.fecha_hora > f1.fecha_hora AND f3.fecha_hora < f2.fecha_hora
    )
ORDER BY fecha DESC, hora_entrada DESC
";

$result = $conn->query($sql);

$jornadas = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $jornadas[] = $row;
    }
}

echo json_encode($jornadas);

$conn->close();