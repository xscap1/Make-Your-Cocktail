class Ingredient {

    constructor(nom, description) {
        this.nom = nom;
        this.description = description;
    }

}
let ingredientList = new Array();

$(document).ready(() => {




    $.ajax({
        url: 'is_connected.php',

    }).done((data) => {

        if (data.success === false) {
            /* La personne n'est pas connectée */

            // Gérer par l'index.


        }

        else {

            /* La personne est connectée */

            $.ajax({
                url: 'index.php'
            }).done(() => {


                $('body').append(
                    $('<div />')
                        .attr({
                            'id' : 'divIngredientForm'
                        })
                        .append(

                            $('<form />')

                                .attr({
                                    "method": "POST",
                                    "action" : "Ingredient.php",
                                    "id": "formIngredient"
                                })
                                .append(
                                    $('<h2 />').html('Nouvel ingrédient'),
                                    $('<p />').html('Nom : '),
                                    $('<input />').attr({
                                        "id": "ingredientNameInput",
                                        "name": "ingredientNameInput",
                                        "type": "text",
                                        "placeholder": "Entrer un ingrédient"
                                    }),

                                    $('<p />').html('Description : '),
                                    $('<input />').attr({
                                        "id": "ingredientDescInput",
                                        "name": "ingredientDescInput",
                                        "type": "text",
                                        "placeholder": "Entrer une description"
                                    }),

                                    $('<button />').attr({
                                        "name": "sendIngredient",
                                        "id": "sendIngredient",
                                        "type": "submit"
                                    })
                                        .css({

                                            "display": "block",
                                            "margin-top": "10px",
                                            "margin-left": "200px"
                                        })
                                        .html('Envoyer')

                                )

                                .submit(() => {
                                    ingredientList.push(new Ingredient(('#ingredientNameInput').value,('#ingredientDescInput').value));

                                    $.ajax({
                                        url: 'Ingredient.php',
                                        data : $('#formIngredient').serialize(),
                                        success : () => {
                                            window.location.href = 'index.php';
                                        },
                                        error : () => {
                                            $('body').append(
                                                $('<h2 />').html('Erreur rencontrée')
                                            );
                                        }
                                    })
                                })

                        ).hide()
            );



                $('#ingredientButton').click(() => {
                    $('#divIngredientForm').slideToggle("medium");
                    $('#ingredientButton').css('background-color', '#33cc33');
                });


                $('#ingredientNameInput').on('keyup', () => {
                        $('#ingredientNameInput').css('border','2px solid #0f0');
                });

                $('#ingredientDescInput').on('keyup', () => {
                    $('#ingredientDescInput').css('border','2px solid #0f0');
                });









            })
        }
    });
});