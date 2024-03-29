import "./index.css";
import { Card } from "../components/Card.js";
import { initialCards } from "../utils/initial-cards.js";
import FormValidator from "../components/Formvalidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithDeleteCard from "../components/PopupWithDeleteCard.js";
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
  deletePopup,
  popupEditAvatar,
} from "../utils/constants.js";

import Api from "../components/Api.js";

let userId = null;

const userInfo = new UserInfo({
  name: profileName,
  about: profileJob,
  avatar: profileAvatar,
});

const options = {
  url: "https://mesto.nomoreparties.co/v1/cohort-63/",
  headers: {
    "Content-Type": "application/json",
    authorization: "6993a727-96ba-4996-a1f3-e62c6fb54cfd",
  },
};
const validatorEdit = new FormValidator(config, popupEditProfile);
validatorEdit.enableValidation();
const validatorPlace = new FormValidator(config, popupNewPlace);
validatorPlace.enableValidation();

const api = new Api(options);

const deleteLikeCard = (_id, renderLike) => {
  api
    .deleteLikeCard(_id)
    .then((res) => {
      renderLike(res.likes);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addLikeCard = (_id, renderLike) => {
  api
    .addLikeCard(_id)
    .then((res) => {
      renderLike(res.likes);
    })
    .catch((err) => {
      console.log(err);
    });
};

const popupWithImage = new PopupWithImage(".popup_big-img", (item) => {
  handleCardClick(item);
});

function handleCardClick(name, link) {
  popupWithImage.open(link, name);
}
popupWithImage.setEventListeners();

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => createCard(item, userId),
  },
  placesContainer
);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    userId = user._id;
    userInfo.setUserInfo({ name: user.name, about: user.about });
    userInfo.setAvatar({ avatar: user.avatar });
    cardList.addItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

const validatorAvatar = new FormValidator(config, popupEditAvatar);
validatorAvatar.enableValidation();

const popupAvatarEdit = new PopupWithForm(".popup_edit-avatar", (formData) => {
  handleProfileAvatarFormSubmit(formData);
});

function handleProfileAvatarFormSubmit(values) {
  popupAvatarEdit.changeButtonText(true);
  api
    .editAvatar({ avatar: values.link })
    .then((res) => {
      userInfo.setAvatar({ avatar: res.avatar });
      popupAvatarEdit.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupAvatarEdit.changeButtonText(false);
    });
}

const popupEdit = new PopupWithForm(".popup_edit-profile", (formData) => {
  handleProfileFormSubmit(formData);
});

avatarPopupOpenButton.addEventListener("click", () => {
  popupAvatarEdit.open();
  validatorAvatar.disableButton();
});

popupAvatarEdit.setEventListeners();

profilEditButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  popupEdit.open();
  validatorEdit.disableButton();
});

popupEdit.setEventListeners();

const popupNew = new PopupWithForm(".popup_new-place", (data) => {
  popupNew.changeButtonText(true);
  api
    .addNewCard(data)
    .then((cardData) => {
      cardList.addItem(cardData);
      popupNew.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupNew.changeButtonText(false);
    });
});

profilAddBtn.addEventListener("click", function () {
  popupNew.open();
  validatorPlace.disableButton();
});

popupNew.setEventListeners();

const removeCard = (removeCallBack, id) => {
  api.deleteCard(id).then((res) => {
      removeCallBack();
      popupDelete.close();
  })
    .catch((err) => console.log(err));
}

const popupDelete = new PopupWithDeleteCard(".popup_delete-card", removeCard);
popupDelete.setEventListeners();

function handleDeleteClick(callback, id) {
  popupDelete.open(callback, id);
}

function createCard(item) {
  const card = new Card(
    item,
    "#place-template",
    handleCardClick,
    userId,
    addLikeCard,
    deleteLikeCard,
    handleDeleteClick
  );
  const cardElement = card.generateCard();
  return cardElement;
}

function handleProfileFormSubmit(values) {
  popupEdit.changeButtonText(true);
  api
    .editUserInfo({ name: values.name, profession: values.about })
    .then((res) => {
      userInfo.setUserInfo(res);
      popupEdit.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEdit.changeButtonText(false);
    });
}
