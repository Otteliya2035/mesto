const openPopUp = document.querySelector('.profile__btn');
const closePopUp = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');

openPopUp.addEventListener('click', () => {
    popUp.classList.add('popup__opened');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('popup__opened');
})


let formElement = document.querySelector('form');
let nameInput = document.querySelector('.popup__username');
let jobInput = document.querySelector('.popup__userjob');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');


function handleFormSubmit (evt) {
    evt.preventDefault();
profileName.textContent = nameInput.value;
profileJob.textContent = jobInput.value;
popUp.classList.remove('popup__opened');
}

formElement.addEventListener('submit', handleFormSubmit);

