        var map = L.map('map').setView([50.85, -8.04], 2);
        L.tileLayer('img/map/{z}/{y}-{x}.jpeg', {
            minZoom: 0,
            maxZoom: 4,
            attribution: 'LOTRRP Map by /u/astosman',
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
		GondorPoly.bindPopup("<b>Gondor</b>")
		RohanPoly.bindPopup("<b>Rohan</b>")
		MordorPoly.bindPopup("<b>Mordor</b>")
		DolGuldurPoly.bindPopup("<b>Dol Guldur</b>")
		NorthernMistyMountainsPoly.bindPopup("<b>Northern Misty Mountains</b>")
		NorthernBlueMountainsPoly.bindPopup("<b>Northern Blue Mountains</b>")
		SouthernBlueMountainsPoly.bindPopup("<b>Southern Blue Mountains</b>")
		IronHillsPoly.bindPopup("<b>The Iron Hills</b>")
		MoriaPoly.bindPopup("<b>Moria</b>")
		UmbarPoly.bindPopup("<b>Umbar</b>")
		HarondorPoly.bindPopup("<b>Harondor</b>")
		HaradwaithPoly.bindPopup("<b>Haradwaith</b>")
		LurmsakunPoly.bindPopup("<b>Lûrmsakun</b>")
		DunlandPoly.bindPopup("<b>Dunland</b>")
		DorwinionPoly.bindPopup("<b>Dorwinion</b>")
		BreelandPoly.bindPopup("<b>Breeland</b>")
		AnglePoly.bindPopup("<b>The Angle</b>")
		ShirePoly.bindPopup("<b>The Shire</b>")
		LothlorienPoly.bindPopup("<b>Lothlórien</b>")
		DalePoly.bindPopup("<b>Dale</b>")
		LindonPoly.bindPopup("<b>Lindon</b>")
		WoodlandRealmPoly.bindPopup("<b>Woodland Realm</b>")


		var PolyLayer = L.layerGroup([
			GondorPoly, RohanPoly, MordorPoly, DolGuldurPoly, NorthernMistyMountainsPoly,
			NorthernBlueMountainsPoly, SouthernBlueMountainsPoly, IronHillsPoly, 
			MoriaPoly, UmbarPoly, HarondorPoly,HaradwaithPoly, LurmsakunPoly, DunlandPoly, 
			DorwinionPoly, BreelandPoly, AnglePoly, ShirePoly,
			LothlorienPoly, DalePoly, LindonPoly, WoodlandRealmPoly
			]).addTo(map);

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
		
		
		//Loop through the Rohan markers (declared on marker.js) array and add markers to layer
		var arrRohanMarkers = []
         for (var i=0; i<markers_Rohan.length; i++) {
           
            var lat = markers_Rohan[i][0];
            var lon = markers_Rohan[i][1];
			var icn = markers_Rohan[i][2];
            var popupText = markers_Rohan[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrRohanMarkers.push(marker)
         }
		var markerLayerRohan = L.layerGroup(arrRohanMarkers).addTo(map);

		//Loop through the Dark Forces markers (declared on marker.js) array and add markers to layer
		var arrDarkForcesMarkers = []
         for (var i=0; i<markers_DarkForces.length; i++) {
           
            var lat = markers_DarkForces[i][0];
            var lon = markers_DarkForces[i][1];
			var icn = markers_DarkForces[i][2];
            var popupText = markers_DarkForces[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrDarkForcesMarkers.push(marker)
         }
		var markerLayerDarkForces = L.layerGroup(arrDarkForcesMarkers).addTo(map);
		
		
		//Loop through the Dwarves markers (declared on marker.js) array and add markers to layer
		var arrDwarvesMarkers = []
         for (var i=0; i<markers_Dwarves.length; i++) {
           
            var lat = markers_Dwarves[i][0];
            var lon = markers_Dwarves[i][1];
			var icn = markers_Dwarves[i][2];
            var popupText = markers_Dwarves[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrDwarvesMarkers.push(marker)
         }
		var markerLayerDwarves = L.layerGroup(arrDwarvesMarkers).addTo(map);		

		//Loop through the DarkMen markers (declared on marker.js) array and add markers to layer
		var arrDarkMenMarkers = []
         for (var i=0; i<markers_DarkMen.length; i++) {
           
            var lat = markers_DarkMen[i][0];
            var lon = markers_DarkMen[i][1];
			var icn = markers_DarkMen[i][2];
            var popupText = markers_DarkMen[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrDarkMenMarkers.push(marker)
         }
		var markerLayerDarkMen = L.layerGroup(arrDarkMenMarkers).addTo(map);	
		

		//Loop through the Breeland markers (declared on marker.js) array and add markers to layer
		var arrBreelandMarkers = []
         for (var i=0; i<markers_Breeland.length; i++) {
           
            var lat = markers_Breeland[i][0];
            var lon = markers_Breeland[i][1];
			var icn = markers_Breeland[i][2];
            var popupText = markers_Breeland[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrBreelandMarkers.push(marker)
         }
		var markerLayerBreeland = L.layerGroup(arrBreelandMarkers).addTo(map);			
		
		//Loop through the Lothlorien markers (declared on marker.js) array and add markers to layer
		var arrLothlorienMarkers = []
         for (var i=0; i<markers_Lothlorien.length; i++) {
           
            var lat = markers_Lothlorien[i][0];
            var lon = markers_Lothlorien[i][1];
			var icn = markers_Lothlorien[i][2];
            var popupText = markers_Lothlorien[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrLothlorienMarkers.push(marker)
         }
		var markerLayerLothlorien = L.layerGroup(arrLothlorienMarkers).addTo(map);	

		
		//Loop through the Wilderlands markers (declared on marker.js) array and add markers to layer
		var arrWilderlandsMarkers = []
         for (var i=0; i<markers_Wilderlands.length; i++) {
           
            var lat = markers_Wilderlands[i][0];
            var lon = markers_Wilderlands[i][1];
			var icn = markers_Wilderlands[i][2];
            var popupText = markers_Wilderlands[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrWilderlandsMarkers.push(marker)
         }
		var markerLayerWilderlands = L.layerGroup(arrWilderlandsMarkers).addTo(map);	
		
		//Loop through the Lindon markers (declared on marker.js) array and add markers to layer
		var arrLindonMarkers = []
         for (var i=0; i<markers_Lindon.length; i++) {
           
            var lat = markers_Lindon[i][0];
            var lon = markers_Lindon[i][1];
			var icn = markers_Lindon[i][2];
            var popupText = markers_Lindon[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrLindonMarkers.push(marker)
         }
		var markerLayerLindon = L.layerGroup(arrLindonMarkers).addTo(map);	

		//Loop through the Woodlands markers (declared on marker.js) array and add markers to layer
		var arrWoodlandsMarkers = []
         for (var i=0; i<markers_Woodlands.length; i++) {
           
            var lat = markers_Woodlands[i][0];
            var lon = markers_Woodlands[i][1];
			var icn = markers_Woodlands[i][2];
            var popupText = markers_Woodlands[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn}).bindPopup(popupText);
			arrWoodlandsMarkers.push(marker)
         }
		var markerLayerWoodlands = L.layerGroup(arrWoodlandsMarkers).addTo(map);
		
		//Add logo markers to map at each layer, etc
		/*var arrLogosMarkers = []
         for (var i=0; i<markers_Logos.length; i++) {
           
            var lat = markers_Logos[i][0];
            var lon = markers_Logos[i][1];
			var icn = markers_Logos[i][2];
            var popupText = markers_Logos[i][3];
            
             var marker = new L.Marker([lat, lon], {icon: icn});
			arrLogosMarkers.push(marker)
         }
		var markerLayerLogos = L.layerGroup(arrLogosMarkers).addTo(map);*/
			
		
		// Hide markers if the user zooms out
		map.on('zoomend', function () {
			if (map.getZoom() < 2) {
				map.removeLayer(markerLayerGondor);
				map.removeLayer(markerLayerRohan);
				map.removeLayer(markerLayerDarkForces);
				map.removeLayer(markerLayerDwarves);
				map.removeLayer(markerLayerDarkMen);
				map.removeLayer(markerLayerBreeland);				
				map.removeLayer(markerLayerLothlorien);	
				map.removeLayer(markerLayerWilderlands);
				map.removeLayer(markerLayerLindon);	
				map.removeLayer(markerLayerWoodlands);	

			}
			else
			{
				map.addLayer(markerLayerGondor);
				map.addLayer(markerLayerRohan);
				map.addLayer(markerLayerDarkForces);
				map.addLayer(markerLayerDwarves);
				map.addLayer(markerLayerDarkMen);
				map.addLayer(markerLayerBreeland);
				map.addLayer(markerLayerLothlorien);
				map.addLayer(markerLayerLindon);
				map.addLayer(markerLayerWilderlands);
				map.addLayer(markerLayerWoodlands);
								
			}   
			map.addLayer(PolyLayer);
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
		
		function toggleRohanLayer(){
			if (map.hasLayer(markerLayerRohan)) {
				map.removeLayer(markerLayerRohan);
			}
			else
			{
				map.addLayer(markerLayerRohan);
			}
		}
		
		function toggleDarkForcesLayer(){
			if (map.hasLayer(markerLayerDarkForces)) {
				map.removeLayer(markerLayerDarkForces);
			}
			else
			{
				map.addLayer(markerLayerDarkForces);
			}
		}
		
		function toggleDwarvesLayer(){
			if (map.hasLayer(markerLayerDwarves)) {
				map.removeLayer(markerLayerDwarves);
			}
			else
			{
				map.addLayer(markerLayerDwarves);
			}
		}				

		function toggleDarkMenLayer(){
			if (map.hasLayer(markerLayerDarkMen)) {
				map.removeLayer(markerLayerDarkMen);
			}
			else
			{
				map.addLayer(markerLayerDarkMen);
			}
		}	

		function toggleBreelandLayer(){
			if (map.hasLayer(markerLayerBreeland)) {
				map.removeLayer(markerLayerBreeland);
			}
			else
			{
				map.addLayer(markerLayerBreeland);
			}
		}	

		function toggleLothlorienLayer(){
			if (map.hasLayer(markerLayerLothlorien)) {
				map.removeLayer(markerLayerLothlorien);
			}
			else
			{
				map.addLayer(markerLayerLothlorien);
			}
		}			

		function toggleWilderlandsLayer(){
			if (map.hasLayer(markerLayerWilderlands)) {
				map.removeLayer(markerLayerWilderlands);
			}
			else
			{
				map.addLayer(markerLayerWilderlands);
			}
		}	
		
		function toggleLindonLayer(){
			if (map.hasLayer(markerLayerLindon)) {
				map.removeLayer(markerLayerLindon);
			}
			else
			{
				map.addLayer(markerLayerLindon);
			}
		}			

		function toggleWoodlandsLayer(){
			if (map.hasLayer(markerLayerWoodlands)) {
				map.removeLayer(markerLayerWoodlands);
			}
			else
			{
				map.addLayer(markerLayerWoodlands);
			}
		}

		function togglePolyLayer(){
			if (map.hasLayer(PolyLayer)) {
				map.removeLayer(PolyLayer);
			}
			else
			{
				map.addLayer(PolyLayer);
			}
		}					
				
		/*var selector = L.control({
		  position: 'topleft'
		});
		selector.onAdd = function(map) {
		  var div = L.DomUtil.create('div', 'mySelector');
		  div.innerHTML = '<select id="marker_select" class="form-control"><option value="init">(select item)</option></select>';
		  return div;
		};
		selector.addTo(map);
		
		
		markerLayerNonWesteros.eachLayer(function(layer) {
			var optionElement = document.createElement("option");
			optionElement.innerHTML = layer._popup._content;
			optionElement.value = layer._leaflet_id;
			L.DomUtil.get("marker_select").appendChild(optionElement);
		});
		
		var marker_select = L.DomUtil.get("marker_select");
		L.DomEvent.addListener(marker_select, 'click', function(e) {
			L.DomEvent.stopPropagation(e);
		});
		L.DomEvent.addListener(marker_select, 'change', changeHandler);
		
		function changeHandler(e) {
			if (e.target.value == "init") {
				map.closePopup();
			} else {
				// TODO: CENTER MAP
				// map.setView()
				markerLayerNonWesteros.getLayer(e.target.value).openPopup();
			}
		}*/