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

const pass = document.querySelector('#pass');
const passErrorIcon = document.querySelector('#passErrorIcon');
const passErrorText = document.querySelector('#passErrorText');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()?]/;
const minValue = 10;

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

const checkPass = () => {
	if (pass.value == '') {
		passErrorText.innerHTML = 'Password cannot be empty';
		passErrorIcon.style.display = 'block';
		console.log('Wpisz hasło');
	} else if (
		pass.value != '' &&
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		passErrorText.innerHTML = '<br>';
		passErrorIcon.style.display = 'none';
		pass.value = '';
		console.log('hasło jest ok');
	} else {
		passErrorText.innerHTML =
			'The password should contain uppercase and lowercase letters, numbers and special characters';
		passErrorIcon.style.display = 'block';
		console.log('Za słabe hasło');
	}
};

const startF = () => {
	checkName();
	checkLastName();
	checkEmail();
	checkPass();
};

btn.addEventListener('click', startF);
