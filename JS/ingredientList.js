class IngredientList {
    constructor() {
        this.list = new Array();
    }
}

let ingredientList;

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

            }).done(() => {
                $('#ingredientListButton').click(() => {
                    for(let i =0; i < ingredientList.length; ++i) {
                        $('body').append(
                            $('<h2>').html("Nom de l\'ingrédient : "),
                            ingredientList[i].nom,
                            $('<h2>').html("Description de l\'ingrédient : "),
                            ingredientList[i].description,
                            $('<p>').html('-------------------------')
                        )
                    }
                    console.log('fshiufhe');
                });
            })
        }

    });
});