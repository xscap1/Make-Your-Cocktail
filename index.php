<?php
include_once 'Utils/utils.php';

session_start();

//header('Cache-Control: no-cache, must-revalidate');
//header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
//header('Content-type: application/json');
//
//
start_page("Accueil","main");
echo ('<p> Bonjour </p>');
end_page();

?>