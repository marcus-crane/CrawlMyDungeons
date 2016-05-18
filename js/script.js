setHealth(4);

var prompt = ">> ";
var br = "<br />";
var charName = "";

function resetLog() {
	$('#output').empty();
}

function logOutput(text) {
	$('#output').append(text);
}

function startGame() {
	resetLog();
	logOutput(`${prompt} Please enter a name for your character${br}`);
	logOutput(`<input id='charName' placeholder='Character name here'>${br}<button onClick='gameStarted()'>Submit</button>`);
}

function gameStarted() {
	charName = $("#charName").val();
	resetLog();
	logOutput(`Welcome ${charName}, to my little dungeon crawler.${br}Obviously, I'm still working on the content...${br}Check back later to get further in the adventure!`);
}

function outputName() {
	return charName;
}

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

// $('#output').append(`${prompt} The goblin swings at you.${br}`);
// $('#output').append("Ouch, you lost a heart!");