let randomNumber = '';

let result = '';
let tieCounter = 0;
let winCounter = 0;
let loseCounter = 0;
let guess = '';

const tieMessage = 'seri wooo seri tie';
const loseMessage = 'kalah!! yahaha kalah ama bot!!!';
const winMessage = 'menang?? menang dari bot bangga??';

function computerPickMove() {
	let randomPick = '';
	const randomNumber = Math.random();
	console.log(randomNumber);
	if (randomNumber >= 0 && randomNumber < 1 / 3) {
		randomPick = 'gunting';
	} else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		randomPick = 'batu';
	} else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		randomPick = 'kertas';
	}
	return randomPick;
}

function playGame(selectPick) {
	randomPick = computerPickMove();

	// console.log(randomPick);
	const computerPick = `komputer milih ${randomPick}!!`;
	const yourPick = `kamu milih ${selectPick}`;
	if (selectPick === 'kertas') {
		if (randomPick === 'gunting') {
			console.log(loseMessage);
			result = loseMessage;
			loseCounter++;
		} else if (randomPick === 'batu') {
			console.log(winMessage);
			result = winMessage;
			winCounter++;
		} else if (randomPick === 'kertas') {
			console.log(tieMessage);
			result = tieMessage;
			tieCounter++;
		}
	} else if (selectPick === 'batu') {
		if (randomPick === 'gunting') {
			console.log(winMessage);
			winCounter++;
			result = winMessage;
		} else if (randomPick === 'batu') {
			console.log(tieMessage);
			result = tieMessage;
			tieCounter++;
		} else if (randomPick === 'kertas') {
			console.log(loseMessage);
			loseCounter++;
			result = loseMessage;
		}
	} else if (selectPick === 'gunting') {
		if (randomPick === 'gunting') {
			console.log(tieMessage);
			tieCounter++;
			result = tieMessage;
		} else if (randomPick === 'batu') {
			console.log(loseMessage);
			result = loseMessage;
			loseCounter++;
		} else if (randomPick === 'kertas') {
			console.log(winMessage);
			winCounter++;
			result = winMessage;
		}
	}

	alert(`${yourPick}, ${computerPick}
${result}`);
}
