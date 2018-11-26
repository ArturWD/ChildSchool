$(function() {
	// services
	$(".about-img").imagefill();
	$(".service-img").imagefill();
	//NEWS
	$('.news-preview').imagefill();
	
	//MENU
    
    //menu breakpoint
    var breakAt = 1000;
	$(window).resize(function(){		
		if( $(window).width() < breakAt ){
			
			$('.navigation--menu').slideUp(0, function(){});
			
			
		}
		else{
			$('.navigation--menu').slideDown(0, function(){});
			$('.drop-down-menu').slideUp(300, function(){});
            $('.navigation-wrapper').removeClass('is-open');
		}
		
	});
	
	$(window).scroll(function(){
		if( $(window).width() > breakAt ){
			$('.drop-down-menu').slideUp(300, function(){});
		}
	});
	
	$(".navigation--hamburger").on('click', function(){
		$('.navigation--menu').slideToggle(300, function(){});
        $('.navigation-wrapper').toggleClass('is-open');
		
	});

	$('.drop-down-item').on('click', function(e){
		
			$(e.currentTarget).find('.drop-down-menu').slideToggle(300, function(){});	
		
	});
	
	if( $(window).width() < breakAt ){
		$('.navigation--menu').slideUp(0, function(){});
	};
	
    
    
	//REVIEWS
	$('.reviews-carousel').owlCarousel({
		items:1,
		loop:true,
		responsiveClass:true,
		margin:30,
		responsive:{
			500:{
				items: 2
			},
			800:{
				items:3
			}
		}
	});
    
    
    //SMOOTH SCROLL
    // Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000, function() {

			});
		  }
		}
	  });
	
	//DIPLOMAS
	$('.diplomas-popup').on('click', function(e){
		$(e.currentTarget).isDefaultPrevented;
	});
	$('.diplomas-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});
	
	$('.diplomas-carousel').owlCarousel({
		items:2,
		loop:false,
		responsiveClass:true,
		margin:30,
		dots:false,
		nav:true,
		responsive:{
			550:{
				items: 3
			},
			850:{
				items:4
			},
			1000:{
				items:5
			}
		}
	});
	
});

