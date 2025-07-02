const object1 = {
	name: 'basket',
	price: 5000,
	['delivery-time']: '3 days',
};
const object2 = {
	name: 'voli',
	price: 7000,
};
object1.price = 5500;
const object3 = object1;
const object4 = {
	name: 'basket',
	price: 5500,
	['delivery-time']: '3 days',
};

	// keluarin value dari object dan dijadiin var
  // const message = object1.message;
      const { name: mark, price: cost } = object1;
      console.log(mark);
      console.log(cost);

function comparator(barang1, barang2) {
	if (barang1.price < object2.price) {
		console.log(barang1.name);
		return;
	} else {
		console.log(barang2.name);
		return;
	}
}

function duplicateCheck(barang1, barang2) {
	if (barang1.name === barang2.name && barang1.price == barang2.price) {
		console.log(`
${barang1.name} sama dengan ${barang2.name} dengan harga ${barang1.price}
			`);
	} else {
		console.log(`
${barang1.name} ga sama dengan ${barang2.name} 
			`);
	}
}

comparator(object1, object2);
duplicateCheck(object1, object2);

console.log('Good Morning!'.toLowerCase());
console.log('hlabib'.repeat(2));