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
                   $.ajax({
                       url : "IngredientList.php",
                       //dataType : 'json'

                       // Avec data on récupère tous les ingrédients de la BD avec un appel ajax et un encodage json
                   }).done((data) => {

                       for( let i = 0; i < data.length; ++i) {
                           $('body').append(
                               $('<div />').attr('class','divList')
                                   .append(
                                       $('<h2 />').html('-----------------------'),
                                       $('<h2 />')
                                           .html('Nom : '),
                                       $('<p/>').html(data[i].NOM),
                                       $('<h2 />')
                                           .html('Description : '),
                                       $('<p/>').html(data[i].DESCRIPTION),

                                   ).hide()
                           );

                       }

                   });


                $('#ingredientListButton').click( () => {
                    $('#ingredientListButton').css('background-color', '#33cc33');
                    $('.divList').slideToggle("medium");
                });



            })
        }

    });
});