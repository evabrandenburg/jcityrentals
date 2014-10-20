


/* CURRENTLY IN: javascript/main.js */

$(window).bind("load", function() {


function line( number, lineN  ){
  $(".line" + number ).html(
    "<div class="
    + lineN
    +">"
    +"</div>"
    );
}

line( 1, "line2" );

function form(number, pl1, pl2, pl3){
  $(".line" + number ).html(
    "<input type='text' placeholder="
    + pl1
    + ">"
    +"<input type='text' placeholder="
    + pl2
    + ">"
    +"<input type='text' placeholder="
    + pl3
    + ">"
  );
}

form(1, "hello", "hello", "hello");
form(2, "address", "address", "address");

/*APPLICANT #1: ______________________________ E-Mail Address: _____________________________

Home Phone ____________________ Cell Phone________________________  Birth Date ____________

Social Security #___________________ Drivers License #____________________State______ Exp.____

Move-in Date Required____________ Current Lease Expiration Date:     /      /

Advertised Rental Amount $ ___________ Current Rent Paid $__________ My Rent Is Paid Thru */



//form( "placeholder", "placeholder");
//form( "next", "next", "next");


 
function sLoco(){
    $( ".locoPop" ).addClass( "show" );
}

function sHow(){
    $( ".howPop" ).addClass( "show" );
    $(".sShow").removeClass("show");
}

function sShow(){
  $( ".sShow" ).addClass( "show" );
}

function sMenu(){
  $( ".navM").addClass( "show" );
}

function sMenu(){
  $( ".navM").addClass( "show" );
}

$(".loco").click( sLoco );
$(".how").click( sHow );
$(".see").click( sShow );
$(".menu").click( sMenu );

$(".menu").click( sMenu );

if ($( ".navM" ).hasClass("show")){
	$(".menu").click( hide );
}

$( ".x" ).click( hide );

function hide(){
    $(".locoPop").removeClass("show");
    $(".howPop").removeClass("show");
    $(".sShow").removeClass("show");
    $( ".navM" ).addClass("hide");

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