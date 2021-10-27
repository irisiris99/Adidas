'use strict'

function calcHeight() {
	var the_height =
		document.getElementById('iframe').contentWindow.
			document.body.scrollHeight;

	document.getElementById('iframe').height =
		the_height;
	document.getElementById('iframe').style.overflow = "hidden";
}
