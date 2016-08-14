if( document.getElementsByClassName("map-box")[0] ) {

	var map;

	var marker;
	var image = 'img/marker.png';

	var styles;

	function initMap() {

		var styles = [
		    {
		        "featureType": "poi",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.business",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    }
		];

		var styledMap = new google.maps.StyledMapType(styles,
		{name: "Styled Map"});

		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 55.747985, lng: 37.5368653},
			// 55.747985,37.5368653
			scrollwheel: false,
			scaleControl: false,
			zoom: 14
		});

		marker = new google.maps.Marker({
			map: map,
			draggable: false,
			animation: google.maps.Animation.DROP,
			position: {lat: 55.747985, lng: 37.5368653},
			map: map,
			icon: image,
			title: 'Millidesign'
		});

		marker.addListener('click', toggleBounce);

		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');


	}

		function toggleBounce() {
		  if (marker.getAnimation() !== null) {
		    marker.setAnimation(null);
		  } else {
		    marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}

}

