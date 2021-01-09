$(document).ready(main);
var contador = 1;

function main() {
    //aqui esta la primera forma de hacer el menu javascript//
    $('.btn-menu').click(function() {
        //  $('nav').toggle();
        if (contador == 1) {
            $('header>nav>ul').animate({
                left: '0'
            });
            contador = 0

        } else {
            contador = 1;
            $('header>nav>ul').animate({
                left: '-1000px'
            });

        }

    });

};