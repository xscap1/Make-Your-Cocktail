$(document).ready(() => {
    $.ajax({
        url: 'is_connected.php',

    }).done((data) =>{

        if(data.success===false) {
            /* La personne n'est pas connectée */

            // Gérer par l'index.


        }

        else {
            /* La personne est connectée */

            $.ajax({
                url : 'index.php'
            }).done(() => {
                $('body').append(
                    /**
                     * Affichage de tous les principaux boutons
                     */

                    $('<button />').attr({
                        "id" : "ingredientButton",
                        "name": "ingredientButton",
                        "type": "submit"

                    }).css({
                        "background-color": "grey",
                        "border": "none",
                        "color": "white",
                        "margin-left": "30px",
                        "padding": "10px 20px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "display": "inline-block",
                        "font-size": "16px",
                    })
                        .html('Créer ingrédient').click( () => {
                        $.ajax({
                            url : 'ingredient.php',

                        })
                    }),


                    $('<button />').attr({
                        "id"  : "cocktailButton",
                        "name": "cocktailButton",
                        "type": "submit",

                    }).css({
                        "background-color": "grey",
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
                        "id" :  "ingredientListButton",
                        "name": "ingredientListButton",
                        "type": "submit",

                    }).css({
                        "background-color": "grey",
                        "border": "none",
                        "color": "white",
                        "margin-left": "30px",
                        "padding": "10px 20px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "display": "inline-block",
                        "font-size": "16px",
                    }).html('Voir la liste des ingrédients'),

                    $('<button />').attr({
                        "id": "cocktailListButton",
                        "name": "cocktailListButton",
                        "type": "submit",

                    }).css({
                        "background-color": "grey",
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
                            "background-color": "grey",
                            "border": "none",
                            "color": "white",
                            "margin-top" : "30px",
                            "margin-left": "30px",
                            "padding": "10px 20px",
                            "text-align": "center",
                            "text-decoration": "none",
                            "display": "inline-block",
                            "font-size": "16px",
                        }).html('Déconnexion')
                    ).submit(() => {
                        $.ajax({
                            url : 'logout.php',
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


