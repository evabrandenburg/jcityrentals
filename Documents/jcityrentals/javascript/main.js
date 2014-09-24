


/* CURRENTLY IN: javascript/main.js */

$(window).bind("load", function() {


 $('#featured').orbit();



 
function sLoco(){
    $( ".locoPop" ).addClass( "show" );
}

function sHow(){
    $( ".howPop" ).addClass( "show" );
}

$(".loco").click( sLoco );
$(".how").click( sHow );

$( ".x" ).click( hide );

function hide(){
    $(".locoPop").removeClass("show");
    $(".howPop").removeClass("show");
}


});