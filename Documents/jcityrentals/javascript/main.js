


/* CURRENTLY IN: javascript/main.js */

$(window).bind("load", function() {


/*function line( lineN ){
  $("form" ).html(
    "<div class="
    + lineN
    +">"
    +"</div>"
    );
}

/*function line2( lineN ){
 $("form" ).html(
    "<div class="
    + lineN
    +">"
    +"</div>"
    );
}

line( )

/*var n = 5; //or however much you want
for (var i = 0; i < n; i++){
  line( i )
}



take 
add 
"<div class=" 
    + lineN
    +">"
    +"</div>"

    N times changing class of line each time

    if number of divs in form is less than or equal to N
    add new div "lineN"

line( "line1" );

$(".line1").html( line( "line2" ););

*/


function form2(number, pl1, pl2, pl3, pl4){
  $(".line" + number ).html(
    "<input type='text' placeholder='"
    + pl1
    +"'"
    + ">"
    +"<input type='text' placeholder='"
    + pl2
    +"'"
    + ">"
  );
}

function form3(number, pl1, pl2, pl3, pl4){
  $(".line" + number ).html(
    "<input type='text' placeholder='"
    + pl1
    +"'"
    + ">"
    +"<input type='text' placeholder='"
    + pl2
    +"'"
    + ">"
    +"<input type='text' placeholder='"
    + pl3
    +"'"
    + ">"
  );
}

function form4(number, pl1, pl2, pl3, pl4){
  $(".line" + number ).html(
    "<input type='text' placeholder='"
    + pl1
    +"'"
    + ">"
    +"<input type='text' placeholder='"
    + pl2
    +"'"
    + ">"
    +"<input type='text' placeholder='"
    + pl3
    +"'"
    + ">"
    +"<input type='text' placeholder='"
    + pl4
    +"'"
    + ">"
  );
}



//APPLICANT #1: ______________________________ E-Mail Address: _____________________________
form4(1, "applicant one name", "email", "phone", "Birthdate");

//Home Phone ____________________ Cell Phone________________________  Birth Date ____________
form4(2, "Social Security #", "Driver's License #", "State", "Exp.");
/*Social Security #___________________ Drivers License #____________________State______ Exp.____

Move-in Date Required____________ Current Lease Expiration Date:     /      /

Advertised Rental Amount $ ___________ Current Rent Paid $__________ My Rent Is Paid Thru    /        /        

Current Address__________________________________ City_________________State_____Zip_______

Current Landlord Name _______________________________Landlord Phone #_____________________

How long at this address _______ Reason for leaving__________________________________________

Previous Address ________________________________City_________________ State____ Zip_______

Previous Landlord Name __________________________Previous Landlord Phone # ________________

How long at this address  _______Rent Paid $________ Reason for leaving________________________

Auto Owned Yr._____ Make_____________ Model____________ State/License Plate #_______________

Name of Employer_________________________ Position ___________________ Years At This Job____

Supervisor Name & Title______________________ Phone #______________Current Salary $__________

Employer Address______________________________City__________________State_____Zip________

Other Income and Source__________________________________________________________________

Bank Reference: Name ___________________ Account # ________________ Phone ________________

Nearest Relative: Name ______________________Phone __________________ Relationship _________ 

CO-APPLICANT #2: ___________________________ E-Mail Address: _____________________________

Home Phone _____________________  Cell Phone ________________________ Birth Date __________

Social Security # ____________________Drivers License #_____________________State ___Exp._____

Current Rent $_________ Rent Paid Through   /        /         Current Lease Expiration Date      /         /

Current Address__________________________________City_________________State_____Zip_______

Current Landlord Name  _______________________________Landlord Phone # ____________________

How long at this address _______Reason for leaving___________________________________________

Previous Address ______________________________City__________________ State ____ Zip________

Previous Landlord Name___________________________ Previous Landlord Phone #________________

How long at this address _______ Rent Paid $_________ Reason for leaving ______________________

Auto Owned Yr._____ Make _____________Model ____________State/License Plate # _______________

Name of Employer____________________________ Position________________Years At This Job_____

Supervisor Name & Title _________________________ Phone # ____________ Current Salary ________

Employer Address_______________________________City__________________State_____Zip_______

Other Income and Source__________________________________________________________________

Bank Reference: Name ______________________ Account # ___________________ Phone __________

Nearest Relative: Name ______________________Phone __________________ Relationship _________
*/

 
function sLoco(){
    $( ".locoPop" ).addClass( "show" );
    $( ".howPop" ).removeClass( "show" );
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

function hMenu(){
  $( ".navM").removeClass( "show ");
}


$(".loco").click( sLoco );
$(".how").click( sHow );
$(".see").click( sShow );
$(".icon").click( sMenu );
$(".icon").click( hMenu );

/*if ($( ".navM" ).hasClass("show")){
	$(".menu").click( hide );
}*/

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