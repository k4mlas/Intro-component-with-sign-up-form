const btn = document.querySelector('.card__contentTwo__form__btn');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const emailErrorText = document.querySelector('#emailErrorText');
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const checkEmail = () => {
	if (email.value.match(reg)) {
		emailErrorText.innerHTML = "<br>"
		console.log('ok');
	} else {
		console.log('nie jest ok');
		emailErrorText.innerHTML = "Looks like this is not an email"
	}
};

btn.addEventListener('click', checkEmail);
