  /********************************************/
 /**				MARKERS					**/
/********************************************/

// Define marker icons
// For each region add an image to 'img/marker/' 
var Gondor = L.icon({iconUrl: 'img/marker/Gondor.png',iconSize: [21, 21]})

var Rohan = L.icon({iconUrl: 'img/marker/Rohan.png',iconSize: [21, 21]})

var DarkForces = L.icon({iconUrl: 'img/marker/DarkForces.png',iconSize: [21, 21]})
var Nazgul = L.icon({iconUrl: 'img/marker/Nazgul.png',iconSize: [21, 21]})

var BlueDwarves = L.icon({iconUrl: 'img/marker/BlueDwarves.png',iconSize: [21, 21]})
var MoriaDwarves = L.icon({iconUrl: 'img/marker/MoriaDwarves.png',iconSize: [21, 21]})

var DarkMen = L.icon({iconUrl: 'img/marker/DarkMen0.png',iconSize: [21, 21]})
var Umbar = L.icon({iconUrl: 'img/marker/Umbar.png',iconSize: [21, 21]})
var Hanistor = L.icon({iconUrl: 'img/marker/Hanistor.png',iconSize: [21,21]})
var Dorwinion = L.icon({iconUrl: 'img/marker/Dorwinion.png',iconSize: [21,21]})

var Arnor = L.icon({iconUrl: 'img/marker/Arnor.png',iconSize: [21, 21]})
var Shire = L.icon({iconUrl: 'img/marker/Shire.png',iconSize: [21, 21]})

var Elves = L.icon({iconUrl: 'img/marker/Elves.png',iconSize: [21, 21]})

var Dale = L.icon({iconUrl: 'img/marker/Dale.png',iconSize: [21, 21]})
var Beorning = L.icon({iconUrl: 'img/marker/Beorning.png',iconSize: [21, 21]})

var HighElves = L.icon({iconUrl: 'img/marker/HighElves.png',iconSize: [21, 21]})

var WoodElves = L.icon({iconUrl: 'img/marker/WoodElves.png',iconSize: [21, 21]})
var Radagast = L.icon({iconUrl: 'img/marker/Istari.png',iconSize: [21, 21]})

// Define the markers
var markers_Gondor = [

[19.31114,22.23633,Gondor,"<b>Dol Amroth</b>"],
[24.68695,25.66406,Gondor,"<b>Glanhir</b>"],
[38.82259,25.92773,Gondor,"<b>Erech</b>"],
[35.03,34.62891,Gondor,"<b>Calembel</b>"],
[32.02671,39.11133,Gondor,"<b>Ethring</b>"],
[19.06212,41.13281,Gondor,"<b>Linhir</b>"],
[25.87899,52.11914,Gondor,"<b>Minas Brethil</b>"],
[19.06212,57.74414,Gondor,"<b>Pelagrir</b>"],
[36.87962,66.00586,Gondor,"<b>Cair Andros</b>"],
[33.28462,67.58789,Gondor,"<b>Osgiliath</b>"],
[32.91649,64.24805,Gondor,"<b>Minas Tirith</b>"]]

var markers_Rohan = [
[42.74701, 31.99219,Rohan,"<b>Aldburg</b>"],
[47.69497, 34.36523,Rohan,"<b>Eastfold</b>"],
[44.71551, 24.3457,Rohan,"<b>Edoras</b>"],
[44.46515, 17.49023,Rohan,"<b>Dunharrow</b>"],
[50.34546, 21.79688,Rohan,"<b>Stonedeans</b>"],
[48.5166, 17.22656,Rohan,"<b>Kingstead</b>"],
[47.57653, 13.79883,Rohan,"<b>Helm's Deep</b>"],
[47.04018, 6.32813,Rohan,"<b>West-march</b>"]]

var markers_DarkForces = [
[78.0983, 26.19141,DarkForces,"<b>Mount Gundabad</b>"],
[77.15716, 11.42578,DarkForces,"<b>Mount Gram</b>"],
[76.12189, 13.44727,DarkForces,"<b>Ettenmoors</b>"],
[73.02259, 28.56445,DarkForces,"<b>Goblin Town</b>"],
[43.83453, 74.44336,DarkForces,"<b>The Black Gate</b>"],
[40.9799, 76.55273,DarkForces,"<b>Isenmouthe</b>"],
[37.57941, 86.30859,DarkForces,"<b>Barad-dur</b>"],
[35.03, 76.37695,DarkForces,"<b>Cirit Ungol</b>"],
[27.05913, 86.13281,DarkForces,"<b>Seregost</b>"],
[31.57854, 97.20703,DarkForces,"<b>Nargoth</b>"],
[65.47651, 20.6543,DarkForces,"<b>Khazad-Dûm<b/>"],
[63.27318, 58.62305,Nazgul,"<b>Dol Guldur</b>"],
[34.45222, 72.59766,Nazgul,"<b>Minas Morgul</b>"],
[37.09024, 83.4082,DarkForces,"<b>Mount Doom</b>"]]

