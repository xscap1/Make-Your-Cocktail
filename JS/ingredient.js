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
                $('#ingredientButton').click(() => {
                    $('body').append(

                        $('<button>').attr({
                            "id" : "buttonHide"
                        })
                            .css({
                                "margin-top" : "10px"
                            })
                            .html('Cacher'),

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
                                        "margin-top": "10px"
                                    })
                                    .html('Envoyer')
                            )


                            .submit(() => {
                                //ingredientList.push(new Ingredient(('#ingredientNameInput').value,('#ingredientDescInput').value));
                                $.ajax({
                                    url: 'Ingredient.php',
                                    data : $('#formIngredient').serialize(),
                                    success : () => {
                                        window.location.href = 'index.php';
                                    }
                                })


                            })

                    );

                    $('#buttonHide').click( () => {
                        $('#formIngredient').hide();
                        $('#buttonHide').hide();
                    })
                });
            })
        }
    });
});