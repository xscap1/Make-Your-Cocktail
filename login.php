<?php

session_start();

include 'Utils/db_connect.php';

$username = $_POST['username'];
$password = $_POST['password'];





/*if (empty($username) && empty($password)) {
    ?> <script> alert('VIDE') </script>
    <?php
}
*/

// Valeur a retourner en cas de succès de connexion








    try {


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
    <link rel="stylesheet" type="text/css" href="css/login.css">

</head>
<body>

<form id="loginForm" name="loginForm" method="post" action="login.php">
    <br>
    <label for="usr"><b> Nom d'utilisateur </b></label>
    <input type="text" name="username" id="username" placeholder="Entrer votre nom d'utilisateur" required>
    <br>
    <label for="pwd"><b> Mot de passe </b></label>
    <input type="password" name="password" id="password" placeholder="Entrer votre nom mot de passe" required>
    <button type="submit" name="buttonForm" id="buttonForm"> Se connecter </button>
</form>


</body>
</html>