var markers_Dwarves = [
[72.58083, -59.76562,BlueDwarves,"<b>Belegost</b>"],
[70.61261, -52.11914,BlueDwarves,"<b>Nogrond</b>"],
[75.3867, 82.5293,MoriaDwarves,"<b>Erebor</b>"],
[75.07301, 106.875,MoriaDwarves,"<b>Barukkhizdín</b>"],
[75.65043, 99.58008,MoriaDwarves,"<b>Azanûlinbar-Dûm</b>"]]

var markers_DarkMen = [
[-35.74651, 18.36914,Umbar,"<b>Caldur</b>"],
[-32.99024, 26.45508,Umbar,"<b>Isigir</b>"],
[-32.17561, 34.10156,Umbar,"<b>Barazon</b>"],
[-35.03, 30.32227,Umbar,"<b>Maros</b>"],
[-36.45664, 36.82617,Umbar,"<b>Umbar</b>"],
[-39.63954, -9.84375,Umbar,"<b>Erelond</b>"],
[-15.36895, 64.16016,Hanistor,"<b>Gobel Ancalimon</b>"],
[-0.87887, 61.25977,Hanistor,"<b>Amon Eithel</b>"],
[-14.09396, 84.55078,DarkMen,"<b>Amrûn</b>"],
[61.77312, 111.88477,Dorwinion,"<b>Uldonavan</b>"]]

var markers_Breeland = [
[71.99258, -15.0293,Arnor,"<b>Bree</b>"],
[71.99258, -12.04102,Arnor,"<b>Staddle</b>"],
[72.65959, -12.12891,Arnor,"<b>Combe</b>"],
[73.2267, -11.42578,Arnor,"<b>Archet</b>"],
[72.10094, -29.00391,Shire,"<b>Hobbiton</b>"],
[71.60828, -30.32227,Shire,"<b>Tuckburrow</b>"],
[71.58053, -24.87305,Shire,"<b>Bucklebury</b>"],
[71.93816, -33.31055,Shire,"<b>Michel Delving</b>"]]

var markers_Lothlorien = [
[61.22796, 37.26563,Elves,"<b>Caras Galadhon"],
[62.47172, 29.61914,Elves,"<b>Vinyamar</b>"],
[63.74363, 33.04688,Elves,"<b>Celebrant</b>"]]

var markers_Wilderlands = [
[72.8938, 52.29492,Beorning,"<b>Carrock</b>"],
[73.35305, 84.19922,Dale,"<b>Esgaroth (Lake-Town)</b>"],
[74.72962, 83.84766,Dale,"<b>Dale</b>"]]

var markers_Lindon = [
[72.65959, -72.42187,HighElves,"<b>Forlond</b>"],
[69.09994, -63.89648,HighElves,"<b>Harlond</b>"],
[72.15489, -52.4707,HighElves,"<b>MithLond (Grey Haven)</b>"],
[72.23551, 21.44531,HighElves,"<b>Rivendell</b>"]]

var markers_Woodlands = [
[74.49641, 75.84961,WoodElves,"<b>Halls of Thranduil</b>"],
[74.25974, 80.41992,WoodElves,"<b>Celebannon</b>"],
[71.49704, 73.38867,WoodElves,"<b>Emyn Duir</b>"],
[76.51682, 63.28125,WoodElves,"<b>Athrad Laegrim</b>"],
[67.33986, 55.37109,Radagast,"<b>Rhosgobel</b>"]]

//Polygons

