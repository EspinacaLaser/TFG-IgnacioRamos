<?php
$host = "localhost";
$db = "gestion_hotel";
$db_user = "root";
$db_pass = "";

$conn = new mysqli($host, $db_user, $db_pass, $db);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'error' => 'Error de conexión']));
}
?>