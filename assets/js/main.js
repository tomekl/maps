//main.js
m = {
	initialize : function (lat,lng) {
        var mapOptions = {
			center: new google.maps.LatLng(lat, lng),
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
		var marker = new google.maps.Marker({
			position: mapOptions.center,
			title:"Hello World!"
		});
		
		marker.setMap(map);
    },
	cl : function(){
		$('.over').click(function(e){
			e.preventDefault();
			$('#map_canvas').empty();
			var dt = $(this).data();
			$('.modal').modal();
			setTimeout(function() {
				m.initialize(dt.coor[0], dt.coor[1]);
			}, 300);	
		})
	}
	  
}
$(document).ready(function(){
	m.cl();
})