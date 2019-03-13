$(document).ready(function() {
    $.ajax({
        url: 'is_connected.php',

    }).done(function(data){

        if(data.success===false) {
            /* La personne n'est pas connectée */

            // Gérer par l'index.


        }

        else {
            /* La personne est connectée */

            $.ajax({
                url : 'index.php'
            }).done(function () {
                $('body').append(
                    $('<button />').attr({
                        "id" : "ingredientButton",
                        "name": "ingredientButton",
                        "type": "submit"

                    }).css({
                        "background-color": "#0066ff",
                        "border": "none",
                        "color": "white",
                        "margin-left": "30px",
                        "padding": "10px 20px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "display": "inline-block",
                        "font-size": "16px",
                    }).html('Créer ingrédient'),

                    $('<button />').attr({
                        "name": "uniteButton",
                        "type": "submit",

                    }).css({
                        "background-color": "#0066ff",
                        "border": "none",
                        "color": "white",
                        "margin-left": "30px",
                        "padding": "10px 20px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "display": "inline-block",
                        "font-size": "16px",
                    }).html('Créer unité'),

                    $('<button />').attr({
                        "name": "cocktailButton",
                        "type": "submit",

                    }).css({
                        "background-color": "#0066ff",
                        "border": "none",
                        "color": "white",
                        "margin-left": "30px",
                        "padding": "10px 20px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "display": "inline-block",
                        "font-size": "16px",
                    }).html('Créer cocktail'),

                    $('<button />').attr({
                        "name": "cocktailList",
                        "type": "submit",

                    }).css({
                        "background-color": "#0066ff",
                        "border": "none",
                        "color": "white",
                        "margin-left": "30px",
                        "padding": "10px 20px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "display": "inline-block",
                        "font-size": "16px",
                    }).html('Voir la liste des cocktails'),

                    $('<form />').append(

                    $('<button />').attr({
                        "name": "logoutButton",
                        "id" : "logoutButton",
                        "type": "submit"

                    }).css({
                        "background-color": "#0066ff",
                        "border": "none",
                        "color": "white",
                        "margin-top" : "30px",
                        "margin-left": "30px",
                        "padding": "10px 20px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "display": "inline-block",
                        "font-size": "16px",
                    }).html('Deconnexion')
                    ).submit(function () {
                        $.ajax({
                            url : 'logout.php'
                        })


                    })





                );

            });
        }




        /*if(data.hasOwnProperty('message')) {
            alert(data.message);
        }*/
    });


});


