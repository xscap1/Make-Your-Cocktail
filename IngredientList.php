<?php
session_start();

include 'Utils/db_connect.php';

$statement = $pdo->prepare("SELECT NOM,DESCRIPTION FROM INGREDIENTS");
$statement->execute();

$result = $statement->fetchAll();

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($result);
