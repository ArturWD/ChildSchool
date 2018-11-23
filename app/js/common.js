$(function() {
	// services
	$(".about-img").imagefill();
	$(".service-img").imagefill();
	//NEWS
	$('.news-preview').imagefill();
	
	//MENU
	$(window).resize(function(){		
		if( $(window).width() < 900 ){
			
			$('.navigation--menu').slideUp(0, function(){});
			
			
		}
		else{
			$('.navigation--menu').slideDown(0, function(){});
			$('.drop-down-menu').slideUp(300, function(){});

		}
		
	});
	
	$(window).scroll(function(){
		if( $(window).width() > 900 ){
			$('.drop-down-menu').slideUp(300, function(){});
		}
	});
	
	$(".navigation--hamburger").on('click', function(){
		$('.navigation--menu').slideToggle(300, function(){});
		
	});

	$('.drop-down-item').on('click', function(e){
		
			$(e.currentTarget).find('.drop-down-menu').slideToggle(300, function(){});	
		
	});
	
	if( $(window).width() < 900 ){
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
	
});

