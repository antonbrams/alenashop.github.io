const ph1 = '+491794'
const ph2 = '261765'
const em1 = 'anfrage@'
const em2 = 'alenashop.de'

const onload = () => {
	const loader = document.querySelector('.loader')
	if (loader) loader.classList.add('hide')
	const phone = document.querySelector('.phone')
	const email = document.querySelector('.email')

	if (phone) {
		phone.innerHTML = ph1 + ph2
		phone.href = 'tel:' + ph1 + ph2
	}
	if (email) {
		email.innerHTML = em1 + em2
		email.href = 'mailto:' + em1 + em2
	}
}
window.onload = onload
setTimeout(onload, 10000)
