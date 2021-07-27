(function ($) {
	"use strict";

	var nav = $('nav');
	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	});
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	}); 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 30)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});

	
	$('.tours-slide').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
        responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});

	
	$('.video-slide').owlCarousel({
		margin: 10,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: true,
		center: true,
		autoplayHoverPause: true,
		loop: true,
        responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2,
			autoWidth:true,
			autoHeight: true,
			},
			1000: {
				items: 3,
			autoWidth:true,
			autoHeight: true,
			}
		}
	});
	
	
	
	$('#testimonial-slide').owlCarousel({
		margin: 5,
		autoplay: true,
		center: true,
		autoplayTimeout: 4000,
		nav: true,
		smartSpeed: 1000,
		navText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
		],
		dots: false,
		autoplayHoverPause: true,
		loop: true,
        responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 2
			}
		}
	});
	
	
    $('.popup-video').magnificPopup({
		type: 'iframe',
	});
	
	
	$('.counter-number').counterUp({
		delay: 15,
		time: 2000
	});
	
	
 
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
	
})(jQuery);



$(window).on("load",function (){

    
    $('.gallery').isotope({
  
      itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
     
    });

    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

});