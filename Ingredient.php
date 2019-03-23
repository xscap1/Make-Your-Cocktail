<?php
session_start();

include 'Utils/db_connect.php';

$name = $_POST['ingredientNameInput'];
$descr = $_POST['ingredientDescInput'];

try {

    $sql = "INSERT INTO INGREDIENTS (NOM,DESCRIPTION) VALUES (?,?)";
    $pdo->prepare($sql)->execute([$name, $descr]);
}


catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}


?>


