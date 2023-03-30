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
import { data } from 'autoprefixer';



const popupEdit = new PopupWithForm(".popup_edit-profile", (formData) => {
  handleProfileFormSubmit(formData);
});
const userInfo = new UserInfo({
  name: profileName,
  job: profileJob,
});

popupEdit.setEventListeners();

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
const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      return cardElement;
    },
  },
  placesContainer
);
cardList.renderItems();

const popupNew = new PopupWithForm(".popup_new-place", (data) => {
  handleAddCardFormSubmit(data);
});

function createCard(item) {
  const card = new Card(item, "#place-template", handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleAddCardFormSubmit(data) {
  const newCardData = {
    name: data.name,
    link: data.link,
  };
  inputNewPlace.value = data.name;
  inputLinkPic.value = data.link;
  const cardElement = createCard(newCardData);
  cardList.addItem(cardElement);
  popupNew.close();
}

profilAddBtn.addEventListener("click", function () {
  popupNew.open();
  validatorPlace.disableButton();
});

popupNew.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_big-img", (item) => {
  handleCloseImagePopupClick(item);
});
function handleCardClick(name, link) {
  popupWithImage.open(link, name);
}
function handleCloseImagePopupClick(evt) {
  evt.preventDefault();
  popupWithImage.close();
}
popupWithImage.setEventListeners();

const validatorEdit = new FormValidator(config, popupEditProfile);
validatorEdit.enableValidation();

const validatorPlace = new FormValidator(config, popupNewPlace);
validatorPlace.enableValidation();
