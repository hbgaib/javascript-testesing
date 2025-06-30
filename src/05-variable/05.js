let cartQuantity = 0;

const hargaDonat = 5000;
const hargaTeh = 2000;
const hargaKopi = 7000;
const hargaBlonde = 200000;

let harga = 0;
let pajak = 0;
let hargaTotal = 0;

let keranjang = 0;

function updateCartQuantity(updateCart) {
	if (cartQuantity + updateCart > 10) {
		if (cartQuantity === 10) {
			console.log('cart penuh guoblok, batas 10');
		} else if (cartQuantity < 10) {
			console.log('cart hanya bisa 10');
			cartQuantity = 10;
			console.log(`items in cart = ${cartQuantity};`);
		}
		return;
	}
	if (cartQuantity + updateCart < 0) {
		if (cartQuantity === 0) {
			console.log('cart kosong guoblok');
		} else if (cartQuantity > 0) {
			console.log('cart sudah kosong');
			cartQuantity = 0;
			console.log(`items in cart = ${cartQuantity};`);
		}
		return;
	}
	cartQuantity += updateCart;
	console.log(`items in cart = ${cartQuantity};`);
}
