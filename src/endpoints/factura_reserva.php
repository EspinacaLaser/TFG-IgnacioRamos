<?php
header("Access-Control-Allow-Origin: *");
require(__DIR__ . '/fpdf/fpdf.php');
include 'conexion.php';

$id = intval($_GET['id'] ?? 0);

$sql = "
    SELECT r.*, c.nombre AS cliente, c.email, h.numero AS habitacion, h.precio_base
    FROM reservas r
    JOIN clientes c ON r.cliente_id = c.id
    JOIN habitaciones h ON r.habitacion_id = h.id
    WHERE r.id = $id
";
$res = $conn->query($sql);
if (!$row = $res->fetch_assoc()) {
    die("Reserva no encontrada.");
}

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial','B',16);

$pdf->Cell(0,10,'Factura de Reserva Hotel',0,1,'C');
$pdf->SetFont('Arial','',12);
$pdf->Cell(0,8,'Fecha de emision: '.date('d/m/Y'),0,1,'R');
$pdf->Ln(5);

$pdf->SetFont('Arial','B',12);
$pdf->Cell(0,8,'Datos del cliente:',0,1);
$pdf->SetFont('Arial','',12);
$pdf->Cell(0,6,'Nombre: '.$row['cliente'],0,1);
$pdf->Cell(0,6,'Email: '.$row['email'],0,1);
//$pdf->Cell(0,6,'Telefono: '.$row['telefono'],0,1); // Elimina esta línea si no tienes teléfono
$pdf->Ln(3);

$pdf->SetFont('Arial','B',12);
$pdf->Cell(0,8,'Datos de la reserva:',0,1);
$pdf->SetFont('Arial','',12);
$pdf->Cell(0,6,'Reserva N: '.$row['id'],0,1);
$pdf->Cell(0,6,'Habitacion: '.$row['habitacion'],0,1);
$pdf->Cell(0,6,'Fecha entrada: '.$row['fecha_entrada'],0,1);
$pdf->Cell(0,6,'Fecha salida: '.$row['fecha_salida'],0,1);
$pdf->Cell(0,6,'Estado: '.ucfirst($row['estado']),0,1);
$pdf->Ln(3);

$pdf->SetFont('Arial','B',12);
$pdf->Cell(0,8,'Detalle:',0,1);
$pdf->SetFont('Arial','',12);
$pdf->Cell(0,6,'Precio base habitacion: '.number_format($row['precio_base'],2).' EUR',0,1);
$pdf->Cell(0,6,'Bufet: '.($row['bufet'] ? 'Si' : 'No'),0,1);
$pdf->Cell(0,6,'Parking: '.($row['parking'] ? 'Si' : 'No'),0,1);
$pdf->Ln(3);

$pdf->SetFont('Arial','B',14);
$pdf->Cell(0,10,'TOTAL: '.number_format($row['total'],2).' EUR',0,1,'R');

$pdf->Ln(10);
$pdf->SetFont('Arial','I',10);
$pdf->Cell(0,8,'Gracias por confiar en nuestro hotel.',0,1,'C');

$pdf->Output('D', 'factura_reserva_'.$row['id'].'.pdf');
$conn->close();