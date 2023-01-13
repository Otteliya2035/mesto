const openPopUp = document.querySelector('.popup_opened');
const closePopUp = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');

openPopUp.addEventListener('click', () => {
    popUp.classList.add('popup__active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('popup__active');
})


let formElement = document.querySelector('form');
let nameInput = document.querySelector('.popup__username');
let jobInput = document.querySelector('.popup__userjob');
let saveButton = document.querySelector('.popup__button');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');


function handleFormSubmit (evt) {
    evt.preventDefault();
profileName.textContent = nameInput.value;
profileJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);

saveButton.addEventListener('click', () => {
    popUp.classList.remove('popup__active');
});