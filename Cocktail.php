<?php
session_start();

include 'Utils/db_connect.php';

$name = $_POST['cocktailNameInput'];
$descr = $_POST['cocktailDescInput'];

try {

    $sql = "INSERT INTO COCKTAILS (NOM,DESCRIPTION) VALUES (?,?)";
    $pdo->prepare($sql)->execute([$name, $descr]);
    $result = true;
}


catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');