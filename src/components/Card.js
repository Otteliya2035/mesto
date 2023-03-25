export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    
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
    this._element.querySelector(".element__img").src = this._link;
    this._element.querySelector(".element__title").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
  _setEventListeners() {
    this._element
      .querySelector(".element__img")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
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
  }
}
