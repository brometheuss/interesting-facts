function pretraga(){
	
	if(window.XMLHttpRequest){
		var xmlhttp = new XMLHttpRequest();
	}
	else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.open("GET","cities.xml",false);
	xmlhttp.send();
	var xmlDoc = xmlhttp.responseXML;
	dohvatiPodatke(xmlDoc);
}
function dohvatiPodatke(xmlDoc){
	var search = document.getElementById('tbSearch');
	var tekst = "<table border='1px'><tr><th>Name</th><th>Description</th><th>Fact</th><th>Population</th></tr>";
	
	var city=xmlDoc.getElementsByTagName('city');
	
	for(var i = 0;i < city.length;i++){

	 var nameCity = city[i].getElementsByTagName('name')[0].childNodes[0].nodeValue;
	 var descCity = city[i].getElementsByTagName('description')[0].childNodes[0].nodeValue;
	 var factCity = city[i].getElementsByTagName('fact')[0].childNodes[0].nodeValue;
	 var populationCity = city[i].getElementsByTagName('population')[0].childNodes[0].nodeValue;

		if(search.value.trim() == nameCity.trim()){

		 tekst += "<tr><td>"+nameCity+"</td><td>"+descCity+"</td><td>"+factCity+"</td><td>"+populationCity+"</td></tr>";
		}
	}

	tekst += "</table>"
	document.getElementById('searchResult').innerHTML = tekst;
}
