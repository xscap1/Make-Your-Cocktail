<?php

session_start();
require_once 'Utils/utils.php';

start_page("Accueil");



if(isset($_SESSION['user_id'])){
    echo ('<p> Bonjour ' . $_SESSION['user_id'] . ' bienvenue sur la page d\'accueil </p>');
    //echo("<button type='submit'> DECONNEXION </button><br><br>");
}

else {
    header('Location: login.php' );
    exit();
}
end_page();