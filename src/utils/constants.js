export const profilEditButton = document.querySelector(".profile__btn");
export const popupCloseProfile = document.querySelector(
  ".popup__close-profile"
);
export const popupEditProfile = document.querySelector(".popup_edit-profile");
export const popupEditAvatar = document.querySelector(".popup_edit-avatar");
export const formElementEditProfile = document.querySelector(
  ".popup__form-profile"
);
export const nameInput = document.querySelector(".popup__field_input_username");
export const jobInput = document.querySelector(".popup__field_input_userjob");
export const avatarInput = document.getElementById("avatar-input");
export const profileName = document.querySelector(".profile__title");
export const profileJob = document.querySelector(".profile__subtitle");
export const profileAvatar = document.querySelector(".profile__avatar");
export const profilAddBtn = document.querySelector(".profile__btn-add");
export const popupCloseAddBtn = document.querySelector(".popup__close_place");
export const popupNewPlace = document.querySelector(".popup_new-place");
export const cardTemplate = document
  .querySelector("#place-template")
  .content.querySelector(".element");
export const placesContainer = document.querySelector(".elements__container");
export const inputNewPlace = document.querySelector(
  ".popup__field_input_new-place"
);
export const inputLinkPic = document.querySelector(
  ".popup__field_input_link-pic"
);
export const popupContainer = document.querySelector(".popup_big-img");
export const imagePopup = document.querySelector(".popup__img");
export const captionText = document.querySelector(".popup__caption");
export const popupCloseImgBtn = document.querySelector(".popup__close_img");
export const formElementNewPlace = document.querySelector(".popup__form-place");
export const allPopups = document.querySelectorAll(".popup");
export const buttonAddPlace = document.getElementById("addplace");
export const avatarPopupOpenButton = document.querySelector(
  ".profile__avatar-btn"
);
export const deletePopup = document.querySelector(".popup_delete-card");
export const deleteButton = document.querySelector(".element__delete");
export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "popup__field_invalid",
  profileNameSelector: ".profile__title",
  profileProfessionSelector: ".profile__subtitle",
  profileAvatarSelector: ".profile__avatar",
};
