import { Card } from "../components/Card.js";
import { initialCards } from "../components/initial-cards.js";
import FormValidator from "../components/Formvalidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";

const profilEditButton = document.querySelector(".profile__btn");
const popupCloseProfile = document.querySelector(".popup__close-profile");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const formElementEditProfile = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector(".popup__field_input_username");
const jobInput = document.getElementById("job");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const profilAddBtn = document.querySelector(".profile__btn-add");
const popupCloseAddBtn = document.querySelector(".popup__close_place");
const popupNewPlace = document.querySelector(".popup_new-place");
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

const popupWithImage = new PopupWithImage(".popup_big-img");
const popupEdit = new PopupWithForm(".popup_edit-profile", (formData) => {
  handleProfileFormSubmit(formData);
  userInfo.setUserInfo(formData);
});
const userInfo = new UserInfo({
  name: profileName,
  job: profileJob,
});

popupEdit.setEventListeners();
userInfo.getUserInfo();

profilEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  nameInput.value = "";
  jobInput.value = "";
  popupEdit.open();
});

function handleProfileFormSubmit(values) {
  userInfo.setUserInfo({
    name: values.name,
    job: values.job,
  });
}

popupCloseProfile.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const userData = userInfo.setUserInfo({ name, job });
  profileName.textContent = userData.name;
  profileJob.textContent = userData.job;
  popupEdit.close();
  validatorEdit.resetValidation();
});

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, "#place-template", handleCardClick);
      const cardElement = card.generateCard(link);
      return cardElement;
    },
  },
  placesContainer
);

cardList.renderItems();

const popupNew = new PopupWithForm(".popup_new-place", (item) => {
  handleAddCardFormSubmit(item);
});

popupNew.setEventListeners();
profilAddBtn.addEventListener("click", function () {
  popupNew.open();
  validatorPlace.resetValidation();
});

function handleAddCardFormSubmit(data) {
  const card = new Card(
    {
      name: data.name,
      link: data.link,
    },
    "#place-template",
    handleCardClick
  );
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
  popupNew.close();
}

function handleCardClick(name, link) {
  popupWithImage.open(link, name);
}
function handleCloseImagePopupClick(evt) {
  evt.preventDefault();
  popupWithImage.close();
}

popupCloseImgBtn.addEventListener("click", handleCloseImagePopupClick);

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__field_invalid",
};

const validatorEdit = new FormValidator(config, popupEditProfile);
validatorEdit.enableValidation();

const validatorPlace = new FormValidator(config, popupNewPlace);
validatorPlace.enableValidation();

