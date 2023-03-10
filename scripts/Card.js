import { openPopup } from "./index.js";

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this.imagePopup = document.querySelector(".popup__img");
    this.captionText = document.querySelector(".popup__caption");
    this.popupContainer = document.querySelector(".popup_big-img");
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
    return this._element;
  }

  _handleOpenPopup() {
    this.imagePopup.src = this._link;
    this.captionText.textContent = this._name;
    openPopup(this.popupContainer);
  }
  _handleClosePopup() {
    this.imagePopup.src = "";
  }
  _setEventListeners() {
    this._element
      .querySelector(".element__img")
      .addEventListener("click", () => {
        this._handleOpenPopup();
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
        this._element.remove();
      };
  }

