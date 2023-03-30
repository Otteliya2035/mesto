import { inputLinkPic } from "../utils/constants.js";
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__field");
    this._button = this._form.querySelector(".popup__button");

    //console.log(popupSelector, handleFormSubmit,this._form, this._inputList,this._button)
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
     // console.log(this._getInputValues());
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });

    //console.log(this._getInputValues());
  }
  close() {
    super.close();
    this._form.reset();
  }
}