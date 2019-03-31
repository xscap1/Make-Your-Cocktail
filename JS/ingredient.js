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
                    /**
                     * Création de la div contenant le formulaire de création des ingrédients
                     */

                    $('<div />')
                        .attr({
                            'id' : 'divIngredientForm',
                            'name' : 'divIngredientForm'
                        })
                        .append(

                            $('<form />')

                                .attr({

                                    "id": "formIngredient"
                                })
                                .append(
                                    $('<h2 />').html('Nouvel ingrédient'),
                                    $('<p />').html('Nom : '),
                                    $('<input />').attr({
                                        "id": "ingredientNameInput",
                                        "name": "ingredientNameInput",
                                        "type": "text",
                                        "placeholder": "Entrer un ingrédient",
                                        "required" : "true"
                                    }),

                                    $('<p />').html('Description : '),
                                    $('<input />').attr({
                                        "id": "ingredientDescInput",
                                        "name": "ingredientDescInput",
                                        "type": "text",
                                        "placeholder": "Entrer une description",
                                        "required" : "true"
                                    }),

                                    $('<button />').attr({
                                        "name": "sendIngredient",
                                        "id": "sendIngredient",
                                        "type": "submit"
                                    })
                                        .css({
                                            "display" : "block",
                                            "margin-top": "10px",
                                        })
                                        .html('Envoyer')

                                )

                                .submit(() => {

                                    /**
                                     * On créé un nouvel ingrédient avec les informations du formulaire
                                     */
                                    ingredientList.push(new Ingredient(('#ingredientNameInput').value,('#ingredientDescInput').value));

                                    /**
                                     * On envoie les données du formulaire
                                     */

                                    $.ajax({
                                        type : 'POST',
                                        url: 'Ingredient.php',
                                        data : $('#formIngredient').serialize(),
                                        success : () => {
                                            alert('Ingrédient créé');
                                        },
                                        error : () => {
                                            $('body').append(
                                                $('<h2 />').html('Erreur rencontrée')
                                            );
                                        }
                                    })
                                })
                        /**
                        * On cache la div du formulaire afin d'effectuer un slideToogle plus tard
                        */

                        ).hide()
            );


                /**
                 * Fonction affichant le formulaire de création des ingrédients
                 */

                $('#ingredientButton').click(() => {
                    $('#divIngredientForm').slideToggle("medium");
                    $('#ingredientButton').css('background-color', 'orange');
                });


                /**
                 * On change les inputs de couleur lorsqu'on écrit
                 */

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