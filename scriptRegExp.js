function checkForm(){
	
	var firstName = document.getElementById('tbName');
	var lastName = document.getElementById('tbLastName');
	var pass = document.getElementById('tbPass');
	var passConfirm = document.getElementById('tbPass2');
	var email = document.getElementById('tbEmail');
	var gender = document.regFormm.rbGender;
	
	var information = new Array();
	var	errors = new Array();
	
	var reFirstName = /^[A-z]{1,20}\s*$/;
	var reLastName = /^[A-z]{1,20}\s*$/;
	var rePass = /^[A-z]{6,}[0-9]{1,}$/;
	var reEmail = /^[a-z0-9=+-_&^%]{3,20}@([a-z]{2,8}\.[a-z]{2,6}|[a-z]{2,8}\.[a-z]{2,4}\.[a-z]{2,4})$/;
	
	//First name check
	if(firstName.value.match(reFirstName)){
		document.getElementById('spanName').innerHTML = "Good!";
		document.getElementById('spanName').style.color = "#00FF00";
	}
	else{
		document.getElementById('spanName').innerHTML = "A-z characters allowed";
		document.getElementById('spanName').style.color = "#FF0000";
	}
	
	//Last name check
	if(lastName.value.match(reLastName)){
		document.getElementById('spanLastName').innerHTML = "Looks OK!";
		document.getElementById('spanLastName').style.color = "#00FF00";
	}
	else{
		document.getElementById('spanLastName').innerHTML = "A-z characters allowed";
		document.getElementById('spanLastName').style.color = "#FF0000";
	}
	
	//Password check
	if(pass.value.match(rePass)){
		document.getElementById('spanPass').innerHTML = "Nice!";
		document.getElementById('spanPass').style.color = "#00FF00";
	}
	else{
		
		document.getElementById('spanPass').innerHTML = "Must have min 6 letters and a digit";
		document.getElementById('spanPass').style.color = "#FF0000";
	}
	
	//Password again
	
		if(pass.value == passConfirm.value){
			document.getElementById('spanConfirmPass').innerHTML = "Passwords match!";
			document.getElementById('spanConfirmPass').style.color = "#00FF00";
		}
		else{
			document.getElementById('spanConfirmPass').innerHTML = "Passwords don't match!";
			document.getElementById('spanConfirmPass').style.color = "#FF0000";
		}
	
	//Email
	
	if(email.value.match(reEmail)){
		document.getElementById('spanEmail').innerHTML = "Nice!";
		document.getElementById('spanEmail').style.color = "#00FF00";
	}
	else{
		document.getElementById('spanEmail').innerHTML = "Invalid email adress";
		document.getElementById('spanEmail').style.color = "#FF0000";
	}
	
	//Gender
	var genderStatus = "";
	for(var i = 0; i < gender.length; i++ ){
		if(gender[i].checked){
			genderStatus = gender[i].value;
		}
	}
	
	if(genderStatus == ""){
		document.getElementById('spanGender').innerHTML = "Select your gender.";
		document.getElementById('spanGender').style.color = "#FF0000";
	}
	else{
		document.getElementById('spanGender').innerHTML = "You're good to go!";
		document.getElementById('spanGender').style.color = "#00FF00";
	}
	
	//birth date check
	var ddlDay = document.regFormm.ddDay.options[document.regFormm.ddDay.selectedIndex];
	var ddlMonth = document.regFormm.ddMonth.options[document.regFormm.ddMonth.selectedIndex];
	
	if(ddlDay.value == "errorValue" && ddlMonth.value == "errorValue"){
		document.getElementById('spanBirthDate').innerHTML = "Select your birth date";
		document.getElementById('spanBirthDate').style.color = "#FF0000";
	}
	else{
		document.getElementById('spanBirthDate').innerHTML = "Yay!";
		document.getElementById('spanBirthDate').style.color = "#00FF00";
	}
}

function checkSurvey(){
	
	var age = document.surveyLeft.rbAge;
	var country = document.surveyLeft.rbCountry;
	var pleaseWork = document.surveyRight.rbRating;
	var countryWish = document.getElementById('tbCountryWish');
	
	var ageChoice = "";
	for(var i = 0; i < age.length; i++){
		if(age[i].checked){
			ageChoice = age[i].value;
		}
	}
	
	var countryChoice = "";
	for(var i = 0; i < country.length; i++){
		if(country[i].checked){
			countryChoice = country[i].value;
		}
	}
	
	var choice = "";
	for(var j = 0; j < pleaseWork.length; j++){
		if(pleaseWork[j].checked){
			choice = pleaseWork[j].value;
		}
	}
	
	if(ageChoice == "" || countryChoice == "" || countryWish.value == "" || choice == ""){
		document.getElementById('spanSurvey').innerHTML = "Please complete first!";
		document.getElementById('spanSurvey').style.color = "#FF0000";
	}
	else{
		document.getElementById('spanSurvey').innerHTML = "Thank you for your time!";
		document.getElementById('spanSurvey').style.color = "#00FF00";
	}
	
	
}
















