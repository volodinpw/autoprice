$(function(){
	$('.index-top-filter .filter-link').click(function() {
		$('.index-top-filter .links').toggle();
	});
	
	$('.menu .close').click(function() {
		$('.menu').removeClass('opened');
	});
	$('.header .social .menu-button').click(function() {
		$('.menu').addClass('opened');
		$('.top-menu').toggleClass('opened');
	});
	$('.complects-block .list').slick({
	  arrows: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        variableWidth: true,
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	$('.popup-gallery .window .list').slick({
	});
	$('.reviews-block .list').slick({
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        variableWidth: true,
	        slidesToShow: 1,
	        arrows: false
	      }
	    }
	  ]
	});
	$('.complects-block .list2').slick({
	  arrows: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        variableWidth: true,
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});