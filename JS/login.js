$(document).ready(function() {
    $('body').append(
        $('<form />')
            .attr({
                "method": "POST",
                "id": "formConnect",
            })
            .append(
                $('<input />').attr({
                    "id": "login",
                    "name": "login",
                    "type": "text",
                    "placeholder": "login",
                })
                    .css({
                        "background-color": "yellow",
                        "border": "0",
                        "margin-left": "50px",
                        "margin-right": "20px",
                    }),

                $('<input />').attr({
                    "id": "password",
                    "name": "password",
                    "type": "password",
                    "placeholder": "password"
                })
                    .css({
                        "background-color": "yellow",
                        "border": "0",
                        "margin-right": "20px",
                    }),

                $('<button />').attr({
                    "name": "buttonForm",
                    "type": "submit",

                }).css({
                    "background-color": "#0066ff",
                    "border": "none",
                    "color": "white",
                    "margin-left": "30px",
                    "padding": "10px 20px",
                    "text-align": "center",
                    "text-decoration": "none",
                    "display": "inline-block",
                    "font-size": "16px",
                }).html('Se connecter')
            ).submit(function () {

            $.ajax({
                type: "post",
                url: "login.php",
                data: $(this).serialize(),
            }).done(function (data) {
                window.location.href = 'login.php';


                //console.log(document.getElementById('#loginForm').value);
                // console.log(document.getElementById('passwordForm').value);
                // alert(document.getElementById('loginForm').value);
                // alert("form fournit");


            });
            return false;
        })
    )
});


$('body').append(


    $('<button />').attr({
        "name": "uniteButton",
        "type": "submit",

    }).css({
        "background-color": "#0066ff",
        "border": "none",
        "color": "white",
        "margin-left": "30px",
        "padding": "10px 20px",
        "text-align": "center",
        "text-decoration": "none",
        "display": "inline-block",
        "font-size": "16px",
    }).html('Créer unité')

),

    $('body').append(

        $('<button />').attr({
            "name": "cocktailButton",
            "type": "submit",

        }).css({
            "background-color": "#0066ff",
            "border": "none",
            "color": "white",
            "margin-left": "30px",
            "padding": "10px 20px",
            "text-align": "center",
            "text-decoration": "none",
            "display": "inline-block",
            "font-size": "16px",
        }).html('Créer cocktail'),
    )


$("#ingredientButton").on('click',function() {
    $('body').append(
        $('<h2 />').html('Nouvel ingrédient'),
        $('<p />').html('Nom : '),
        $('<input />').attr({
            "id": "ingredientInput",
            "name": "ingredientInput",
            "type": "text",
            "placeholder": "Entrer un ingrédient"
        })
    )
});