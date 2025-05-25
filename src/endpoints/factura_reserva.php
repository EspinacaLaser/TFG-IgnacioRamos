<?php
// Endpoint para generar y descargar la factura de una reserva en PDF

// Habilita CORS para permitir descargas desde el frontend
header("Access-Control-Allow-Origin: *");

// Incluye la librería FPDF (ajusta la ruta si es necesario)
require(__DIR__ . '/fpdf/fpdf.php');
include 'conexion.php';

// Obtiene el ID de la reserva desde la URL
$id = intval($_GET['id'] ?? 0);

// Consulta los datos de la reserva, cliente y habitación
$sql = "
    SELECT r.*, c.nombre AS cliente, c.email, c.telefono, h.numero AS habitacion, h.precio_base
    FROM reservas r
    JOIN clientes c ON r.cliente_id = c.id
    JOIN habitaciones h ON r.habitacion_id = h.id
    WHERE r.id = $id
";
$res = $conn->query($sql);
if (!$row = $res->fetch_assoc()) {
    die("Reserva no encontrada.");
}

// Crea el PDF
$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);

// Encabezado
$pdf->Cell(0,10,'Factura de Reserva Hotel',0,1,'C');
$pdf->SetFont('Arial','',12);
$pdf->Cell(0,8,'Fecha de emision: '.date('d/m/Y'),0,1,'R');
$pdf->Ln(5);

// Datos del cliente
$pdf->SetFont('Arial','B',12);
$pdf->Cell(0,8,'Datos del cliente:',0,1);
$pdf->SetFont('Arial','',12);
$pdf->Cell(0,6,'Nombre: '.$row['cliente'],0,1);
$pdf->Cell(0,6,'Email: '.$row['email'],0,1);
$pdf->Cell(0,6,'Telefono: '.$row['telefono'],0,1);
$pdf->Ln(3);

// Datos de la reserva
$pdf->SetFont('Arial','B',12);
$pdf->Cell(0,8,'Datos de la reserva:',0,1);
$pdf->SetFont('Arial','',12);
$pdf->Cell(0,6,'Reserva N: '.$row['id'],0,1);
$pdf->Cell(0,6,'Habitacion: '.$row['habitacion'],0,1);
$pdf->Cell(0,6,'Fecha entrada: '.$row['fecha_entrada'],0,1);
$pdf->Cell(0,6,'Fecha salida: '.$row['fecha_salida'],0,1);
$pdf->Cell(0,6,'Estado: '.ucfirst($row['estado']),0,1);
$pdf->Ln(3);

// Detalle de precios
$pdf->SetFont('Arial','B',12);
$pdf->Cell(0,8,'Detalle:',0,1);
$pdf->SetFont('Arial','',12);
$pdf->Cell(0,6,'Precio base habitacion: '.number_format($row['precio_base'],2).' EUR',0,1);
$pdf->Cell(0,6,'Bufet: '.($row['bufet'] ? 'Si' : 'No'),0,1);
$pdf->Cell(0,6,'Parking: '.($row['parking'] ? 'Si' : 'No'),0,1);
$pdf->Ln(3);

// Total
$pdf->SetFont('Arial','B',14);
$pdf->Cell(0,10,'TOTAL: '.number_format($row['total'],2).' EUR',0,1,'R');

$pdf->Ln(10);
$pdf->SetFont('Arial','I',10);
$pdf->Cell(0,8,'Gracias por confiar en nuestro hotel.',0,1,'C');

// Descarga el PDF
$pdf->Output('D', 'factura_reserva_'.$row['id'].'.pdf');
$conn->close();