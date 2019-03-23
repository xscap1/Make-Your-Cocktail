<?php

session_start();

/**
 * Paramètre pour la base de données
 */

$host = 'mysql-theo-poujol.alwaysdata.net';
$db   = 'theo-poujol_alloservice';
$user = '178955_theo';
$pass = 'boubou';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {

    // ESSAI CONNEXION BASE DE DONNÉES
    $pdo = new PDO($dsn, $user, $pass, $options);
}

catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}