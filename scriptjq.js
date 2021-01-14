//SLIDER ~~~
setInterval(function(){
	nextPic(-600)
},5000);

n = 0;
function nextPic(x){
	n = n + x;
	if(n < -1200){
		n = 0;
	}
	if(n > 0){
		n = - 1200;
	}
	$('#middleImg').css('margin-top', n);
}
$(document).ready(function(){
  $('#slideFacts ul').innerfade({
    animationtype: 'slide',
    speed: 2550,
    timeout: 3000,
    type: 'sequence'
  });
});
//SLIDER END ~~~~

$(document).ready(function(){
  $('#spaceFacts ul li').mouseover(function(){
    $(this).addClass('zebraHover');
  });
  $('#spaceFacts ul li').mouseout(function(){
    $(this).removeClass('zebraHover');
  });
});

//HOVER REVIEW BOXES
$(document).ready(function(){
	$('#reviewBox div').mouseover(function(){
		$(this).css({"border-color" : "rgba(246, 131, 25, 0.9)", "border-bottom" : "2px solid rgba(246, 131, 25, 0.9)"}).mouseout(function(){
			$(this).css({"border-color" : "#FFF", "border-bottom" : "2px solid"});
		});
	});
});

//HOVER MAIN MENU ~~~~FADE~~~~
$(document).ready(function(){
	$('#menu li').mouseover(function(){
		$(this).css({"border-color" : "rgba(246, 131, 25, 0.9)", "border-left" : "2px solid #FFF", "border-top" : "1px solid #000"}).mouseout(function(){
			$(this).css({"border-color" : "#0", "border-top" : "1px solid", "border-left" : "0px"});
		});
	});
});
//SUB MENU ~~~~~~
$(document).ready(function(){
	$('#mainMenu li #subMenu li').mouseover(function(){
		$(this).css({"border-color" : "rgba(246, 131, 25, 0.9)", "border-left" : "2px solid #FFF"}).mouseout(function(){
			$(this).css({"border-color" : "red", "border-left" : "0px"});
		});
	});
});

//YEAR DYNAMIC LIST
/*function yearDynamic(){
	
	for(var i=0;i+1929<2017;i++){
		document.regFormm.ddYear.options[i]=new Option(1929+i,1929+i);
	}
		document.regFormm.ddYear.selectedIndex = "firstTxt";
}*/


//DAY DYNAMIC LIST
var numberOfDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

function fillUp(x){
	var month = x.options[x.selectedIndex].value;
		if(month != ""){
			var month1 = parseInt(month);
			document.regFormm.ddDay.options.length = 0;
			for(var i = 0; i < numberOfDays[month1]; i++){
				document.regFormm.ddDay.options[i] = new Option(i + 1);
			}
		}
}














//SURVEY CHECK~~~~~~
/*function completedSurvey(){
	var checkedSolution = 0;
	
	var radioAge = document.surveyLeft.rbAge;
	var radioCountry = document.surveyLeft.rbCountry;
	var visitC = document.getElementById('tbCountryWish');
	var surveyRating = document.surveyRight.rbRating;
	
	for(var i = 0; i < radioAge.length; i++){
		if(radioAge[i].checked){
			checkedSolution = checkedSolution + 1;
		}
	}
	
	for(var i = 0; i < radioCountry.length; i++){
		if(radioCountry[i].checked){
			checkedSolution = checkedSolution + 1;
		}
	}
	
	if(visitC.value.length == 0){
		checkedSolution = checkedSolution + 1;
	}
	
	for(var i = 0; i < surveyRating.length; i++){
		if(surveyRating[i].checked){
			checkedSolution = checkedSolution + 1;
		}
	}
	
	if(checkedSolution == 0){
		alert("desi");
		$('#submitDiv').removeClass('hideThanks');
		$('#submitDiv').fadeIn('slow')
	}
	else{
		$()
		$('#submitDiv').removeClass('hideThanks');
	}
}*/

//Drop down menu
$(document).ready(function(){
  $('#menu li ul').css({
    display: "none",
    left: "auto"
  });
  $('#menu li').hover(function() {
    $(this)
      .find('ul')
      .stop(true, true)
      .slideDown('fast');
  }, function() {
    $(this)
      .find('ul')
      .stop(true,true)
      .fadeOut('fast');
  });
});


// building select nav for mobile width only
$(function(){
	// building select menu
	$('<select />').appendTo('nav');

	// building an option for select menu
	$('<option />', {
		'selected': 'selected',
		'value' : '',
		'text': 'Choise Page...'
	}).appendTo('nav select');

	$('nav ul li a').each(function(){
		var target = $(this);

		$('<option />', {
			'value' : target.attr('href'),
			'text': target.text()
		}).appendTo('nav select');

	});

	// on clicking on link
	$('nav select').on('change',function(){
		window.location = $(this).find('option:selected').val();
	});
});
//end

// show and hide sub menu
$(function(){
	$('nav ul li').hover(
		function () {
			//show its submenu
			$('ul', this).slideDown(150);
		}, 
		function () {
			//hide its submenu
			$('ul', this).slideUp(150);			
		}
	);
});
//end
$(function(){
	// building select menu
	$('<select />').appendTo('nav');

	// building an option for select menu
	$('<option />', {
		'selected': 'selected',
		'value' : '',
		'text': 'Choise Page...'
	}).appendTo('nav select');

	$('nav ul li a').each(function(){
		var target = $(this);

		$('<option />', {
			'value' : target.attr('href'),
			'text': target.text()
		}).appendTo('nav select');

	});

	// on clicking on link
	$('nav select').on('change',function(){
		window.location = $(this).find('option:selected').val();
	});
});

// show and hide sub menu
$(function(){
	$('nav ul li').hover(
		function () {
			//show its submenu
			$('ul', this).slideDown(150);
		}, 
		function () {
			//hide its submenu
			$('ul', this).slideUp(150);			
		}
	);
});





