


/* CURRENTLY IN: javascript/main.js */

$(window).bind("load", function() {

 $('#featured').orbit();
 
function show(){
    $( ".locoPop" ).addClass( "show" );
    $( ".howPop" ).addClass( "show" );
}

$(".loco").click( show );
$(".how").click( show );

$( ".x" ).click( hide );

function hide(){
    $(".locoPop").removeClass("show");
    $(".howPop").removeClass("show");
}

});