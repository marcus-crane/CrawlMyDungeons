setHealth(4);

function halfHearted(state) {
	if (state === true) {
		var hpValue = $('td').length - 1;
		$('td')[hpValue].className = "blink";
	} else {
		hpValue = $('td').length - 1;
		setHealth(hpValue);
	}
}

function halfHeartedCheck() {
	if ($('.blink').length !== 0) {
		return true;
	} else {
		return false;
	}
}

function hit() {
	if (halfHeartedCheck() === true) {
		halfHearted(false)
	} else if (halfHeartedCheck() === false) {
		halfHearted(true)
	}
}

function setHealth(num) {
	$("tr").empty();
	for (var i = 0; i < num; i++) {
		$("tr").append("<td></td>");
	}
}