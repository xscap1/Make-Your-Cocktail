<?php

require_once 'Utils/utils.php';


$username  = $_POST['loginForm'];
$password = $_POST['passwordForm'];

// Valeur a retourner en cas de succès de connexion
$retour = new stdClass();
$retour->success = false;
$messageSuccess = "Bienvue " . $username . " !";

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




if (empty($username) || empty($password)) echo($messageEmpty = "Veuillez remplir tous les champs");



try {

    // ESSAI CONNEXION BASE DE DONNÉES
    $pdo = new PDO($dsn, $user, $pass, $options);

    // AFFICHAGE D'UN UTILISATEUR POUR VÉRIFIER QUE TOUT FONCTIONNE
   // $stmt = $pdo->query('SELECT * FROM USERS WHERE USERNAME = ' . $username . ' AND PWD = ' .$password . ';');

    $stmt = $pdo->query("SELECT * FROM USERS WHERE USERNAME =" . $pdo->quote($username) . " AND PWD = " . $pdo->quote($password) . ";"  );
    //$row = $stmt->fetch();
    if ($stmt->columnCount() <= 1) {
        $retour->sucess = true;
        session_start();
        $_SESSION['user_id'] = $row['USERNAME']; //$username;
        header('Location: index.php');

    }

    else {

        ?>

        <script>
            window.location = "index.php";
            let message = "L'identifiant ou le mot de passe est incorrect";
            alert(message);

        </script>

<?php

    }

//    header('Cache-Control: no-cache, must-revalidate');
//    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
//    header('Content-type: application/json');
//    echo json_encode($retour);

} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}



?>