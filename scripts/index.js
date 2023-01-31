const profilEditButton = document.querySelector('.profile__btn');
const closingPopUp = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');
let formElement = document.querySelector('form');
let nameInput = document.querySelector('.popup__field_input_username');
let jobInput = document.querySelector('.popup__field_input_userjob');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__subtitle');


function openPopup () {
    popUp.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};
profilEditButton.addEventListener('click', openPopup);

 function closePopup () {
    popUp.classList.remove('popup_opened');
 }

closingPopUp.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
    evt.preventDefault();
profileName.textContent = nameInput.value;
profileJob.textContent = jobInput.value;
closePopup ();
}

formElement.addEventListener('submit', handleFormSubmit);

const  profilAddBtn = document.querySelector('.profile__btn-add');
const closingPopupNewPlace = document.querySelector('.popup__close_place');
const popUpNewPlace = document.querySelector('.popup_new-place');


function openPopupNewPlace(){
    popUpNewPlace.classList.add('popup_opened_new-place');
};
 profilAddBtn.addEventListener('click', openPopupNewPlace);

 function closePopupNewPlace(){
    popUpNewPlace.classList.remove('popup_opened_new-place');
 };
 closingPopupNewPlace.addEventListener('click', closePopupNewPlace);

  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'

    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  const template = document.querySelector('#place-template').content.querySelector('.element');
  const placesContainer = document.querySelector('.elements__container');
  const submitbtn = document.querySelector('.popup__button_submit');
  const inputNewPlace = document.querySelector('.popup__field_input_new-place');
  const inputLinkPic = document.querySelector('.popup__field_input_link-pic');
  const popupContainer = document.querySelector('.popup_big-img');
  const imagePopup = popupContainer.querySelector('.popup__img');
  const captionText = document.querySelector('.popup__caption');
  const closingPopupImg = document.querySelector('.popup__close_img')

function openPopupImg() {
    popupContainer.classList.add('popup_opened_big-img');
  }

function closePopupImg(){
    popupContainer.classList.remove('popup_opened_big-img')
}
closingPopupImg.addEventListener('click', closePopupImg);

 submitbtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const name = inputNewPlace.value;
    const link =inputLinkPic.value;
    const card = createCard({name: name, link: link})
    closePopupNewPlace()
    placesContainer.prepend(card);
 })

 function renderCards (){
 const cards  = initialCards.map ((item)=>{
       return createCard(item);
    });
    placesContainer.prepend(...cards);
 }

 renderCards();

 function createCard(item){
    const card = template.cloneNode(true);
        card.querySelector('.element__title').textContent = item.name;
        card.querySelector('.element__img').src = item.link;
        const image = card.querySelector('.element__img');
        const caption = card.querySelector('.element__title');
        image.addEventListener('click', function () {
        openPopupImg(popupContainer);
          imagePopup.src = image.src;
          captionText.textContent = caption.textContent;

        });

        card.querySelector('.element__like-btn').addEventListener('click',function(evt){
            evt.target.classList.toggle('element__like-btn_active');

        });

        card.querySelector('.element__delete').addEventListener('click', () =>{
            card.remove();
        });

        return card;
 };