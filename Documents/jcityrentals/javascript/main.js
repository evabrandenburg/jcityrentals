


/* CURRENTLY IN: javascript/main.js */

$(window).bind("load", function() {


$('#featured').orbit({
     animation: 'fade',                  // fade, horizontal-slide, vertical-slide, horizontal-push
     animationSpeed: 800,                // how fast animtions are
     timer: false, 	
 });


$( ".SlideS" ).hide();

 
function sLoco(){
    $( ".locoPop" ).addClass( "show" );
}

function sHow(){
    $( ".howPop" ).addClass( "show" );
}

function sSee(){
	console.log("works");
	$( ".SlideS" ).show();
}

$(".loco").click( sLoco );
$(".how").click( sHow );
$(".see").click( sSee );

$( ".x" ).click( hide );

function hide(){
    $(".locoPop").removeClass("show");
    $(".howPop").removeClass("show");

}


});