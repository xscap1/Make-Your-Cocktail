<?php

session_start();



$username  = $_POST['login'];
$password = $_POST['password'];


// Valeur a retourner en cas de succès de connexion

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

    $query = $pdo->prepare("SELECT * FROM USERS WHERE USERNAME=? AND PWD=?");
    $query->execute(array($username,$password));

    if($result = $query->fetch(PDO::FETCH_ASSOC)) {
        $_SESSION['user_id'] = $result['user_id'];
        $msgSuccess = "Bien connecté";
        header('Location: index.php');
        exit(0);
    }

    else {
        $msgSuccess = " Non connceté";
        ?> <script> alert('L\'indentifiant ou le mot de passe est incorrect');
                    window.location.href = 'index.php';
           </script>

        <?php
    }

    // AFFICHAGE D'UN UTILISATEUR POUR VÉRIFIER QUE TOUT FONCTIONNE
   // $stmt = $pdo->query('SELECT * FROM USERS WHERE USERNAME` = ' . $username . ' AND PWD = ' .$password . ';');

    /*$stmt = $pdo->query("SELECT * FROM USERS WHERE USERNAME =" . $pdo->quote($username) . " AND PWD = " . $pdo->quote($password) . ";"  );
    $row = $stmt->fetch();
    if ($stmt->rowCount() > 0) {
        $retour->sucess = true;
        session_start();
        $_SESSION['user_id'] = $row['USERNAME']; //$username;
        header('Location: index.php');

    }

    else {


<?php

    }*/



} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

/*header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');


echo json_encode(['message' => $msgSuccess]);*/

?>