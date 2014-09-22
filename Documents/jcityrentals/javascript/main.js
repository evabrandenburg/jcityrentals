


/* CURRENTLY IN: javascript/main.js */

$(window).bind("load", function() {


 
function aboutH(){
    $( ".locoPop" ).addClass( "show" );
}

$(".loco").click( aboutH )

$( ".x" ).click( hide );

function hide(){
    $(".locoPop").removeClass("show");
    $(".contactH").removeClass("show");
}



function contact(){
    $(".contactH").addClass( "show" );
    $(".aboutH").removeClass("show");
}

$(".contact").click( contact );

});