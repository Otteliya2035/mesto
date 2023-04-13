import Popup from "./Popup.js";

export default class PopupWithDeleteCard extends Popup {
  constructor(popupSelector, handleSubmitBtn) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._handleSubmitBtn = handleSubmitBtn;
  }

  _cardId;
  _deleteCardHandler;

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const deleteHandler = this._deleteCardHandler
      this._handleSubmitBtn(deleteHandler, this._cardId);
    });
  }

  open(callback, id) {
    super.open();
    this._deleteCardHandler = callback;
    this._cardId = id;
  }

}
