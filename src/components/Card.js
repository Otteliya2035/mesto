export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;

  console.log()
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
    this._cardImage.src = this._link;
    this._element.querySelector(".element__title").textContent = this._name;
    this._cardImage.alt = this._name
    return this._element;
  }
  _setEventListeners() {
    this._cardImage = this._element.querySelector(".element__img");
    this._likeButton = this._element.querySelector(".element__like-btn");
    this._deleteButton = this._element.querySelector(".element__delete");

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
 ;

    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });
  }

  _handleLikeClick() {
    const likeButton = this._element.querySelector(".element__like-btn");
    likeButton.classList.toggle("element__like-btn_active");
  }

  _handleDeleteClick() {
    this._element.remove();
  }
}

