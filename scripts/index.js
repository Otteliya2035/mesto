import { Card } from "./Cards.js";
import { FormValidator } from "./Formvalidator.js";

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
const imagePopup = popupContainer.querySelector(".popup__img");
const captionText = document.querySelector(".popup__caption");
const popupCloseImgBtn = document.querySelector(".popup__close_img");
const formElementNewPlace = document.querySelector(".popup__form-place");
const allPopups = document.querySelectorAll(".popup");
const buttonAddPlace = document.getElementById("addplace");

function openPopup(popup) {
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

function changeUserInfo() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
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

popupCloseProfile.addEventListener("click", function () {
  closePopup(popupEditProfile);
});
profilEditButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  changeUserInfo();
  openPopup(popupEditProfile);
});

formElementEditProfile.addEventListener("submit", handleFormSubmitEditProfile);

profilAddBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonAddPlace.setAttribute("disabled", "disabled");
  buttonAddPlace.classList.add("popup__button_disabled");
  openPopup(popUpNewPlace);
});

popupCloseAddBtn.addEventListener("click", function () {
  closePopup(popUpNewPlace);
});

formElementNewPlace.addEventListener("submit", handleFormSubmitNewPlace);

imagePopup.addEventListener("click", function (evt) {
  evt.preventDefault();

  openPopup(popupContainer);
});

popupCloseImgBtn.addEventListener("click", function () {
  closePopup(popupContainer);
});

const formElements = document.querySelectorAll(".popup__form");

formElements.forEach((formElement) => {
  const config = new FormValidator(
    {
      formSelector: ".popup__form",
      inputSelector: ".popup__field",
      submitButtonSelector: ".popup__button",
      inactiveButtonClass: "popup__button_disabled",
      inputErrorClass: "form__input_type_error",
      errorClass: "popup__field_invalid",
    },
    formElement
  );

  config.enableValidation();
});
