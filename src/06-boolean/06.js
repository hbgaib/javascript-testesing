let randomNumber = '';

let result = '';
let guess = '';

defaultScore = {
	win: 0,
	lose: 0,
	tie: 0,
};

 defaultScoreFlip = {
	win: 0,
	lose: 0,
};
const score = JSON.parse(localStorage.getItem('score') || defaultScore);
const scoreFlip = JSON.parse(localStorage.getItem('scoreFlip') || defaultScoreFlip);

const tieMessage = 'seri wooo seri tie';
const loseMessage = 'kalah!! yahaha kalah ama bot!!!';
const winMessage = 'menang?? menang dari bot bangga??';

function computerPickMove() {
	let randomPick = '';
	const randomNumber = Math.random();
	// console.log(randomNumber);
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
		} else if (randomPick === 'batu') {
			console.log(winMessage);
			result = winMessage;
		} else if (randomPick === 'kertas') {
			console.log(tieMessage);
			result = tieMessage;
		}
	} else if (selectPick === 'batu') {
		if (randomPick === 'gunting') {
			console.log(winMessage);
			result = winMessage;
		} else if (randomPick === 'batu') {
			console.log(tieMessage);
			result = tieMessage;
		} else if (randomPick === 'kertas') {
			console.log(loseMessage);
			result = loseMessage;
		}
	} else if (selectPick === 'gunting') {
		if (randomPick === 'gunting') {
			console.log(tieMessage);
			result = tieMessage;
		} else if (randomPick === 'batu') {
			console.log(loseMessage);
			result = loseMessage;
		} else if (randomPick === 'kertas') {
			console.log(winMessage);
			result = winMessage;
		}
	}
	if (result === winMessage) {
		score.win += 1;
	} else if (result === loseMessage) {
		score.lose += 1;
	} else if (result === tieMessage) {
		score.tie += 1;
	}

	alert(`${yourPick}, ${computerPick}
${result}
menang = ${score.win} kalah = ${score.lose} seri = ${score.tie}`);
	localStorage.setItem('score', JSON.stringify(score));
}

function computerFlip() {
	result = Math.random() < 0.5 ? 'head' : 'tail';
	return result;
}

function flipGuess(guess) {
	computerFlip();
	if (result === guess) {
		console.log(winMessage);
		scoreFlip.win++;
	} else if (result !== guess) {
		console.log(loseMessage);
		scoreFlip.lose++;
	}
	console.log(scoreFlip);
	localStorage.setItem('scoreFlip', JSON.stringify(scoreFlip));
	// localStorage.setItem('scoreFlip', JSON.stringify(scoreFlip));
}
