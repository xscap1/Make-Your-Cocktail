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
                   $.ajax({
                       url : 'ingredientList'
                   }).done((data) => {
                       for(let i = 0; i < data.length; ++i) {
                           $('<p/>').html(data[i]).slideToggle("medium");
                       }
                   })
                });
            })
        }

    });
});