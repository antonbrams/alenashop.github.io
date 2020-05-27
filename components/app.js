const hide = () =>
	document.querySelector('.loader').classList.add('hide')
window.onload = hide
setTimeout(hide, 5000)
