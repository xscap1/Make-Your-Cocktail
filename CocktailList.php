<?php

session_start();

include 'Utils/db_connect.php';

$statement = $pdo->prepare("SELECT NOM,DESCRIPTION FROM COCKTAILS");
$statement->execute();

$data = array();

while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
    $data [] = $row;
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($data);



