function greeting(greetName = 'there') {
	console.log(`hello ${greetName}!`);
	return;
}

function convertTemperature(metrix, temperature) {
	if (metrix === 'toC') {
		console.log(`${temperature} ${metrix === 'toC' ? 'C' : 'F'} =
${((temperature - 32) * 5) / 9} ${metrix === 'toC' ? 'f' : 'c'}`);
	} else if (metrix === 'toF') {
		console.log(`${temperature} ${metrix === 'toC' ? 'F' : 'c'} =
${(temperature * 9) / 5 + 32} ${metrix === 'toC' ? 'c' : 'f'}`);
	}
}

function convertPanjang(panjang, dari, ke) {
	if (dari !== 'kaki' && dari !== 'km' && dari !== 'mil') {
		console.log(`
			bodo, kau ngisi dari ga becus
			`);
		return;
	}
	if (ke !== 'kaki' && ke !== 'km' && ke !== 'mil') {
		console.log(`
			bego, kau ngisi ke ga becus
			`);
		return;
	}
	if (dari === ke) {
		console.log(`
			${panjang} ${dari} =
			${panjang} ${ke}
			`);
		return;
	}

	if (dari === 'mil' && ke === 'km') {
		console.log(`
			${panjang} ${dari} =
			${(panjang * 16) / 10} ${ke}
		`);
	} else if (dari === 'km' && ke === 'mil') {
		console.log(`
			${panjang} ${dari} =
			${(panjang / 16) * 10} ${ke}
			`);
	} else if (dari === 'mil' && ke === 'kaki') {
		console.log(`
			${panjang} ${dari} =
			${panjang * 5280} ${ke}
			`);
	} else if (dari === 'kaki' && ke === 'mil') {
		console.log(`
			${panjang} ${dari} =
			${panjang / 5280} ${ke}
			`);
	} else if (dari === 'km' && ke === 'kaki') {
		console.log(`
			${panjang} ${dari} =
			${panjang * 3281} ${ke}
			`);
	} else if (dari === 'kaki' && ke === 'km') {
		console.log(`
			${panjang} ${dari} =
			${panjang / 3281} ${ke}
			`);
	}
}
