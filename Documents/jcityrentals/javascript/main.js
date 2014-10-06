


/* CURRENTLY IN: javascript/main.js */

$(window).bind("load", function() {


/*if ( $(".see").hover ){
	$( "#featured").show();
	console.log("true");
}
else{
	$("#featured").hide();
	console.log("false");
}*/


$('#featured').orbit({
     animation: 'fade',                  // fade, horizontal-slide, vertical-slide, horizontal-push
     animationSpeed: 800,                // how fast animtions are
     timer: false, 	
 });
 
function sLoco(){
    $( ".locoPop" ).addClass( "show" );
}

function sHow(){
    $( ".howPop" ).addClass( "show" );
    $(".sShow").removeClass("show");
}

function sShow(){
	console.log("works");
	$( ".sShow" ).addClass( "show" );
}

$(".loco").click( sLoco );
$(".how").click( sHow );
$(".see").click( sShow );

$( ".x" ).click( hide );

function hide(){
    $(".locoPop").removeClass("show");
    $(".howPop").removeClass("show");
    $(".sShow").removeClass("show");

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