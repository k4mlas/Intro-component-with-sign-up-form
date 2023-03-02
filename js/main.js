const btn = document.querySelector('.card__contentTwo__form__btn');
const name = document.querySelector('#name');

const nameShow = () => {
	console.log(name.value);
};

btn.addEventListener('click', nameShow);
