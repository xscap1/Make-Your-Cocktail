$(document).ready(function() {
    $.ajax({
        url: 'is_connected.php',

    }).done(function(data){

        if(data.success===false) {
            /* La personne n'est pas connectée */

            $('body').append(
                $('<form />')
                    .attr({"method" : "POST",
                           "id" : "formConnect"})
                    .append(
                    $('<input />').attr({
                                      "id":"loginForm",
                                      "name": "login",
                                      "type":"text",
                                      "placeholder":"login",
                                  })
                                  .css({
                                      "background-color" : "yellow",
                                      "border" : "0",
                                      "margin-left" : "50px",
                                      "margin-right" : "20px",
                                  }),

                    $('<input />').attr({
                                      "id":"passwordForm",
                                      "name": "password",
                                      "type":"password",
                                      "placeholder":"password"})
                                  .css({
                                     "background-color" : "yellow",
                                     "border" : "0",
                                     "margin-right" : "20px",
                    }),

                    $('<button />').attr({
                        "name" : "buttonForm",
                        "type": "submit",

                    }).css({
                        "background-color": "#0066ff",
                        "border": "none",
                        "color": "white",
                        "margin-left" : "30px",
                        "padding": "10px 20px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "display": "inline-block",
                        "font-size": "16px",
                    }).html('Se connecter')

                ).submit(function() {
                    $.ajax({
                        url: 'login.php',
                        method: 'post',
                        data: $(this).serialize()
                    }).done(function (data){
                        if(data.success === true) {
                            
                        }
                    });
                    return false;
                })
            )
        }
        else {
            /* La personne est connectée */
        }

        /*if(data.hasOwnProperty('message')) {
            alert(data.message);
        }*/
    });


});