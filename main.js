(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var r=function(){function e(t,r,o,i,u,c){var l,a,s,f=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l=this,s=function(e){f._likes=e,f._likeCounter.textContent=null==e?void 0:e.length,f.showLikes(e)},(a=n(a="renderLikes"))in l?Object.defineProperty(l,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[a]=s,this._name=t.name,this._link=t.link,this._templateSelector=r,this._handleCardClick=o,this._userId=i,this._ownerId=t.owner._id,this._likes=t.likes,this._deleteLikeCard=c,this._addLikeCard=u,console.log()}var r,o;return r=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._cardImage.src=this._link,this._element.querySelector(".element__title").textContent=this._name,this._cardImage.alt=this._name,this._likeCounter=this._element.querySelector(".element__like-count"),this.renderLikes(this._likes),this._likeCounter.textContent=this._likes.length,this._ownerId!==this._userId&&this._deleteButton.remove(),this.renderLikes(this._likes),this._element}},{key:"_likedCard",value:function(e){var t=this;return null==e?void 0:e.some((function(e){return e._id===t._userId}))}},{key:"showLikes",value:function(e){this._likedCard(e)?this._likeButton.classList.add("element__like-btn_active"):this._likeButton.classList.remove("element__like-btn_active")}},{key:"_handleLikeClick",value:function(){this._element.querySelector(".element__like-btn").classList.toggle("element__like-btn_active")}},{key:"removeCard",value:function(){this._element.closest(".element").remove()}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage=this._element.querySelector(".element__img"),this._likeButton=this._element.querySelector(".element__like-btn"),this._deleteButton=this._element.querySelector(".element__delete"),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._likeButton.addEventListener("click",(function(){e._handleLikeClick()})),this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick()}))}},{key:"_handleDeleteClick",value:function(){this._element.remove()}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),n.textContent=t,n.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():(this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._config.inactiveButtonClass))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this.disableButton()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._handleOverlayClose=this._handleOverlayClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("click",this._handleOverlayClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("click",this._handleOverlayClose)}},{key:"_handleOverlayClose",value:function(e){e.target===this._popup&&this.close()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){t.target.classList.contains("popup__close")&&e.close()}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__img"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImage.src=e,this._popupImage.alt=t,this._popupCaption.textContent=t,p(d(u.prototype),"open",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a),_=document.querySelector(".profile__btn"),m=(document.querySelector(".popup__close-profile"),document.querySelector(".popup_edit-profile")),v=(document.querySelector(".popup__form-profile"),document.querySelector(".popup__field_input_username"),document.getElementById("about"),document.getElementById("avatar-input")),b=document.querySelector(".profile__title"),S=document.querySelector(".profile__subtitle"),g=document.querySelector(".profile__avatar"),k=document.querySelector(".profile__btn-add"),w=(document.querySelector(".popup__close_place"),document.querySelector(".popup_new-place")),E=(document.querySelector("#place-template").content.querySelector(".element"),document.querySelector(".elements__container")),O=(document.querySelector(".popup__field_input_new-place"),document.querySelector(".popup__field_input_link-pic"),document.querySelector(".popup_big-img"),document.querySelector(".popup__img"),document.querySelector(".popup__caption"),document.querySelector(".popup__close_img"),document.querySelector(".popup__form-place"),document.querySelectorAll(".popup"),document.getElementById("addplace"),document.querySelector(".profile__avatar-btn")),C=document.querySelector(".popup__delete-card"),j=(document.querySelector(".element__delete"),{formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"popup__field_invalid",profileNameSelector:".profile__title",profileProfessionSelector:".profile__subtitle",profileAvatarSelector:".profile__avatar"});function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==P(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function q(e,t){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},q(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__field"),n._button=n._form.querySelector(".popup__button"),n._popupSubmitButton=n._popup.querySelector(".popup__button"),n._popupSubmitButtonTextDefault=n._popupSubmitButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;I(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault();var n=e._getInputValues();e._handleFormSubmit(n),e.close()}))}},{key:"close",value:function(){I(B(u.prototype),"close",this).call(this),this._form.reset()}},{key:"waitSubmitButton",value:function(e){this._popupSubmitButton.textContent=e?"Сохранение...":this._popupSubmitButtonTextDefault}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var D=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._about=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._name.textContent=t,this._about.textContent=n}},{key:"setAvatar",value:function(e){var t=e.avatar;this._avatar.srс=t}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==V(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var U=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){var n=e._renderer(t);e._container.append(n)}))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},J.apply(this,arguments)}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function z(e){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},z(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=z(r);if(o){var n=z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._deleteCardHandler=t,n._form=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;J(z(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._deleteCardHandler(e._cardId),e._popupDeleteYesButton.addEventListener("click",(function(t){t.preventDefault(),e._deleteCardHandler(e._cardId)}))}))}},{key:"open",value:function(e){var t=this;J(z(u.prototype),"open",this).call(this),this._cardId=e,this._form.addEventListener("submit",(function(e){e.preventDefault(),t._deleteCardHandler(t._cardId),t.close()}))}},{key:"close",value:function(){J(z(u.prototype),"close",this).call(this),this._form.reset()}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function Y(e){return Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==Y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==Y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===Y(o)?o:String(o)),r)}var o}var K=null,Q=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,r=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"addLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)})).then((function(e){t.renderLikes(e.likes)}))}},{key:"deleteLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)})).then((function(e){t.renderLikes(e.likes)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"editUserInfo",value:function(e){var t=this,n=e.name,r=e.profession;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"editAvatarUser",value:function(e){var t=this,n=e.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:n})}).then((function(e){return t._checkResponse(e)}))}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-63/",headers:{"Content-Type":"application/json",authorization:"6993a727-96ba-4996-a1f3-e62c6fb54cfd"}});Q.getUserInfo().then((function(e){K=e._id,Z.setUserInfo(e),Z.setAvatar(e)})),Q.getInitialCards().then((function(e){new U({items:e,renderer:function(e){return function(e){return new r(e,"#place-template",re,K,te).generateCard()}(e)}},E).renderItems()}));var W=new R(".popup_edit-avatar",(function(e){Z.setAvatar({avatar:v.values})}));O.addEventListener("click",(function(){W.open()})),W.setEventListeners();var X=new R(".popup_edit-profile",(function(e){var t;t=e,X.waitSubmitButton(!0),Q.editUserInfo({name:t.name,about:t.about}).then((function(e){Z.setUserInfo(e),X.close()})).catch((function(e){console.log(e)})).finally((function(){X.waitSubmitButton(!1)}))})),Z=new D({name:b,about:S,avatar:g});_.addEventListener("click",(function(){X.open()})),X.setEventListeners();var $=new R(".popup_new-place",(function(e){Q.addNewCard(e).then((function(e){cardList.addItem(cardElement)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}));k.addEventListener("click",(function(){$.open(),oe.disableButton()})),$.setEventListeners();var ee=new M(C,te);function te(){ee.open()}ee.setEventListeners();var ne=new h(".popup_big-img",(function(e){handleCloseImagePopupClick(e)}));function re(e,t){ne.open(t,e)}ne.setEventListeners(),O.addEventListener("click",(function(){W.open(),ie.disableButton()})),new u(j,m).enableValidation();var oe=new u(j,w);oe.enableValidation();var ie=new u(j,W);ie.enableValidation()})();