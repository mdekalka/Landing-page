
$(document).ready(function() {

				//smoothing scroll
				$('a[href*=#]:not([href=#])').click(function() {
						if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
							var target = $(this.hash);
							target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
							if (target.length) {
								$('html,body').animate({
									scrollTop: target.offset().top
								}, 1000);
								return false;
							}
						}
					});

					//mobile menu shiw/hide
					$(".mobile").toggle(function() {
							$(".sticky-menu ul").fadeOut("200");
					}, function() {
							 $(".sticky-menu ul").fadeIn("200");
					});
							
					 //mobile menu active/unactive   
					 if ($(window).width() < 560)
								{
										$(".mobile").css("display", "block");
										$(".sticky-menu ul").addClass('mobile-list');
										$(".sticky-menu ul li").addClass('mobile-li');
								}
						else
								{
										$(".mobile").css("display", "none");
										$(".sticky-menu ul").removeClass('mobile-list');
										$(".sticky-menu ul li").removeClass('mobile-li');

								} 

						// comments block
				$(".reviews_img").on('hover',  function(event) {
						$(".reviews_img").removeClass('active');
						$(this).addClass('active');
						if ($(".reviews-1").hasClass('active')) 
								{
										$(".reviews-private").removeClass('active');
										$(".private-1").addClass('active');

								} 
						else if ($(".reviews-2").hasClass('active'))
								{
										$(".reviews-private").removeClass('active');
										$(".private-2").addClass('active');
								}
						else if ($(".reviews-3").hasClass('active'))
								{
										$(".reviews-private").removeClass('active');
										$(".private-3").addClass('active');
								} 
						else if ($(".reviews-4").hasClass('active'))
								{
										$(".reviews-private").removeClass('active');
										$(".private-4").addClass('active');
								} 
						else
								{

								}
				 });	

					var 
						height_div = $(".reviews_img").height() ;
						offset_t = 10;
				 	if ($(window).width() < 1000)
						{
							 
								$(".reviews-private").css('height', height_div -offset_t);
								
						}	

					//resize function mobile menu show/hide				
					$(window).resize(function(event) {
						 var 
								height_div = $(".reviews_img").height() ;
								offset_t = 10;


						if ($(window).width() < 560)
								{
										$(".mobile").css("display", "block");
										$(".sticky-menu ul").addClass('mobile-list');
										$(".sticky-menu ul li").addClass('mobile-li');
								}
						else
								{
									$(".mobile").css("display", "none");
									$(".sticky-menu ul").removeClass('mobile-list');
									$(".sticky-menu ul li").removeClass('mobile-li');
								}  

						if ($(window).width() < 1000)
							{
								 
									$(".reviews-private").css('height', height_div -offset_t);
									
							}
									
					});


					//cal animation function
					$(window).scroll(function() {
						
						var
							window_top = $(window).scrollTop();
							brand_anchor = $("span#brand-anchor").offset().top / 3;
							about_anchor = $("span#about-anchor").offset().top - 500;
							comment_anchor = $("span#comment-anchor").offset().top - 500;
							sell_anchor = $("span#sell-anchor").offset().top - 450;
							feedback_anchor = $("span#feedback-anchor").offset().top - 500;
														
							if (window_top > feedback_anchor)
								{
									
			 						setTimeout(function() {$(".feedback-info").animate({right: "0"}, 300)}, 500);
									setTimeout(function() {$(".feedback-link").animate({left: "0"}, 300)}, 500);
								}
							else if (window_top > sell_anchor)
								{
									setTimeout(function() {$(".sell-list-1").animate({top: "0"}, 300)}, 500);
									setTimeout(function() {$(".sell-list-2").animate({bottom: "0"}, 300)}, 500);
									setTimeout(function() {$(".sell-meta").animate({opacity: "1"}, 300)}, 1000);
								}	
							else if (window_top > comment_anchor)
								{
									setTimeout(function() {$(".reviews-person").animate({opacity: "1"}, 300)}, 500);
				  				setTimeout(function() {$(".reviews-container").animate({opacity: "1"}, 300)}, 1000);
								}	
							else if (window_top > about_anchor)
								{
									
									setTimeout(function() {$(".info-list-1").animate({left: "0"}, 300)}, 200);
									setTimeout(function() {$(".info-list-2").animate({right: "0"}, 300)}, 700);
								}	
							else  (window_top > brand_anchor)	
								{
									setTimeout(function() {$(".brand-list-1").animate({"opacity": "1"}, 300)},200);
			 						setTimeout(function() {$(".brand-list-2").animate({"opacity": "1"}, 300)},700);
								}
					});



				    

				// sticky menu
				$(".sticky-menu").sticky({ topSpacing: 0 });

				

				// privacy modal window
				var $modal = $(".privacy");
				$modal.on('click',  function(event) {
						$(".privacy-modal").fadeIn("300");
				});
				$(".close-privacy").on('click', function(event) {
						$(".privacy-modal").fadeOut("100");
						
				});


				// get price
				var $get_price = $(".get-price");
				$get_price.on('click',  function(event) {
						$(".price-modal").fadeIn("300");
				});
				 $(".close-price").on('click', function(event) {
						 $(".price-modal").fadeOut("100");
						
				});

					$("#phone").mask("+375 (99) 999-99-99"); 
					$("#m-phone").mask("+375 (99) 999-99-99"); 


});


