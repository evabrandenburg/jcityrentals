


/* CURRENTLY IN: javascript/main.js */

$(window).bind("load", function() {

 
function show(){
    $( ".locoPop" ).addClass( "show" );
     $( ".howPop" ).addClass( "show" );
    $(".sShow").removeClass("show");
    $( ".sShow" ).addClass( "show" );
}


function sMenu(){
	$( ".navM").addClass( "show" );
}

$(".loco").click( show );
$(".how").click( show );
$(".see").click( show );
$(".menu").hover( sMenu );
$( ".navM" ).mouseOut( hide );

$( ".x" ).click( hide );

function hide(){
    $(".locoPop").removeClass("show");
    $(".howPop").removeClass("show");
    $(".sShow").removeClass("show");
    $( "navM" ).removeClass("show");

}

$(".next").click( animN );
  $(".prev").click( animP );

  function animN(){
    $(".wrap .slide").first().appendTo('.wrap').fadeOut(1000);
    $(".wrap .slide").first().fadeIn(1000);
  }

   function animP(){
    //no $(".wrap .img").reverse(.first().appendTo('.wrap'));
    //no with or without .get() $(".wrap").first().append((".wrap .img").get().reverse());
    //nope $(".wrap .img").append((".wrap").reverse());
    //does not work $(".wrap .img").first().append((".wrap").reverse());
    // does not work $(".wrap .img").first().append((".wrap").get().reverse());
    //does not work $(".wrap").first().append().reverse($(".wrap .img"));
    // works but switches btwn 1 and 3 $(".wrap").append($(".wrap .img").get().reverse());
    //works but going forward $(".wrap").append($(".wrap .img").first());
    //$(".wrap .img").first().appendTo('.wrap').fadeOut(2000).reverse();
    $(".wrap .img").first();
  }


});