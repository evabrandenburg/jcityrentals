

  $(".next").click( animN );
  $(".prev").click( animP );

  function animN(){
    $(".wrap .img").first().appendTo('.wrap');
    $(".wrap .img").first();
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

//$(".wrap").append($(".wrap .img").get().reverse());

//$("#container").append($(".block-item").get().reverse());


	/*function GO(){
    //$(".next").onClick( anim );
		function anim() {	$(".wrap .img").first().appendTo('.wrap').fadeOut(1000);
    	$(".wrap .img").first().fadeIn(2000);  
    	setTimeout(anim, 2000);
		}
	anim();*/