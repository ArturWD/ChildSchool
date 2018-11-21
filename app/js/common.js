$(function() {
	$(window).resize(function(){		
		if( $(window).width() < 900 ){
			
			$('.navigation--menu').slideUp(0, function(){});
			
			
		}
		else{
			$('.navigation--menu').slideDown(0, function(){});
			$('.drop-down-menu').slideUp(300, function(){});

		}
		
	});
	$(".navigation--hamburger").on('click', function(){
		$('.navigation--menu').slideToggle(300, function(){});
	});

	$('.drop-down-item').on('click', function(e){
		if( $(window).width() < 900 ){
			$(e.currentTarget).find('.drop-down-menu').slideToggle(300, function(){});	
		}
	});
});