var GondorPoly = L.polygon([
			new L.LatLng(16.29905, 52.11914),
			new L.LatLng(12.29707, 55.81055),
			new L.LatLng(10.91962, 58.71094),
			new L.LatLng(11.69527, 61.52344),
			new L.LatLng(11.0059, 64.33594),
			new L.LatLng(15.96133, 73.47656),
			new L.LatLng(27.13737, 72.1582),
			new L.LatLng(34.16182, 71.36719),
			new L.LatLng(36.73888, 70.66406),
			new L.LatLng(41.44273, 62.49023),
			new L.LatLng(42.29356, 56.07422),
			new L.LatLng(37.71859, 49.48242),
			new L.LatLng(36.80928, 47.02148),
			new L.LatLng(38.82259, 39.375),
			new L.LatLng(38.68551, 34.18945),
			new L.LatLng(42.74701, 24.78516),
			new L.LatLng(43.32518, 12.56836),
			new L.LatLng(41.77131, 8.61328),
			new L.LatLng(37.99616, 3.69141),
			new L.LatLng(31.1282, -5.97656),
			new L.LatLng(31.57854, -5.53711),
			new L.LatLng(27.44979, -6.67969),
			new L.LatLng(27.37177, -8.26172),
			new L.LatLng(31.72817, -11.68945),
			new L.LatLng(31.05293, -13.88672),
			new L.LatLng(24.76678, -16.08398),
			new L.LatLng(22.02455, -18.01758),
			new L.LatLng(19.31114, -14.32617),
			new L.LatLng(12.89749, -13.18359),
			new L.LatLng(12.21118, -10.19531),
			new L.LatLng(14.68988, -7.20703),
			new L.LatLng(17.56025, -6.76758),
			new L.LatLng(20.38583, 7.29492),
			new L.LatLng(22.106, 8.08594),
			new L.LatLng(21.69827, 11.60156),
			new L.LatLng(20.63278, 11.86523),
			new L.LatLng(21.20746, 14.85352),
			new L.LatLng(19.72534, 15.73242),
			new L.LatLng(21.94305, 24.16992),
			new L.LatLng(19.39407, 21.62109),
			new L.LatLng(17.39258, 22.06055),
			new L.LatLng(16.29905, 24.52148),
			new L.LatLng(14.26438, 25.40039),
			new L.LatLng(11.69527, 24.78516),
			new L.LatLng(10.66061, 26.19141),
			new L.LatLng(5.44102, 28.03711),
			new L.LatLng(7.36247, 31.99219),
			new L.LatLng(10.57422, 33.92578),
			new L.LatLng(12.98315, 34.89258),
			new L.LatLng(11.86735, 37.26563),
			new L.LatLng(14.34955, 36.03516),
			new L.LatLng(17.64402, 39.375),
			new L.LatLng(13.32548, 39.19922)

			],{fill: true,fillOpacity:.4,color:'#F5F6F7'})

var RohanPoly = L.polygon([
	new L.LatLng(37.37016, 46.75781),
	new L.LatLng(37.92687, 49.30664),
	new L.LatLng(42.29356, 55.19531),
	new L.LatLng(43.06889, 51.50391),
	new L.LatLng(44.71551, 54.58008),
	new L.LatLng(44.90258, 57.12891),
	new L.LatLng(46.86019, 56.77734),
	new L.LatLng(47.27923, 56.42578),
	new L.LatLng(48.22467, 56.60156),
	new L.LatLng(48.9225, 58.00781),
	new L.LatLng(49.49667, 57.74414),
	new L.LatLng(50.12058, 58.88672),
	new L.LatLng(52.10651, 58.79883),
	new L.LatLng(52.69636, 58.0957),
	new L.LatLng(53.33087, 58.35937),
	new L.LatLng(54.52108, 54.05273),
	new L.LatLng(55.37911, 54.05273),
	new L.LatLng(56.12106, 55.72266),
	new L.LatLng(56.80088, 55.72266),
	new L.LatLng(57.08852, 54.31641),
	new L.LatLng(57.70415, 53.87695),
	new L.LatLng(56.99288, 48.86719),
	new L.LatLng(57.42129, 47.28516),
	new L.LatLng(58.7682, 46.75781),
	new L.LatLng(59.48973, 48.60352),
	new L.LatLng(59.933, 47.54883),
	new L.LatLng(60.19616, 41.39648),
	new L.LatLng(59.80063, 38.75977),
	new L.LatLng(57.46859, 39.02344),
	new L.LatLng(56.02295, 38.32031),
	new L.LatLng(53.17312, 36.29883),
	new L.LatLng(50.95843, 30.05859),
	new L.LatLng(50.62507, 27.24609),
	new L.LatLng(51.72703, 21.44531),
	new L.LatLng(53.27835, 18.80859),
	new L.LatLng(53.43572, 16.17188),
	new L.LatLng(50.90303, 15.11719),
	new L.LatLng(49.21042, 12.2168),
	new L.LatLng(49.03787, 10.10742),
	new L.LatLng(48.80686, 9.49219),
	new L.LatLng(48.9225, 4.39453),
	new L.LatLng(47.98992, 2.8125),
	new L.LatLng(47.81315, 1.75781),
	new L.LatLng(49.49667, -4.30664),
	new L.LatLng(48.80686, -6.15234),
	new L.LatLng(46.43786, -0.79102),
	new L.LatLng(46.37725, 2.72461),
	new L.LatLng(45.15105, 4.83398),
	new L.LatLng(44.90258, 6.94336),
	new L.LatLng(44.40239, 7.29492),
	new L.LatLng(44.08759, 9.14063),
	new L.LatLng(45.213, 12.91992),
	new L.LatLng(46.49839, 12.91992),
	new L.LatLng(46.92026, 13.88672),
	new L.LatLng(46.80006, 14.67773),
	new L.LatLng(45.8288, 15.55664),
	new L.LatLng(43.38908, 15.46875),
	new L.LatLng(43.00465, 24.87305),
	new L.LatLng(38.89103, 34.27734),
	new L.LatLng(39.3003, 39.19922)

	],{fillOpacity:.4,color:'#4ca20b'})

