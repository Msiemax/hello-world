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