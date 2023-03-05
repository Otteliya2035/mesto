const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._like = data.like;
    this._deleteBtn = data.deleteBtn;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".element__img").src = this._link;
    this._element.querySelector(".element__title").textContent = this._name;
    this._element.querySelector(".element__like-btn").src = this._like;
    this._element.querySelector(".element__delete").src = this._deleteButton;
    return this._element;
  }

  _handleOpenPopup() {
    imagePopup.src = this._link;
    captionText.textContent = this._name;
    openPopup(popupContainer);
  }
  _handleClosePopup() {
    imagePopup.src = "";
    popupCloseImgBtn.removeEventListener("click", this._handleClosePopup);
  }
  _setEventListeners() {
    this._element
      .querySelector(".element__img")
      .addEventListener("click", () => {
        this._handleOpenPopup();
      });
    const popupCloseImgBtn = document.querySelector(".popup__close_img");
    popupCloseImgBtn.addEventListener("click", () => {
      this._handleClosePopup(); 
    });

    this._element
      .querySelector(".element__like-btn")
      .addEventListener("click", () => {
        this._handleLikeClick();
      });
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", () => {
        this._handleDeleteClick();
      });
  }

  _handleLikeClick() {
    this._element
      .querySelector(".element__like-btn")
      .classList.toggle("element__like-btn_active");
  }
  _handleDeleteClick() {
    this._element
      .querySelector(".element__delete")
      .addEventListener("click", (evt) => {
        this._element.remove();
      });
  }
}
initialCards.forEach((item) => {
  const card = new Card(item, ".place-template_type_default");

  const cardElement = card.generateCard();
  document.querySelector(".elements__container").prepend(cardElement);
});
