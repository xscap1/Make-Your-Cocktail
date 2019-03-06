<?php
/**
 * Created by PhpStorm.
 * User: p17002476
 * Date: 06/03/19
 * Time: 14:52
 */

function start_page($title, $cssname) {
    echo ('
        <!DOCTYPE html>
        <html lang="en">
        <head>
   
            <meta charset="UTF-8">
            <title>' . $title . '</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <script src="JQuery/jquery-3.3.1.min.js"></script>
            <link rel="stylesheet" href="css/'. $cssname .'css">
        </head> 
        <body>'
    );
}



function end_page() {
    echo('</body>
          </html>');
}