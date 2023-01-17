const profilEditButton = document.querySelector('.profile__btn');
const closePopUp = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');
let formElement = document.querySelector('form');
let nameInput = document.querySelector('.popup__field_input_username');
let jobInput = document.querySelector('.popup__field_input_userjob');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');


function popupOpen () {
    popUp.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};
profilEditButton.addEventListener('click', popupOpen);

 function popupClose () {
    popUp.classList.remove('popup_opened');
 }

closePopUp.addEventListener('click', popupClose);

function handleFormSubmit (evt) {
    evt.preventDefault();
profileName.textContent = nameInput.value;
profileJob.textContent = jobInput.value;
popupClose ();
}

formElement.addEventListener('submit', handleFormSubmit);