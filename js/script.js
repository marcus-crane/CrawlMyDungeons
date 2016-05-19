var game = {
	prompt: ">> ",
	br: "<br />",
	resetLog: function() {
		$('#output').empty();
	},
	logOutput: function(text) {
		$('#output').append(text);
	},
	logProperties: function(operator, property) {
		$('#output').css(`${property}`, `${operator}=25`);
	},
	setHealth: function(num) {
		$("tr").empty();
		for (var i = 0; i < num; i++) {
			$("tr").append("<td></td>");
		}
	},
	halfHearted: function(state) {
		if (state === true) {
			hpValue = $('td').length - 1;
			$('td')[hpValue].className = "blink";
		} else {
			hpValue = $('td').length - 1;
			if (hpValue === 0) {
				$("tr").empty();
				$("tr").append("You died.");
				character.status = "dead";
				console.log(status);
			} else {
				game.setHealth(hpValue);
			}
			console.log(hpValue)
			console.log('Removed a heart.');
		}
	},
	halfHeartedCheck: function() {
		if ($('.blink').length !== 0) {
			return true;
		} else {
			return false;
		}
	},
	hit: function() {
		if (status === "dead") {  } else {
			if (game.halfHeartedCheck() === true) {
				game.halfHearted(false)
			} else if (game.halfHeartedCheck() === false) {
				game.halfHearted(true)
			}
		}
	},
	outputName: function() {
		return game.charName;
	},
	startGame: function() {
		game.resetLog();
		game.logOutput(`${game.prompt} Please enter a name for your character${game.br}`);
		game.logOutput(`<input id='charName' placeholder='Character name here'>${game.br}<button onClick='game.onBoarding()'>Submit</button>`);
	},
	onBoarding: function() {
		character.name = $("#charName").val();
		game.resetLog();
		game.logOutput(`Welcome ${character.name}, to my little dungeon crawler.${game.br}Obviously, I'm still working on the content...${game.br}Check back later to get further in the adventure!`);
	},
}

var character = {
	name: "",
	status: "alive",
}

game.setHealth(4);
game.startGame();