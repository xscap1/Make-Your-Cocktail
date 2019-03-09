<?php
session_start();

$retour = new stdClass();
$retour->success = false;
$retour->message = "Veuillez vous connecter";

if (isset($_SESSION['user_id'])) {
    $retour->success = true;
}

echo('test commit');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($retour);