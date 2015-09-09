var map
var marcador

function goahead(){
	initialize();
}
function initialize() {
				
	var mapOptions = {
		zoom: 18,
			mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map_canvas'),
		mapOptions);
					
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		var pos = new google.maps.LatLng(position.coords.latitude,
														   position.coords.longitude);

		var infowindow = new google.maps.InfoWindow({
					map: map,
					position: pos,
					content: 'Aqui Estoy!'
					})
					marcador = new google.maps.Marker({
					position: pos,
					map:map,
					title: 'Dónde estoy?' })
					
						  map.setCenter(pos);
						}, function() {
						  handleNoGeolocation(true);
						});
					  } else {
						// Browser doesn't support Geolocation
						handleNoGeolocation(false);
					  }

					function handleNoGeolocation(errorFlag) {
					  if (errorFlag) {
						var content = 'Error: The Geolocation service failed.';
					  } else {
						var content = 'Error: Your browser doesn\'t support geolocation.';
					  }

					  var options = {
						map: map,
						position: new google.maps.LatLng(60, 105),
						content: content
					  };

					  var infowindow = new google.maps.InfoWindow(options);
					  map.setCenter(options.position);
					}
					
							var marcadors = new google.maps.Marker({
								position: new google.maps.LatLng(-33.438445, -70.641041),
								map:map,
								title: "Escuela Sindical Oficial"});
    						attachSecretMessage(marcadors);

}
function attachSecretMessage(marker) {
	var infowindow = new google.maps.InfoWindow({
 	content: "Escuela Sindical Oficial"+"</br>"+"Fono: 2-26423902"+"</br>Linea : NUEVOS LIDERES"+"</br><a href='http://localhost/FindMarket/startbootstrap-grayscale-1.0.4/negocio/Escuela/'>&nbsp Mas Informacion</a>",
  	});
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(marker.get('map'), marker);
  }); 
}