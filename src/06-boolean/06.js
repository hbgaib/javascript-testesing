let randomNumber = '';
let randomPick = '';
let result = '';
let tieCounter = 0;
let winCounter = 0;
let loseCounter = 0;
let guess = '';
let computerPick = '';

const tieMessage = 'seri wooo seri tie';
const loseMessage = 'kalah!! yahaha kalah ama bot!!!';
const winMessage = 'menang?? menang dari bot bangga??';

function computerPickMove() {
	randomNumber = Math.random();
	console.log(randomNumber);
	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		randomPick = 'gunting';
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		randomPick = 'batu';
	} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		randomPick = 'kertas';
	}
}
