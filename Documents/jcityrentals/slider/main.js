  $(".next").click( animN );
  $(".prev").click( animP );

  function animN(){
    $(".wrap .img").first().appendTo('.wrap');
    $(".wrap .img").first();
  }

   function animP(){
    $(".wrap").append($(".wrap .img").get().reverse());
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