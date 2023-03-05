const btn = document.querySelector('.card__contentTwo__form__btn');

const name = document.querySelector('#name');
const nameErrorText = document.querySelector('#nameErrorText');
const nameErrorIcon = document.querySelector('#nameErrorIcon');

const lastName = document.querySelector('#lastName');
const lastNameErrorText = document.querySelector('#lastNameErrorText');
const lastNameErrorIcon = document.querySelector('#lastNameErrorIcon');

const email = document.querySelector('#email');
const emailErrorText = document.querySelector('#emailErrorText');
const emailErrorIcon = document.querySelector('#emailErrorIcon');
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



const checkName = () => {
	if (name.value != '') {
		nameErrorText.innerHTML = '<br>';
		nameErrorIcon.style.display = 'none';
	} else {
		nameErrorText.innerHTML = 'First Name cannot be empty';
		nameErrorIcon.style.display = 'block';
	}
};

const checkLastName = () => {
	if (lastName.value != '') {
		lastNameErrorText.innerHTML = '<br>';
		lastNameErrorIcon.style.display = 'none';
	} else {
		lastNameErrorText.innerHTML = 'Last Name cannot be empty';
		lastNameErrorIcon.style.display = 'block';
	}
};

const checkEmail = () => {
	if (email.value.match(reg)) {
		emailErrorText.innerHTML = '<br>';
		emailErrorIcon.style.display = 'none';
		email.value = '';
	} else {
		emailErrorText.innerHTML = 'Looks like this is not an email';
		emailErrorIcon.style.display = 'block';
	}
};




btn.addEventListener('click', checkLastName);
