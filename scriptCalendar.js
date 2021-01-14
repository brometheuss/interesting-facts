var days = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

function fillUp(chosenMonth){
	var month = chosenMonth.options[chosenMonth.selectedIndex].value;
		if(month != ""){
			var month1 = parseInt(month);
			document.regFormm.day.options.length = 0;
			for(var i = 0; i < days[mesec1]; i++){
				document.regFormm.day.options[i] = new Option(i + 1);
			}
		}
}