var MordorPoly = L.polygon([
	new L.LatLng(44.15068, 75.32227),
	new L.LatLng(44.02442, 76.11328),
	new L.LatLng(43.06889, 77.34375),
	new L.LatLng(41.90228, 80.68359),
	new L.LatLng(40.91351, 86.04492),
	new L.LatLng(40.9799, 90.35156),
	new L.LatLng(41.57436, 94.92188),
	new L.LatLng(41.44273, 108.80859),
	new L.LatLng(41.70573, 111.00586),
	new L.LatLng(41.04622, 112.41211),
	new L.LatLng(39.50404, 112.14844),
	new L.LatLng(37.57941, 111.09375),
	new L.LatLng(31.95216, 99.4043),
	new L.LatLng(26.03704, 85.60547),
	new L.LatLng(23.40276, 80.94727),
	new L.LatLng(22.67485, 79.36523),
	new L.LatLng(22.35008, 77.51953),
	new L.LatLng(25.95804, 75.67383),
	new L.LatLng(28.22697, 73.65234),
	new L.LatLng(33.21112, 73.82813),
	new L.LatLng(34.45222, 72.77344),
	new L.LatLng(42.22852, 71.10352),
	new L.LatLng(43.26121, 71.54297),
	new L.LatLng(44.08759, 73.30078)

	],{fillOpacity:.4,color:"#c01a11"})

var DolGuldurPoly = L.polygon([
	new L.LatLng(62.59334, 54.05273),
	new L.LatLng(63.89873, 55.72266),
	new L.LatLng(64.28276, 57.12891),
	new L.LatLng(64.43489, 60.73242),
	new L.LatLng(63.97596, 62.31445),
	new L.LatLng(63.07487, 62.8418),
	new L.LatLng(61.52269, 62.49023),
	new L.LatLng(60.7162, 60.99609),
	new L.LatLng(60.97311, 55.98633)

	],{fillOpacity:.4,color:'#9E0303'})

var NorthernMistyMountainsPoly = L.polygon([
	new L.LatLng(75.88809, 25.22461),
	new L.LatLng(76.47577, 28.03711),
	new L.LatLng(76.92061, 28.65234),
	new L.LatLng(77.80477, 26.36719),
	new L.LatLng(78.17058, 26.63086),
	new L.LatLng(78.56049, 25.22461),
	new L.LatLng(78.42019, 24.16992),
	new L.LatLng(78.83607, 20.21484),
	new L.LatLng(78.7335, 18.63281),
	new L.LatLng(78.50808, 17.22656),
	new L.LatLng(78.33165, 17.31445),
	new L.LatLng(77.78619, 19.77539),
	new L.LatLng(77.44694, 20.21484),
	new L.LatLng(77.11803, 18.98438),
	new L.LatLng(77.15716, 15.0293),
	new L.LatLng(77.3895, 11.60156),
	new L.LatLng(77.21564, 10.10742),
	new L.LatLng(76.7404, 10.01953),
	new L.LatLng(75.82366, 12.04102),
	new L.LatLng(75.71563, 13.71094),
	new L.LatLng(75.69393, 19.42383),
	new L.LatLng(75.47513, 19.86328),
	new L.LatLng(75.84517, 25.57617)

	],{fillOpacity:.4,color:"#c01a11"})

var NorthernBlueMountainsPoly = L.polygon([
	new L.LatLng(72.42227, -63.19336),
	new L.LatLng(72.39571, -59.0625),
	new L.LatLng(72.5545, -56.95312),
	new L.LatLng(72.79009, -52.91016),
	new L.LatLng(73.09941, -54.75586),
	new L.LatLng(73.20132, -56.77734),
	new L.LatLng(73.87372, -56.60156),
	new L.LatLng(74.35483, -59.32617),
	new L.LatLng(74.30735, -61.43555),
	new L.LatLng(74.21198, -63.63281),
	new L.LatLng(73.5284, -61.875),
	new L.LatLng(72.8938, -63.10547)

	],{fillOpacity:.4,color:'#227a93'})

