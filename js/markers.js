  /********************************************/
 /**				MARKERS					**/
/********************************************/

// Define marker icons
// For each region add an image to 'img/marker/' 
var Natives = L.icon({iconUrl: 'img/marker/Natives.png',iconSize: [34, 53],iconAnchor: [17, 53]})

var Epitath1 = L.icon({iconUrl: 'img/marker/Epitath1.png',iconSize: [34, 53],iconAnchor: [17, 53]})
var Epitath2 = L.icon({iconUrl: 'img/marker/Epitath2.png',iconSize: [34, 53],iconAnchor: [17, 53]})
var Epitath = L.icon({iconUrl: 'img/marker/Epitath.png',iconSize: [34, 53],iconAnchor: [17, 53]})

// Define the markers
var markers_Array = [

	[59.44887, -24.32432,Natives,"<b>Test Marker</b>"],
	[33.66787, 114.67181,Epitath,"<b>Epitath</b>"],
	[33.66787, 124.67181,Epitath2,"<b>Epitath</b>"],
	[33.66787, 134.67181,Epitath1,"<b>Epitath</b>"]];



//Polygons

