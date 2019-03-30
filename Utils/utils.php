<?php


/** Fonction générant le header d'une nouvelle page
 * @param $title
 * @param $cssname
 */

function start_page($title) {
    echo ('
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>' . $title . '</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <script src="JS/JQuery/jquery-3.3.1.min.js"></script>
            <script src="JS/main.js"></script>
            <script src="JS/ingredient.js"></script>
            <script src="JS/ingredientList.js"></script>
            <script src="JS/cocktail.js"></script>
            <script src="JS/cocktailList.js"></script>
            <link rel="stylesheet"  type="text/css" href="css/login.css">
            
        </head> 
        <body>'
    );
}

/**
 * Fonction générant la fin d'une page
 */
function end_page() {
    echo('</body>
          </html>');
}


