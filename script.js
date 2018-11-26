
//Home arrow
$("#arrow").click(function () { 
	$('html,body').animate({ 
		scrollTop: $("main").offset().top 
	},
		1200);
});


//About me arrow
$(document).ready(function(){
	$("#arrow2").click(function(){
		$('html ,body').animate({scrollTop : 0},1200);
	});
});

//Gallery arrow
$("#arrowww").click(function () { 
	$('html,body').animate({ 
		scrollTop: $("section").offset().top 
	},
		1200);
});


//navigation
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

	var currentScrollpos = window.pageYOffset;
	if(prevScrollpos > currentScrollpos) {
		document.getElementById("navv").style.top = "0";

	}	else {
		document.getElementById("navv").style.top = "-100px";
	}

	prevScrollpos = currentScrollpos;
}