class Ingredient {

    constructor(nom, description) {
        this.nom = nom;
        this.description = description;
    }

}

$(document).ready(() => {

    $.ajax({
        url : 'index.php'
    }).done(() => {

        $('body').append(
            $('<button />').attr({
                "name": "CoucouButton",
                "id" : "CoucouButton",
                "type": "submit"

            }).css({
                "background-color": "#0066ff",
                "border": "none",
                "color": "white",
                "margin-top" : "30px",
                "margin-left": "30px",
                "padding": "10px 20px",
                "text-align": "center",
                "text-decoration": "none",
                "display": "inline-block",
                "font-size": "16px",
            }).html('Coucou')
        );
    });

});