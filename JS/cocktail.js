class Cocktail {

    constructor(nom, description) {
        this.nom = nom;
        this.description = description;
        this.list = new Array(Ingredient);
    }

}

let ingredients = [];

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
                                    /*"method": "POST",
                                    "action" : "Cocktail.php",*/
                                    "id": "formCocktail",
                                    "name" : "formCocktail"
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
                                        'id' : 'buttonAddIngredient',
                                        'name' : 'buttonAddIngredient',
                                        "type": "button"
                                    }) .css({
                                        "display": "block",
                                        "margin-top": "10px"
                                    })
                                        .html('Ajouter ingrédient'),


                                    $('<button />').attr({
                                        "name": "sendCocktail",
                                        "id": "sendCocktail",
                                        "type": "submit"
                                    })
                                        .css({
                                            "display": "block",

                                        })
                                        .html('Envoyer'),

                                ).submit( function() {

                                    $.ajax({
                                        type : 'POST',
                                        url : 'Cocktail.php',
                                        data : $(this).serialize(),
                                        success : () => {
                                            alert('Cocktail créé');
                                        }
                                    })

                            })
                        )
                );

                $('#divCocktail').hide();

                $('#cocktailButton').click( () => {
                    $('#divCocktail').slideToggle("medium");
                    $('#cocktailButton').css('background-color', '#33cc33');
                });

                $.ajax({
                    url : 'IngredientList.php',
                }).done( (data) => {


                    for( let i = 0; i < data.length; ++i) {
                        ingredients.push(data[i].NOM);
                    }
                });

                $('#buttonAddIngredient').click( () => {


                    $('#formCocktail').append(
                        $('<div />').attr('id','divSelector')
                            .append(
                                $('<select />').attr({
                                    'class' : 'selectorValue',
                                }).css({
                                    'margin-top' : '10px'
                                }),
                                $('<input/>').attr({
                                    'id' : 'cocktailIngredientUnit',
                                    'name' : 'cocktailIngredientUnit',
                                    'placeholder' : 'Combien'
                                })
                                    .css('margin-left','10px'),

                                $('<select />').attr({
                                    'id' : 'cocktailIngredientUnitSelect',
                                    'name' : 'cocktailIngredientUnitSelect'
                                })  .append(
                                    '<option value="0"> --Choisir une unité-- </option>',
                                    '<option value="1"> L </option>',
                                    '<option value="2"> cL </option>',
                                    '<option value="3"> mL </option>',
                                    '<option value="4"> g </option>',
                                    '<option value="5"> mg </option>',

                                ).css('margin-left','10px'),

                                $('<button/>').attr({
                                    'id' : 'resetButton',
                                    'name' : 'resetButton',
                                    'type' : 'button'
                                })
                                // Pas de fonction flèchée ici car si on l'utilise ici, $(this) pointe vers Window
                                //  et non vers l'élement cliqué

                                    .click( function() {
                                        let but = $(this);
                                        but.parent().remove();
                                })
                                    .css('margin-left','10px')
                                    .html('Retirer')


                            )
                    );

                    for (let i = 0; i < ingredients.length; ++i) {
                        $(".selectorValue").append($('<option>', {
                            value : i,
                            text : ingredients[i]
                        }))
                    }


                });



            })
        }

    });

});
