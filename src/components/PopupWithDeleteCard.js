import Popup from './Popup.js';

export default class PopupWithDeleteCard extends Popup {
  constructor(popupSelector, deleteCardHandler) {
    super(popupSelector);
    this._deleteCardHandler = deleteCardHandler;
    this._form = this._popup.querySelector('.popup__form');

  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._deleteCardHandler(this._cardId);
      this._popupDeleteYesButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        this._deleteCardHandler(this._cardId);
      });

    });
  }
  open(data) {
    super.open();
    this._cardId = data;
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._deleteCardHandler(this._cardId);
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

}
