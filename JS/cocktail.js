// Tableau d'ingrédients Test d'une nouvelle façon

let ingredients = [];

$(document).ready(() => {

    $.ajax({
        url: 'is_connected.php',

    }).done((data) => {

        if (data.success === false) {
            /* La personne n'est pas connectée */

            // Déjà gérer par l'index.


        }

        else {

            $.ajax({
                url: 'index.php'

            }).done( () => {

                $('body').append(
                    /**
                     * Création div contenant le formulaire de création des cocktails
                     */

                    $('<div />').attr('id','divCocktail')
                        .append(

                            /**
                             * Formulaire de création des cocktails
                             */

                            $('<form />')

                                .attr({
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
                                        "placeholder": "Entrer un nom de cocktail",
                                        "required" : "true"
                                    }).css({
                                        "width" : "135px",
                                    }),

                                    $('<p />').html('Description : '),
                                    $('<input />').attr({
                                        "id": "cocktailDescInput",
                                        "name": "cocktailDescInput",
                                        "type": "text",
                                        "placeholder": "Entrer une description à votre cocktail",
                                        "required" : "true"
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
                                            "margin-top" : "10px"

                                        })
                                        .html('Envoyer'),

                                ).submit( function() {

                                /**
                                 * On envoie les données du formulaire
                                 */

                                $.ajax({
                                        type : 'POST',
                                        url : 'Cocktail.php',
                                        data : $(this).serialize(),
                                        success : () => {

                                            /**
                                             * On signale que le cocktail est créé
                                             */
                                            alert('Cocktail créé');
                                        }
                                    })

                            })
                        )
                );

                /**
                 * On cache la div du formulaire afin d'effectuer un slideToogle plus tard
                 */

                $('#divCocktail').hide();

                /**
                 * Fonction affichant le formulaire de création des cocktails
                 */

                $('#cocktailButton').click( () => {
                    $('#divCocktail').slideToggle("medium");
                    $('#cocktailButton').css('background-color', 'orange');
                });

                /**
                 * On charge les ingredients de la base de données afin de les mettre dans un select
                 */

                $.ajax({
                    url : 'IngredientList.php',
                }).done( (data) => {


                    /**
                     * On récupère les données
                     */

                    for( let i = 0; i < data.length; ++i) {
                        ingredients.push(data[i].NOM);
                    }
                });

                $('#buttonAddIngredient').click( () => {


                    /**
                     * On créé les selecteurs
                     */

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

                                /**
                                 * Pas de fonction flèchée ici car si on l'utilise, $(this) pointe vers Window
                                 * et non vers l'élement cliqué.
                                 */

                                    .click( function() {
                                        let but = $(this);
                                        but.parent().remove();
                                })
                                    .css('margin-left','10px')
                                    .html('Retirer')


                            )
                    );


                    /**
                     * On injecte les données dans les selects.
                     */

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
