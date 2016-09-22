        var map = L.map('map').setView([25, 0], 2);
        L.tileLayer('img/map/{z}/{y}-{x}.jpeg', {
            minZoom: 0,
            maxZoom: 4,
            tileSize: 259,
            attribution: 'Crimson West Map by /u/astosman',
            tms: false,
			noWrap: true,
			maxBoundsViscosity: 1.0
        }).addTo(map);
		  
		/*This function gives you Lat Long of what you click on */
		
		/*function onMapClick(e) {
			alert("You clicked the map at " + e.latlng);

			/*if(confirm("ADD MARKER HERE=?")){
				var mrk = prompt("Marker (Gondor,Rohan,DarkMen,Breeland,Lothlorien,Dwarves,Woodlands,Wilderlands,DarkForces,Lindon):")
				var txt = prompt("Text")
				m_icon = L.icon({iconUrl: 'img/marker/'+mrk+'.png',iconSize: [21, 21]})
				mark = new L.Marker([e.latlng.lat, e.latlng.lng], {icon: m_icon}).bindPopup(txt);
				map.addLayer(mark)
	
				$("#text").val($("#text").val()+"["+e.latlng.lat+","+e.latlng.lng+","+mrk+",\""+txt+"\"],\n")
	
			}*/

		/*};
		map.on('click', onMapClick);
		*/

		//loop through Polygons and display
	

		//Loop through the Gondor markers (declared on marker.js) array and add markers to layer
		var arrGondorMarkers = []
         for (var i=0; i<markers_Gondor.length; i++) {
           
            var lat = markers_Gondor[i][0];
            var lon = markers_Gondor[i][1];
			var icn = markers_Gondor[i][2];
            var popupText = markers_Gondor[i][3];
            
            var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrGondorMarkers.push(marker)
         }
		var markerLayerGondor = L.layerGroup(arrGondorMarkers).addTo(map);
		
		// Hide markers if the user zooms out
		map.on('zoomend', function () {
			if (map.getZoom() < 2) {
				map.removeLayer(markerLayerGondor);
					

			}
			else
			{
				map.addLayer(markerLayerGondor);
				
								
			}   
			
		}); 
		
		
		function toggleGondorLayer(){
			if (map.hasLayer(markerLayerGondor)) {
				map.removeLayer(markerLayerGondor);
			}
			else
			{
				map.addLayer(markerLayerGondor);
			}
		}
		
		