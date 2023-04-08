import { inputLinkPic } from "../utils/constants.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__field");
    this._button = this._form.querySelector(".popup__button");
    this._popupSubmitButton = this._popup.querySelector('.popup__button');
    this._popupSubmitButtonTextDefault = this._popupSubmitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const data = this._getInputValues();
    this._handleFormSubmit(data);
    this.close();
  });
  }
  close() {
    super.close();
    this._form.reset();
  }
//Изменение текста кнопки Сохранить, пока идет загрузка данных

waitSubmitButton(isLoading) {
  if (isLoading) {
      this._popupSubmitButton.textContent = 'Сохранение...';
  } else {
      this._popupSubmitButton.textContent = this._popupSubmitButtonTextDefault;
  }
}

}