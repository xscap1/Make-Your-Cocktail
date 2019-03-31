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
                    url : "CocktailList.php",
                    //dataType : 'json'

                    /**
                     * Avec data on récupère tous les ingrédients de la BD avec un appel ajax et un encodage json
                     */

                }).done((data) => {



                    for( let i = 0; i < data.length; ++i) {
                        $('body').append(

                            $('<div />').attr('class','divListCocktail')
                                .append(

                                    $('<h2 />').html('-----------------------'),
                                    $('<p/>').html('Cliquer sur le nom du cocktail pour afficher son détail'),
                                    $('<h2 />')
                                        .html('Nom : '),
                                    $('<a />')
                                        .css('text-decoration','none')
                                        .click( function() {
                                            $(this).after($('<p/>').html(data[i].DESCRIPTION));
                                        })
                                        .html(data[i].NOM),
                                ).hide()
                        );

                    }
                })

            });

            /**
             * On change la couleur du bouton
             */

            $('#cocktailListButton').click( () => {
                $('#cocktailListButton').css('background-color', 'orange');
                $('.divListCocktail').slideToggle("medium");
            });
        }

    });
});