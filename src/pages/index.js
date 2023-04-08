import './index.css';
import { Card } from "../components/Card.js";
import { initialCards } from "../utils/initial-cards.js";
import FormValidator from "../components/Formvalidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithDeleteCard from "../components/PopupWithDeleteCard.js"
import {
  profilEditButton,
  popupEditProfile,
  nameInput,
  jobInput,
  avatarInput,
  profileName,
  profileJob,
  profilAddBtn,
  profileAvatar,
  popupNewPlace,
  placesContainer,
  avatarPopupOpenButton,
  config,
  deleteButton,
  deletePopup,
} from "../utils/constants.js";

import Api from "../components/Api.js";

let userId  = null;

const options = {
  url: "https://mesto.nomoreparties.co/v1/cohort-63/",
  headers: {
    "Content-Type": "application/json",
    authorization: "6993a727-96ba-4996-a1f3-e62c6fb54cfd",
  },
}

const api = new Api(options);
//Получить данные пользователя с сервера и Вывести массив карточек на страницу

/*Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([user, cards]) => {
    userId = user._id;
    userInfo.setUserInfo(user);
    userInfo.setAvatar(user);
    cardList.renderer(cards);
})
.catch((err) => {
    console.log(err);
})*/

api.getUserInfo().then((user) => {
  userId = user._id;
  userInfo.setUserInfo(user);
  userInfo.setAvatar(user);
})

 const cards = api.getInitialCards();
 cards.then((initialCards =>{
  const cardList = new Section(
    {
      items: initialCards,
      renderer: (item) => {
        const cardElement = createCard(item, userId);
        return cardElement;
      },
    },
    placesContainer
  );
  cardList.renderItems();
 }));



 const popupAvatarEdit = new PopupWithForm('.popup_edit-avatar', (formData) => {
  handleProfileAvatarFormSubmit(formData);
});

function handleProfileAvatarFormSubmit(values) {
  userInfo.setAvatar({
    avatar: avatarInput.values,
  });
}

avatarPopupOpenButton.addEventListener('click', () => {
  //const userData = userInfo.setAvatar();
  //avatarInput.value = userData.avatar;
  popupAvatarEdit.open();
});
 popupAvatarEdit.setEventListeners();

const popupEdit = new PopupWithForm(".popup_edit-profile", (formData) => {
  handleProfileFormSubmit(formData);
});
const userInfo = new UserInfo({
  name: profileName,
  about: profileJob,
  avatar: profileAvatar,
});

profilEditButton.addEventListener("click", () => {
  /*const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;*/
  popupEdit.open();
});

/*function handleProfileFormSubmit(values) {
  userInfo.setUserInfo({
    name: values.name,
    about: values.about,
  });
}*/
popupEdit.setEventListeners();

const popupNew = new PopupWithForm(".popup_new-place", (data) => {
  api.addNewCard(data)
    .then((cardData) => {
      cardList.addItem(cardElement);// Обновить список карточек на странице не работает
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
});


function createCard(item) {
  const card = new Card(item, "#place-template", handleCardClick, userId, handleDeleteClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleAddCardFormSubmit(data) {
  const newCardData = {
    name: data.name,
    link: data.link,
  };
  const cardElement = createCard(newCardData);
  cardList.addItem(cardElement);
  popupNew.close();
}

profilAddBtn.addEventListener("click", function () {
  popupNew.open();
  validatorPlace.disableButton();
});

popupNew.setEventListeners();


function handleProfileFormSubmit(values) {
  popupEdit.waitSubmitButton(true);
  api.editUserInfo({ name: values.name, about: values.about })
  .then((res) => {
      userInfo.setUserInfo(res);
      popupEdit.close();
  })
  .catch((err) => {
      console.log(err);
  })
  .finally(() => {
      popupEdit.waitSubmitButton(false);
  })
}

const popupDelete = new PopupWithDeleteCard (deletePopup, handleDeleteClick);
popupDelete.setEventListeners();

function handleDeleteClick() {
  popupDelete.open();
}

function submitPopupConfirm (card) {
  api.deleteCard(card._id)
  .then((res) => {
      card.removeCard(res);
      popupDelete.close();
  })
  .catch((err) => {
      console.log(err);
  })

}

const popupWithImage = new PopupWithImage(".popup_big-img", (item) => {
  handleCloseImagePopupClick(item);
});

function handleCardClick(name, link) {
  popupWithImage.open(link, name);
}
popupWithImage.setEventListeners();
//Удалить лайк у карточки

const deleteLikeCard = (_id, renderLike) => {
  api.deleteLikeCard(_id)
  .then((res) => {
      renderLike(res.likes);
  })
  .catch((err) => {
      console.log(err);
  })
}

//Поставить лайк карточке

const addLikeCard = (_id, renderLike) => {
  api.addLikeCard(_id)
  .then((res) => {
      renderLike(res.likes);
  })
  .catch((err) => {
      console.log(err);
  })
}


avatarPopupOpenButton.addEventListener('click', function () {
  popupAvatarEdit.open();
  validatorAvatar.disableButton();
});

const validatorEdit = new FormValidator(config, popupEditProfile);
validatorEdit.enableValidation();

const validatorPlace = new FormValidator(config, popupNewPlace);
validatorPlace.enableValidation();


const validatorAvatar = new FormValidator(config, popupAvatarEdit);
validatorAvatar.enableValidation();

