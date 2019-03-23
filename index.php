<?php

session_start();
require_once 'Utils/utils.php';

start_page("Accueil");



if(isset($_SESSION['user_id'])){
    echo ('<p> Connecté en tant que  : ' . $_SESSION['user_id'] . ' </p>');
    //echo("<button type='submit'> DECONNEXION </button><br><br>");
}

else {
    header('Location: login.php' );
    exit();
}
end_page();