$(document).ready(function() {
    $.ajax({
        url: 'is_connected.php',

    }).done(function(data){

        if(data.success===false) {
            /* La personne n'est pas connectée */



        }
        else {
            /* La personne est connectée */

            $.ajax({
                url : 'index.php'
            })
        }

        /*if(data.hasOwnProperty('message')) {
            alert(data.message);
        }*/
    });


});