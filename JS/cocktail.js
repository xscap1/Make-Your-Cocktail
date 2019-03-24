class Cocktail {

    constructor(nom, description) {
        this.nom = nom;
        this.description = description;
        this.list = new Array(Ingredient);
    }

}

$(document).ready(() => {

    $.ajax({
        url: 'is_connected.php',

    }).done((data) => {

        if (data.success === false) {
            /* La personne n'est pas connectée */

            // Gérer par l'index.


        }

        else {

            $.ajax({
                url: 'index.php'

            }).done( () => {

                $('body').append(
                    $('<div />').attr('id','divCocktail')
                        .append(
                            $('<form />')

                                .attr({
                                    "method": "POST",
                                    "action" : "Cocktail.php",
                                    "id": "formCocktail"
                                })

                                .append(
                                    $('<h2 />').html('Nouveau cocktail'),
                                    $('<p />').html('Nom : '),
                                    $('<input />').attr({
                                        "id": "cocktailNameInput",
                                        "name": "cocktailNameInput",
                                        "type": "text",
                                        "placeholder": "Entrer un nom de cocktail"
                                    }).css({
                                        "width" : "135px",
                                    }),

                                    $('<p />').html('Description : '),
                                    $('<input />').attr({
                                        "id": "cocktailDescInput",
                                        "name": "cocktailDescInput",
                                        "type": "text",
                                        "placeholder": "Entrer une description à votre cocktail"
                                    }).css({
                                        "width" : "200px",
                                        "height" : "50px",
                                    }),

                                    $('<button />').attr({
                                        "name": "sendCocktail",
                                        "id": "sendCocktail",
                                        "type": "submit"
                                    })
                                        .css({
                                            "display": "block",
                                            "margin-top": "10px"
                                        })
                                        .html('Envoyer')




                                )
                        )
                );

                $('#divCocktail').hide();

                $('#cocktailButton').click( () => {
                    $('#divCocktail').slideToggle("medium");
                    $('#cocktailButton').css('background-color', '#33cc33');
                });
            })
        }

    });

});
