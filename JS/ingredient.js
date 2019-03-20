$(document).ready(() => {

    class Ingredient {

        constructor(nom, description) {
            this.nom = nom;
            this.description = description;
        }

    }


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
                    }).html('Créer ingrédient').click( () => {
                        $.ajax({
                            url : 'ingredient.php',

                        })
                    })

                );

            });
        }


    });


});