<?php
//endpoints para el selector de prefijos telefonicos de los países
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');
$prefijos = [
    ["codigo" => "+34", "pais" => "España"],
    ["codigo" => "+33", "pais" => "Francia"],
    ["codigo" => "+49", "pais" => "Alemania"],
    ["codigo" => "+44", "pais" => "Reino Unido"],
    ["codigo" => "+1",  "pais" => "Estados Unidos"],
    ["codigo" => "+351", "pais" => "Portugal"],
    ["codigo" => "+39", "pais" => "Italia"],
    ["codigo" => "+31", "pais" => "Países Bajos"],
    ["codigo" => "+41", "pais" => "Suiza"],
    ["codigo" => "+32", "pais" => "Bélgica"],
    ["codigo" => "+43", "pais" => "Austria"],
    ["codigo" => "+420", "pais" => "República Checa"],
    ["codigo" => "+45", "pais" => "Dinamarca"],
    ["codigo" => "+46", "pais" => "Suecia"],
    ["codigo" => "+47", "pais" => "Noruega"],
    ["codigo" => "+48", "pais" => "Polonia"],
    ["codigo" => "+352", "pais" => "Luxemburgo"],
    ["codigo" => "+353", "pais" => "Irlanda"],
    ["codigo" => "+386", "pais" => "Eslovenia"],
    ["codigo" => "+386", "pais" => "Eslovaquia"],
    ["codigo" => "+420", "pais" => "República Checa"],
    ["codigo" => "+36", "pais" => "Hungría"],
    ["codigo" => "+30", "pais" => "Grecia"],
    ["codigo" => "+380", "pais" => "Ucrania"],
    ["codigo" => "+7", "pais" => "Rusia"],
    ["codigo" => "+90", "pais" => "Turquía"],
];
echo json_encode($prefijos);