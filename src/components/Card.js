export class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    userId,
    addLikeCard,
    deleteLikeCard,
    handleDeleteCard
  ) {
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._deleteLikeCard = deleteLikeCard;
    this._addLikeCard = addLikeCard;
    this._handleDeleteCard = handleDeleteCard;
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
    this._cardImage.alt = this._name;
    this._likeCounter = this._element.querySelector(".element__like-count");
    this.renderLikes(this._likes);
    this._likeCounter.textContent = this._likes.length;

    if (this._ownerId !== this._userId) {
      this._deleteButton.remove();
    }

    this.renderLikes(this._likes);
    return this._element;
  }

  _likedCard(likes) {
    return likes?.some((user) => {
      return user._id === this._userId;
    });
  }

  showLikes(likes) {
    if (this._likedCard(likes)) {
      this._likeButton.classList.add("element__like-btn_active");
    } else {
      this._likeButton.classList.remove("element__like-btn_active");
    }
  }

  _handleLikeClick() {
    if (this._likedCard(this._likes)) {
      this._deleteLikeCard(this._id, this.renderLikes);
    } else {
      this._addLikeCard(this._id, this.renderLikes);
    }
  }

  _handleDeleteClick() {
    const callback = () => this._element.remove();
    const id = this._id;
    this._handleDeleteCard(callback, id);
  }

  renderLikes = (likes) => {
    this._likes = likes;
    this._likeCounter.textContent = likes?.length;
    this.showLikes(likes);
  };

  removeCard() {
    this._element.closest(".element").remove();
  }

  _setEventListeners() {
    this._cardImage = this._element.querySelector(".element__img");
    this._likeButton = this._element.querySelector(".element__like-btn");
    this._deleteButton = this._element.querySelector(".element__delete");

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });
  }
}
