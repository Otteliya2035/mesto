const showInputError = (formElement, inputElement, errorMessage, config) => {
  /*const errorElement = formElement.querySelector(
    `#${inputElement.id} + .popup__input-error`
  );*/
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);

};




const hideInputError = (formElement, inputElement, config) => {
 /* const errorElement = formElement.querySelector(
    `#${inputElement.id} + .popup__input-error`
  );*/
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const btnElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, btnElement, config);
  formElement.addEventListener('reset', () => {
    setTimeout(() => {
     toggleButtonState(inputList, btnElement, config);
    }, 0); // достаточно указать 0 миллисекунд, чтобы после `reset` уже сработало действие
  });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, btnElement, config);
    });
  });
};
const toggleButtonState = (inputList, btnElement, config) => {
  if (hasInvalidInput(inputList, config)) {
    btnElement.disabled = true;
    btnElement.classList.add(config.inactiveButtonClass);
  } else {
    btnElement.removeAttribute("disabled", "disabled");
    btnElement.classList.remove(config.inactiveButtonClass);
  }
};
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(".popup"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
  };

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__input-error_active",
});

