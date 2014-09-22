


/* CURRENTLY IN: javascript/main.js */

$(window).bind("load", function() {


 
function aboutH(){
    $( ".aboutH" ).addClass( "show" );
    $(".contactH").removeClass( "show" );
}

$(".about").click( aboutH )

$( ".x" ).click( hide );

function hide(){
    $(".aboutH").removeClass("show");
    $(".contactH").removeClass("show");
}



function contact(){
    $(".contactH").addClass( "show" );
    $(".aboutH").removeClass("show");
}

$(".contact").click( contact );

});