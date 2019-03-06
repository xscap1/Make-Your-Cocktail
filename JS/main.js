$(document).ready(function() {
    $.ajax({
        url: 'is_connected.php',

    }).done(function(data){

        if(data.success===false) {
            /* La personne n'est pas connectée */

            $('body').append(
                $('<form />').append(
                    $('<input />').attr('name', 'login'),
                    $('<input />').attr('name', 'password'),
                    $('<button />').attr('type', 'submit').html('Se connecter')
                ).submit(function() {
                    $.ajax({
                        url: 'login.php',
                        method: 'post',
                        data: $(this).serialize()
                    }).done(function (done){

                    });
                    return false;
                })
            )
        }
        else {
            /* La personne est connectée */
        }

        if(data.hasOwnProperty('message')) {
            alert(data.message);
        }
    });
});