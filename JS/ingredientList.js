class IngredientList {
    constructor() {
        this.list = new Array();
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

            }).done(() => {
                $('#ingredientListButton').click(() => {
                    if(ingredientList[0].hasOwnProperty("nom")) {
                        console.log(ingredientList[0].nom);
                    }
                });
            })
        }

    });
});