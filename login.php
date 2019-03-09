<?php


// Valeur a retourner en cas de succès de connexion
$retour = new stdClass();
$retour->success = false;

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



$username  = filter_input(INPUT_POST, 'loginForm');
$password = filtre_input(INPUT_POST, 'passwordForm');
$messageSuccess = "Bienvue " . $username . " !";

if (empty($username) || empty($password)) echo($messageEmpty = "Veuillez remplir tous les champs");


try {

    // ESSAI CONNEXION BASE DE DONNÉES
    $pdo = new PDO($dsn, $user, $pass, $options);

    // AFFICHAGE D'UN UTILISATEUR POUR VÉRIFIER QUE TOUT FONCTIONNE
    $stmt = $pdo->query("SELECT * FROM USERS WHERE USERNAME = " . $username . " AND PWD = " . $password);
    $row = $stmt->fetch();
    if ($row == $stmt) {
        session_start();
        $_SESSION['user_id'] = $row['USERNAME']; //$username;
        echo ($messageSuccess);
        echo json_encode($retour);
    }

    else {
        ?>

        <script>
            let message = "L'identifiant ou le mot de passe sont incorrects";
            alert(message);
        </script>

<?php
        echo json_encode($retour);
    }




} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}