//main.js
p = [
	[51.481889,-0.096609,'SandM'],
	[51.48088471558213,-0.0850988104939,'My'],
	[51.480264,-0.093984,'Vj'],
	[51.511042,-0.31211,'pawel']
]
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
	drop_markers : function(loc){
		var options = {
			zoom:1,
			center: new google.maps.LatLng(51.5171, 0.1062),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(document.getElementById("cnv"),
            options);
		m.setMarkers(map, loc);
	},
	setMarkers : function(map, loc){
		var bounds = new google.maps.LatLngBounds();
		var info = new google.maps.InfoWindow();
		for (var i=0; i<loc.length; i++){
			var myLatLng = new google.maps.LatLng(loc[i][0], loc[i][1]);
			bounds.union(new google.maps.LatLngBounds(myLatLng));
			var marker = new google.maps.Marker({
				position:myLatLng,
				map:map,
				title:loc[i][2],
				html:loc[i][2],
			})
			google.maps.event.addListener(marker, 'click', function(e) {
				map.panTo(e.latLng);
				map.setZoom(15);
				info.setContent(this.html);
				info.open(map, this);
			});
		}
		
		map.fitBounds(bounds);
		google.maps.event.addListener(info,'closeclick',function(e){
			map.fitBounds(bounds);
		});
	},
	cl : function(){
		$('.over').click(function(e){
			e.preventDefault();
			var dt = $(this).data();
			$('.modal').modal();
			setTimeout(function() {
				m.initialize(dt.coor[0], dt.coor[1]);
			}, 300);	
		});
		$('.vid').click(function(e){
			e.preventDefault();
			$('.modal').modal();
			setTimeout(function() {
				$(ui.vid).appendTo('#cnv');
			}, 300);
		})
		$('.map_all').click(function(e){
			e.preventDefault();
			$('.modal').modal();
			setTimeout(function() {
				m.drop_markers(p);
			}, 300);
		})
	}
	
	  
}
ui = {
	vid : '<iframe width="500" height="285" src="http://www.youtube.com/embed/40F2gslPhvo?rel=0" frameborder="0" allowfullscreen></iframe>'
}
$(document).ready(function(){
	m.cl();
	$('.modal').on('hide', function () {
		$('#cnv').empty();
	})
})