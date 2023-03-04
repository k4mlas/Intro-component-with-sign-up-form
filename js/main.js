const btn = document.querySelector('.card__contentTwo__form__btn');
const name = document.querySelector('#name');
const email = document.querySelector('#mail');
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const checkEmail = () => {
	if (email.value.match(reg)) {
		console.log('ok');
	} else {
		console.log('nie jest ok');
	}
};

btn.addEventListener('click', checkEmail);
