import './index.css';
import { Card } from "../components/Card.js";
import { initialCards } from "../utils/initial-cards.js";
import FormValidator from "../components/Formvalidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {
  profilEditButton,
  popupCloseProfile,
  popupEditProfile,
  nameInput,
  jobInput,
  profileName,
  profileJob,
  profilAddBtn,
  popupNewPlace,
  placesContainer,
  popupCloseImgBtn,
  inputLinkPic,
  inputNewPlace,
  config,
} from "../utils/constants.js";

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
      const cardElement = card.generateCard();
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
      name: inputNewPlace.value,
      link: inputLinkPic.value,
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

const validatorEdit = new FormValidator(config, popupEditProfile);
validatorEdit.enableValidation();

const validatorPlace = new FormValidator(config, popupNewPlace);
validatorPlace.enableValidation();

