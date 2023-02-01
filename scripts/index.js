const profilEditButton = document.querySelector(".profile__btn");
const popupCloseProfile = document.querySelector(".popup__close-profile");
const popupEditProfile = document.querySelector(".popup_edit-profile");
const formElementEditProfile = document.querySelector(".popup__form-profile");
const nameInput = document.querySelector(".popup__field_input_username");
const jobInput = document.querySelector(".popup__field_input_userjob");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function changeUserInfo(nameInput, jobInput) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEditProfile);
}

popupCloseProfile.addEventListener("click", function () {
  closePopup(popupEditProfile);
});
profilEditButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  changeUserInfo(nameInput, jobInput);
  openPopup(popupEditProfile);
});

function handleFormSubmitEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditProfile);
}

formElementEditProfile.addEventListener("submit", handleFormSubmitEditProfile);

const profilAddBtn = document.querySelector(".profile__btn-add");
const popupCloseAddBtn = document.querySelector(".popup__close_place");
const popUpNewPlace = document.querySelector(".popup_new-place");

profilAddBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  openPopup(popUpNewPlace);
});

popupCloseAddBtn.addEventListener("click", function () {
  closePopup(popUpNewPlace);
});

const cardTemplate = document
  .querySelector("#place-template")
  .content.querySelector(".element");
const placesContainer = document.querySelector(".elements__container");
const submitBtn = document.querySelector(".popup__button_submit");
const inputNewPlace = document.querySelector(".popup__field_input_new-place");
const inputLinkPic = document.querySelector(".popup__field_input_link-pic");
const popupContainer = document.querySelector(".popup_big-img");
const imagePopup = popupContainer.querySelector(".popup__img");
const captionText = document.querySelector(".popup__caption");
const popupCloseImgBtn = document.querySelector(".popup__close_img");
const formElementNewPlace = document.querySelector(".popup__form-place");

imagePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  openPopup(popupContainer);
});

popupCloseImgBtn.addEventListener("click", function () {
  closePopup(popupContainer);
});

function addCard(card) {
  placesContainer.prepend(card);
}
function handleFormSubmitNewPlace(evt) {
  evt.preventDefault();
  const name = inputNewPlace.value;
  const link = inputLinkPic.value;
  const card = createCard({ name, link });
  closePopup(popUpNewPlace);
  addCard(card);
}
formElementNewPlace.addEventListener("submit", handleFormSubmitNewPlace);
function renderInitialCards() {
  const cards = initialCards.map((item) => {
    return createCard(item);
  });

  placesContainer.prepend(...cards);
}

renderInitialCards();

function createCard(item) {
  const card = cardTemplate.cloneNode(true);
  card.querySelector(".element__title").textContent = item.name;
  const image = card.querySelector(".element__img");
  image.src = item.link;
  const caption = card.querySelector(".element__title");
  image.addEventListener("click", function () {
    openPopup(popupContainer);
    imagePopup.src = image.src;
    imagePopup.alt = image.alt;
    captionText.textContent = caption.textContent;
  });

  card
    .querySelector(".element__like-btn")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like-btn_active");
    });

  card.querySelector(".element__delete").addEventListener("click", () => {
    card.remove();
  });

  return card;
}
