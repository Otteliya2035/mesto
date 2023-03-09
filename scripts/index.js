import { Card } from "./Cards.js";
import { initialCards } from "./initial-cards.js";
import FormValidator from "./Formvalidator.js";

const profilEditButton = document.querySelector(".profile__btn");
const popupCloseProfile = document.querySelector(".popup__close-profile");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const formElementEditProfile = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector(".popup__field_input_username");
const jobInput = document.querySelector(".popup__field_input_userjob");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const profilAddBtn = document.querySelector(".profile__btn-add");
const popupCloseAddBtn = document.querySelector(".popup__close_place");
const popUpNewPlace = document.querySelector(".popup_new-place");
const cardTemplate = document
  .querySelector("#place-template")
  .content.querySelector(".element");
const placesContainer = document.querySelector(".elements__container");
const inputNewPlace = document.querySelector(".popup__field_input_new-place");
const inputLinkPic = document.querySelector(".popup__field_input_link-pic");
const popupContainer = document.querySelector(".popup_big-img");
const imagePopup = document.querySelector(".popup__img");
const captionText = document.querySelector(".popup__caption");
const popupCloseImgBtn = document.querySelector(".popup__close_img");
const formElementNewPlace = document.querySelector(".popup__form-place");
const allPopups = document.querySelectorAll(".popup");
const buttonAddPlace = document.getElementById("addplace");

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keyup", closeEscPopup);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keyup", closeEscPopup);
}

allPopups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  });
});

function closeEscPopup(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  validatorEdit.resetValidation();
  validatorEdit.resetSaveButtonState();
  openPopup(popupEditProfile);
}

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function handleFormSubmitNewPlace(evt) {
  evt.preventDefault();
  const name = inputNewPlace.value;
  const link = inputLinkPic.value;
  const card = createCard({ name, link });
  inputNewPlace.value = "";
  inputLinkPic.value = "";
  closePopup(popUpNewPlace);
  addCard(card);
}

function createCard({ name, link }) {
  return new Card({ name, link }, "#place-template").generateCard();
}

formElementNewPlace.addEventListener("submit", handleFormSubmitNewPlace);

function addCard(card) {
  placesContainer.prepend(card);
}

function handleCloseProfilePopupClick() {
  closePopup(popupEditProfile);
}
popupCloseProfile.addEventListener("click", handleCloseProfilePopupClick);

function handleEditProfileButtonClick(evt) {
  evt.preventDefault();
  openPopupProfile();
  openPopup(popupEditProfile);
}

profilEditButton.addEventListener("click", handleEditProfileButtonClick);
formElementEditProfile.addEventListener("submit", handleFormSubmitEditProfile);

function handleAddPlaceButtonClick(evt) {
  evt.preventDefault();
  validatorPlace.resetValidation();
  validatorPlace.resetSaveButtonState();
  inputNewPlace.value = "";
  inputLinkPic.value = "";
  openPopup(popUpNewPlace);
}

profilAddBtn.addEventListener("click", handleAddPlaceButtonClick);

function handleCloseAddPlacePopupClick() {
  closePopup(popUpNewPlace);
}

popupCloseAddBtn.addEventListener("click", handleCloseAddPlacePopupClick);
formElementNewPlace.addEventListener("submit", handleFormSubmitNewPlace);

function handleImagePopupClick(evt) {
  evt.preventDefault();
  openPopup(popupContainer);
}

imagePopup.addEventListener("click", handleImagePopupClick);

function handleCloseImagePopupClick(evt) {
  evt.preventDefault();
  closePopup(popupContainer);
}

popupCloseImgBtn.addEventListener("click", handleCloseImagePopupClick);

initialCards.forEach((item) => {
  const card = new Card(item, ".place-template_type_default");
  const cardElement = card.generateCard();
  document.querySelector(".elements__container").prepend(cardElement);
});

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__field_invalid",
};

const validatorEdit = new FormValidator(config, popupEditProfile);
const validatorPlace = new FormValidator(config, popUpNewPlace);
const formValidators = {};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement, popupEditProfile);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);