var SouthernBlueMountainsPoly = L.polygon([
	new L.LatLng(70.931, -51.94336),
	new L.LatLng(70.40735, -54.05273),
	new L.LatLng(70.1702, -56.16211),
	new L.LatLng(69.74855, -54.66797),
	new L.LatLng(69.1938, -56.95312),
	new L.LatLng(68.59249, -56.16211),
	new L.LatLng(68.62454, -54.75586),
	new L.LatLng(68.59249, -52.64648),
	new L.LatLng(68.87936, -50.44922),
	new L.LatLng(69.1938, -50.09766),
	new L.LatLng(69.28726, -48.42773),
	new L.LatLng(69.59589, -50.80078),
	new L.LatLng(69.80931, -51.50391),
	new L.LatLng(70.08056, -51.41602),
	new L.LatLng(70.14036, -50.71289),
	new L.LatLng(70.19999, -47.02148),
	new L.LatLng(70.5249, -48.7793),
	new L.LatLng(70.55418, -50.71289)

	],{fillOpacity:.4,color:'#227a93'})

var IronHillsPoly = L.polygon([
	new L.LatLng(75.65043, 93.25195),
	new L.LatLng(75.95224, 94.57031),
	new L.LatLng(76.05851, 97.03125),
	new L.LatLng(76.14296, 101.16211),
	new L.LatLng(76.185, 109.24805),
	new L.LatLng(75.88809, 117.42188),
	new L.LatLng(75.80212, 118.38867),
	new L.LatLng(75.58494, 118.56445),
	new L.LatLng(75.36451, 117.24609),
	new L.LatLng(74.98218, 112.85156),
	new L.LatLng(75.11822, 108.28125),
	new L.LatLng(74.79891, 107.22656),
	new L.LatLng(74.75275, 106.61133),
	new L.LatLng(75.05035, 105.82031),
	new L.LatLng(74.86789, 100.45898),
	new L.LatLng(74.89082, 98.96484),
	new L.LatLng(75.02766, 96.15234),
	new L.LatLng(75.49716, 93.16406)

	],{fillOpacity:.4,color:'#CD7F32'})

var MoriaPoly = L.polygon([
	new L.LatLng(67.74276, 14.85352),
	new L.LatLng(68.04046, 15.46875),
	new L.LatLng(68.39918, 18.01758),
	new L.LatLng(68.26939, 22.76367),
	new L.LatLng(68.04046, 23.55469),
	new L.LatLng(67.50857, 24.16992),
	new L.LatLng(65.83878, 25.3125),
	new L.LatLng(65.29347, 25.83984),
	new L.LatLng(64.96077, 25.48828),
	new L.LatLng(64.62388, 23.73047),
	new L.LatLng(64.58618, 22.14844),
	new L.LatLng(63.93737, 22.67578),
	new L.LatLng(63.50938, 21.26953),
	new L.LatLng(62.99516, 20.30273),
	new L.LatLng(63.31268, 17.75391),
	new L.LatLng(63.89873, 17.13867),
	new L.LatLng(64.16811, 15.82031),
	new L.LatLng(64.58618, 15.73242),
	new L.LatLng(65.10915, 17.66602),
	new L.LatLng(67.03316, 17.92969)
	
	],{fillOpacity:.4,color:'#c0111a'})

