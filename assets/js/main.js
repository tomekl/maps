//main.js
m = {
	initialize : function (lat,lng) {
        var mapOptions = {
			center: new google.maps.LatLng(lat, lng),
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("cnv"),
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
			$('#cnv').empty();
			var dt = $(this).data();
			$('.modal').modal();
			setTimeout(function() {
				m.initialize(dt.coor[0], dt.coor[1]);
			}, 300);	
		});
		$('.vid').click(function(e){
			e.preventDefault();
			$('#cnv').empty();
			$('.modal').modal();
			setTimeout(function() {
				$(ui.vid).appendTo('#cnv');
			}, 300);
		})
	}
	
	  
}
ui = {
	vid : '<iframe width="500" height="285" src="http://www.youtube.com/embed/40F2gslPhvo?rel=0" frameborder="0" allowfullscreen></iframe>'
}
$(document).ready(function(){
	m.cl();
})