    $(document).ready(function() {
	  
	  /* -------slider----------- */
	    $("#home_page_slider").owlCarousel({
		  items : 1,
		  autoPlay: true, //Set AutoPlay to 3 seconds
		  nav : true, 
		  loop: true,
		  navText: ["<span class='fa fa-chevron-left'></span>","<span class=' fa fa-chevron-right'></span>"],     
		  mouseDrag: false,
		  touchDrag: false,
        
     
      });
	  
	  
	  
	  $("#home_page_slider").on("translate.owl.carousel", function(){
	  
		$("p.slide-item-para").removeClass("animated fadeInUp").css("opacity", "0");
		$("h2.slider-content").removeClass("animated fadeInUp").css("opacity", "0");
		$("h4.slide-describ").removeClass("animated fadeInUp").css("opacity", "0");
		$(".slider-content-bottom a").removeClass("animated fadeInUp").css("opacity", "0");
	  
	  });
	  
	  $("#home_page_slider").on("translated.owl.carousel", function(){
	  
		$("p.slide-item-para").addClass("animated fadeInUp").css("opacity", "1");
		$("h2.slider-content").addClass("animated fadeInUp").css("opacity", "1");
		$("h4.slide-describ").addClass("animated fadeInUp").css("opacity", "1");
		$(".slider-content-bottom a").addClass("animated fadeInUp").css("opacity", "1");
	  
		
	  
	  });
	  
	/* --------------google-map------------ */
	
	  /* ----------testimonial-carousel---------- */
	  
	  
	   $("#testi_page").owlCarousel({
		  items : 1,
		  autoPlay: true, //Set AutoPlay to 3 seconds
		  nav : true, 
		  loop: true,
		  navText: ["<span class='fa fa-chevron-left'></span>","<span class=' fa fa-chevron-right'></span>"],     
		  mouseDrag: false,
		  touchDrag: false,
        
     
      });
	  
	  
	  
     
    });