var UmbarPoly = L.polygon([
	new L.LatLng(-28.38174, 30.49805),
	new L.LatLng(-29.07538, 28.38867),
	new L.LatLng(-28.1495, 26.01563),
	new L.LatLng(-29.38218, 24.3457),
	new L.LatLng(-28.99853, 21.62109),
	new L.LatLng(-31.50363, 20.6543),
	new L.LatLng(-35.53223, 17.75391),
	new L.LatLng(-35.96022, 18.7207),
	new L.LatLng(-33.35806, 21.97266),
	new L.LatLng(-32.02671, 22.14844),
	new L.LatLng(-33.21112, 23.20313),
	new L.LatLng(-33.06392, 28.21289),
	new L.LatLng(-32.17561, 34.10156),
	new L.LatLng(-33.65121, 33.22266),
	new L.LatLng(-34.74161, 29.35547),
	new L.LatLng(-35.38905, 31.11328),
	new L.LatLng(-34.45222, 34.27734),
	new L.LatLng(-34.958, 36.5625),
	new L.LatLng(-35.81781, 37.5293),
	new L.LatLng(-36.17336, 35.77148),
	new L.LatLng(-36.87962, 36.47461),
	new L.LatLng(-38.47939, 30.41016),
	new L.LatLng(-39.57182, 33.83789),
	new L.LatLng(-37.57941, 40.42969),
	new L.LatLng(-36.17336, 40.60547),
	new L.LatLng(-33.43144, 39.28711),
	new L.LatLng(-30.90222, 36.91406)

	],{fill: true,fillOpacity:.4,color:'#c0111a'})

  var HarondorPoly = L.polygon([
  	new L.LatLng(4.82826, 64.24805),//north
  	new L.LatLng(4.82826, 66.44531),
  	new L.LatLng(4.03962, 67.85156),
  	new L.LatLng(0.26367, 69.69727),//east
  	new L.LatLng(-0.08789, 68.99414),
  	new L.LatLng(-0.87887, 68.81836),
  	new L.LatLng(-1.31824, 67.85156),
  	new L.LatLng(-3.60114, 67.41211),
  	new L.LatLng(-4.21494, 68.02734),
  	new L.LatLng(-6.5773, 64.95117),
  	new L.LatLng(-7.62389, 65.21484),
  	new L.LatLng(-8.05923, 66.18164),
  	new L.LatLng(-10.83331, 64.51172),
  	new L.LatLng(-12.64034, 65.03906),
  	new L.LatLng(-14.51978, 64.16016),
  	new L.LatLng(-15.28419, 64.95117),
  	new L.LatLng(-16.55196, 64.33594),//south
  	new L.LatLng(-17.56025, 63.7207),
  	new L.LatLng(-17.30869, 60.64453),
  	new L.LatLng(-15.96133, 59.41406),
  	new L.LatLng(-14.26438, 59.58984),
  	new L.LatLng(-13.32548, 58.44727),
  	new L.LatLng(-10.0554, 53.61328),
  	new L.LatLng(-7.71099, 52.99805),
  	new L.LatLng(-4.74068, 50.80078),
  	new L.LatLng(-0.17578, 50.44922),//west
  	new L.LatLng(1.40611, 52.64648),
  	new L.LatLng(3.33795, 59.94141)

  	],{fillOpacity:.4,color:'#B5A019'})

  var HaradwaithPoly = L.polygon([
  	new L.LatLng(-7.9722, 82.44141),//north
  	new L.LatLng(-7.9722, 84.72656),
  	new L.LatLng(-9.36235, 88.24219),
  	new L.LatLng(-11.52309, 94.57031),
  	new L.LatLng(-13.9234, 96.24023),
  	new L.LatLng(-17.22476, 97.99805),//east
  	new L.LatLng(-19.64259, 96.50391),
  	new L.LatLng(-22.59373, 95.27344),
  	new L.LatLng(-23.80545, 92.63672),//south
  	new L.LatLng(-21.04349, 77.34375),
  	new L.LatLng(-17.81146, 63.98438),//west
  	new L.LatLng(-15.28419, 65.30273),
  	new L.LatLng(-15.11455, 65.21484),
  	new L.LatLng(-14.26438, 64.6875),
  	new L.LatLng(-12.64034, 65.39063),
  	new L.LatLng(-11.86735, 72.24609),
  	new L.LatLng(-9.36235, 76.9043)

  	],{fillOpacity:.4,color:'#ca7823'})

  var LurmsakunPoly = L.polygon([
  	new L.LatLng(-26.98083, 103.0957),
  	new L.LatLng(-26.27371, 106.96289),
  	new L.LatLng(-23.72501, 112.06055),
  	new L.LatLng(-22.26876, 111.26953),
  	new L.LatLng(-14.0087, 111.70898),
  	new L.LatLng(-12.98315, 112.58789),
  	new L.LatLng(-12.72608, 113.73047),
  	new L.LatLng(-12.29707, 119.17969),
  	new L.LatLng(-14.26438, 123.75),
  	new L.LatLng(-18.14585, 129.11133),
  	new L.LatLng(-20.30342, 129.81445),
  	new L.LatLng(-24.52713, 130.69336),
  	new L.LatLng(-26.90248, 128.67188),
  	new L.LatLng(-30.52441, 122.51953),
  	new L.LatLng(-32.24997, 118.30078),
  	new L.LatLng(-31.42866, 110.56641),
  	new L.LatLng(-29.45873, 103.79883),
  	new L.LatLng(-28.38174, 102.83203)

  	],{fillOpacity:.4,color:'#808080'})

  var DunlandPoly = L.polygon([
	new L.LatLng(49.72448, -4.21875),
	new L.LatLng(48.16609, 1.66992),
	new L.LatLng(49.09545, 4.04297),//south
	new L.LatLng(49.15297, 9.49219),
	new L.LatLng(50.1769, 11.33789),//east
	new L.LatLng(51.01375, 12.56836),
	new L.LatLng(51.72703, 12.48047),
	new L.LatLng(52.21434, 11.42578),
	new L.LatLng(53.90434, 7.73437),
	new L.LatLng(56.17002, 8.4375),
	new L.LatLng(57.08852, 5.36133),
	new L.LatLng(58.95001, 10.63477),
	new L.LatLng(61.56457, 15.29297),
	new L.LatLng(62.71446, 15.0293),
	new L.LatLng(63.23363, 9.22852),
	new L.LatLng(62.79493, 6.41602),
	new L.LatLng(62.79493, 3.7793),
	new L.LatLng(63.27318, 3.51563),
	new L.LatLng(63.78249, 0.17578),//north
	new L.LatLng(63.66576, -1.40625),
	new L.LatLng(63.31268, -2.02148),
	new L.LatLng(62.83509, -2.02148),
	new L.LatLng(61.56457, -0.9668),
	new L.LatLng(57.51582, -1.49414),
	new L.LatLng(51.94426, -4.6582)//west

  	],{fillOpacity:.4,color:'#a0561f'})

  var DorwinionPoly = L.polygon([
  	new L.LatLng(59.57885, 115.57617),//south
  	new L.LatLng(59.7564, 116.80664),
  	new L.LatLng(61.05829, 116.98242),
  	new L.LatLng(61.43877, 117.86133),
  	new L.LatLng(61.18562, 120.84961),
  	new L.LatLng(62.99516, 123.13477),//east
  	new L.LatLng(63.43086, 121.9043),
  	new L.LatLng(63.93737, 120.14648),
  	new L.LatLng(64.09141, 113.11523),//north
  	new L.LatLng(63.35213, 109.86328),
  	new L.LatLng(62.55286, 109.42383),//west
  	new L.LatLng(62.02153, 109.6875),
  	new L.LatLng(61.18562, 113.20313),
  	new L.LatLng(60.7162, 114.25781),
  	new L.LatLng(60.10867, 114.16992)

  	],{fillOpacity:.4,color:'#722f37'})

  var BreelandPoly = L.polygon([
  	new L.LatLng(71.49704, -15.11719),
  	new L.LatLng(71.46912, -10.63477),
  	new L.LatLng(71.77394, -6.85547),//south
  	new L.LatLng(72.15489, -6.50391),//east
  	new L.LatLng(72.63337, -6.85547),
  	new L.LatLng(73.20132, -8.61328),
  	new L.LatLng(73.62779, -10.45898),
  	new L.LatLng(73.89811, -12.2168),//north
  	new L.LatLng(73.87372, -17.66602),
  	new L.LatLng(73.42842, -19.77539),
  	new L.LatLng(72.738, -19.95117),//west
  	new L.LatLng(71.93816, -18.45703),
  	new L.LatLng(71.52491, -16.875)

  	],{fillOpacity:.4,color:'#2c3695'})

  var AnglePoly = L.polygon([
  	new L.LatLng(67.77603, 6.5918),//south
  	new L.LatLng(70.55418, 7.82227),
  	new L.LatLng(70.931, 9.58008),
  	new L.LatLng(70.931, 13.53516),
  	new L.LatLng(70.61261, 15.73242),
  	new L.LatLng(70.37785, 15.9082),
  	new L.LatLng(70.22974, 15.29297),
  	new L.LatLng(69.77895, 14.0625),
  	new L.LatLng(69.16256, 11.60156),
  	new L.LatLng(68.52823, 10.19531)

  	],{fillOpacity:.4,color:'#2c3695'})

  var ShirePoly = L.polygon([
  	new L. LatLng(73.04824, -35.06836),
  	new L. LatLng(71.93816, -35.15625),//west
  	new L. LatLng(71.13099, -33.48633),
  	new L. LatLng(70.87349, -31.20117),//south
  	new L. LatLng(70.931, -25.48828),
  	new L. LatLng(71.30079, -24.43359),
  	new L. LatLng(71.41318, -23.90625),//east
  	new L. LatLng(72.39571, -24.3457),
  	new L. LatLng(73.04824, -26.89453),
  	new L. LatLng(73.80032, -30.05859),//north
  	new L. LatLng(73.67726, -33.48633)

  	],{fillOpacity:.4,color:'#b727e2'})

  var LothlorienPoly = L.polygon([
  	new L.LatLng(62.18601, 26.71875),
  	new L.LatLng(61.56457, 27.59766),
  	new L.LatLng(61.05829, 31.37695),
  	new L.LatLng(60.50053, 32.69531),
  	new L.LatLng(60.41385, 36.29883),
  	new L.LatLng(59.97701, 38.58398),
  	new L.LatLng(60.45722, 39.375),
  	new L.LatLng(62.75473, 39.81445),
  	new L.LatLng(63.54855, 38.84766),
  	new L.LatLng(64.73664, 33.66211),
  	new L.LatLng(64.47279, 30.58594),
  	new L.LatLng(64.24459, 29.26758),
  	new L.LatLng(62.83509, 27.07031)

  	],{fillOpacity:.4,color:'#FF69B4'})

  var DalePoly = L.polygon([
  	new L.LatLng(71.91089, 84.55078),
  	new L.LatLng(72.47528, 83.14453),
  	new L.LatLng(73.40334, 82.35352),
  	new L.LatLng(74.23588, 82.17773),
  	new L.LatLng(75.00494, 83.14453),
  	new L.LatLng(75.14078, 84.11133),
  	new L.LatLng(75.34228, 88.76953),
  	new L.LatLng(74.89082, 94.83398),
  	new L.LatLng(74.56674, 96.32813),
  	new L.LatLng(73.84929, 96.5918),
  	new L.LatLng(73.50346, 94.92188),
  	new L.LatLng(72.52813, 92.19727),
  	new L.LatLng(72.1818, 89.12109)

  	],{fillOpacity:.4,color:'#3BB9FF'})

  var LindonPoly = L.polygon([
  	new L.LatLng(73.12495, -50.00977),
  	new L.LatLng(72.738, -51.06445),
  	new L.LatLng(72.42227, -51.24023),
  	new L.LatLng(72.1818, -51.94336),
  	new L.LatLng(71.69129, -54.66797),
  	new L.LatLng(71.69129, -55.81055),
  	new L.LatLng(71.52491, -56.60156),
  	new L.LatLng(71.35707, -59.76562),
  	new L.LatLng(71.41318, -61.78711),
  	new L.LatLng(71.63599, -62.8418),
  	new L.LatLng(71.44117, -61.78711),
  	new L.LatLng(71.49704, -65.12695),
  	new L.LatLng(71.66366, -65.39062),
  	new L.LatLng(72.20868, -68.29102),
  	new L.LatLng(72.20868, -69.3457),
  	new L.LatLng(72.5545, -72.86133),
  	new L.LatLng(72.81607, -74.0918),
  	new L.LatLng(73.07384, -74.26758),
  	new L.LatLng(73.30262, -73.56445),
  	new L.LatLng(73.42842, -72.77344),
  	new L.LatLng(72.99691, -67.93945),
  	new L.LatLng(72.3691, -63.28125),
  	new L.LatLng(72.31579, -58.88672),
  	new L.LatLng(72.738, -52.64648),
  	new L.LatLng(73.12495, -50.00977),
  	new L.LatLng(72.28907, -48.86719),
  	new L.LatLng(71.41318, -50.18555),
  	new L.LatLng(71.04553, -52.11914),
  	new L.LatLng(70.5249, -54.22852),
  	new L.LatLng(70.22974, -56.60156),
  	new L.LatLng(69.71811, -56.77734),
  	new L.LatLng(68.911, -60.46875),
  	new L.LatLng(68.75231, -64.33594),
  	new L.LatLng(69.86989, -65.30273),
  	new L.LatLng(70.08056, -63.63281),
  	new L.LatLng(69.86989, -63.45703),
  	new L.LatLng(69.47297, -64.24805),
  	new L.LatLng(69.25615, -63.80859),
  	new L.LatLng(69.59589, -62.66602),
  	new L.LatLng(69.65709, -61.69922),
  	new L.LatLng(69.83962, -61.34766),
  	new L.LatLng(69.99053, -62.13867),
  	new L.LatLng(70.40735, -62.22656),
  	new L.LatLng(70.55418, -61.78711),
  	new L.LatLng(70.25945, -60.0293),
  	new L.LatLng(70.34832, -59.15039),
  	new L.LatLng(70.02059, -58.35937),
  	new L.LatLng(70.11048, -57.48047),
  	new L.LatLng(70.5249, -56.51367),
  	new L.LatLng(70.84467, -55.37109),
  	new L.LatLng(70.87349, -54.05273),
  	new L.LatLng(71.41318, -52.29492),
  	new L.LatLng(72.23551, -50.00977)

  	],{fillOpacity:.4,color:'#5EFB6E'})

  var WoodlandRealmPoly = L.polygon([
  	new L.LatLng(72.23551, 82.70508),
  	new L.LatLng(71.69129, 81.73828),
  	new L.LatLng(71.66366, 79.98047),
  	new L.LatLng(71.35707, 74.26758),
  	new L.LatLng(71.74643, 57.48047),
  	new L.LatLng(72.23551, 56.16211),
  	new L.LatLng(76.185, 53.61328),
  	new L.LatLng(77.33181, 55.2832),
  	new L.LatLng(77.82332, 58.79883),
  	new L.LatLng(77.52312, 71.36719),
  	new L.LatLng(75.65043, 79.98047),
  	new L.LatLng(74.28356, 82.00195)

  	],{fillOpacity:.4,color:'#254117'});
