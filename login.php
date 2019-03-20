<?php

session_start();
$username = $_POST['username'];
$password = $_POST['password'];





/*if (empty($username) && empty($password)) {
    ?> <script> alert('VIDE') </script>
    <?php
}
*/

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

        $sql = "SELECT ID FROM USERS WHERE USERNAME=? AND PWD=? ";
        $query = $pdo->prepare($sql);
        $query->execute(array($username,$password));

        if($query->rowCount() >= 1) {
            $_SESSION['user_id'] = $username;
            $_SESSION['time_start_login'] = time();
            header("Location: index.php");
        } else {
            $messeg = "Username/Password is wrong";
            echo($messeg);
        }
    }

            /*
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

        }



    }*/

    catch (\PDOException $e) {
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }

/*header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');


echo json_encode(['message' => $msgSuccess]);

*/

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title> Login </title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="JS/JQuery/jquery-3.3.1.min.js"></script>
    <script src="JS/main.js"></script>
    <script src="JS/Ingredient.js"></script>
    <link rel="stylesheet" type="text/css" href="css/login.css">

</head>
<body>

<form method="post" action="login.php">
    <input type="text" name="username" id="username" placeholder="username">
    <input type="password" name="password" id="password" placeholder="password">
    <button type="submit" name="buttonForm" id="buttonForm"> Se connecter </button>
</form>


</body>
</html>