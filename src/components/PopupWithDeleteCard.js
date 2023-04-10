import Popup from "./Popup.js";

export default class PopupWithDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
  }

  _deleteCardHandler;

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._deleteCardHandler();
      this.close();
    });
  }

  open(callback, id) {
    super.open();
    this._deleteCardHandler = callback;
  }

  close() {
    super.close();
    this._form.reset();
  }
}
