/* global $ */
(function () {
	'use strict';
	
	google.maps.event.addDomListener(window, 'load', initMap);
	
	// collapse nav bar once scrolled down
	$(window).scroll(function() {
		var $navbar = $("#main-nav");
		
		if ($navbar.offset().top > 50) {
			$navbar.addClass("top-nav-collapse");
		} else {
			$navbar.removeClass("top-nav-collapse");
		};
	});
	
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1300, 'easeInOutExpo');
		event.preventDefault();
	});
	
	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});
	
	function initMap() {
		var mapOptions = {
			zoom: 15,
			// map center point
			center: new google.maps.LatLng(38.626867, -90.189380), // 100ish Broadway
			disableDefaultUI: true,
			scrollwheel: false,
			draggable: false,
	
			// Snazzy Maps
			styles: [{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
					"color": "#000000"
				}, {
					"lightness": 17
				}]
			}, {
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [{
					"color": "#000000"
				}, {
					"lightness": 20
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#000000"
				}, {
					"lightness": 17
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#000000"
				}, {
					"lightness": 29
				}, {
					"weight": 0.2
				}]
			}, {
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [{
					"color": "#000000"
				}, {
					"lightness": 18
				}]
			}, {
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [{
					"color": "#000000"
				}, {
					"lightness": 16
				}]
			}, {
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [{
					"color": "#000000"
				}, {
					"lightness": 21
				}]
			}, {
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#000000"
				}, {
					"lightness": 16
				}]
			}, {
				"elementType": "labels.text.fill",
				"stylers": [{
					"saturation": 36
				}, {
					"color": "#000000"
				}, {
					"lightness": 40
				}]
			}, {
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [{
					"color": "#000000"
				}, {
					"lightness": 19
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#000000"
				}, {
					"lightness": 20
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#000000"
				}, {
					"lightness": 17
				}, {
					"weight": 1.2
				}]
			}]
    	};

		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
	
		var image = 'img/map-marker.png';
		var myLatLng = new google.maps.LatLng(38.626867, -90.189380);
		var beachMarker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: image
		});
	}
	
})();