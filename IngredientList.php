<?php
session_start();

include 'Utils/db_connect.php';

$statement = $pdo->prepare("SELECT NOM,DESCRIPTION FROM INGREDIENTS");
$statement->execute();

$resultName = $statement->fetchAll(PDO::FETCH_ASSOC);

$array[] = $resultName;



header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($array);
