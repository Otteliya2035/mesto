export default class Api {
    constructor(options){
        this._url = options.url;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    //Получить карточки с сервера
    getInitialCards() {
        return fetch(`${this._url}/cards`, { headers: this._headers })
        .then((res) => this._checkResponse(res))
    }

    //Добавить новую карточку места на сервер
    addNewCard({ name, link }) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then((res) => this._checkResponse(res))
    }

  //Удалить карточку места

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers,
    })
    .then((res) => this._checkResponse(res))
}

 //Поставить лайк карточке

 addLikeCard(_id) {
    return fetch(`${this._url}/cards/likes/${_id}`, {
        method: 'PUT',
        headers: this._headers,
    })
    .then((res) => this._checkResponse(res))
    .then((data) => {
        this.renderLikes(data.likes);
    })
  }

//Удалить лайк карточки

deleteLikeCard(_id) {
    return fetch(`${this._url}/cards/likes/${_id}`, {
        method: 'DELETE',
        headers: this._headers,
    })
    .then((res) => this._checkResponse(res))
    .then((data) => {
        this.renderLikes(data.likes);
    })
  }

//Получить данные пользователя

getUserInfo() {
    return fetch(`${this._url}/users/me`, { headers: this._headers })
    .then((res) => this._checkResponse(res))
}

//Отредактировать данные пользователя

editUserInfo({ name, profession }) {
    return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            name: name,
            about: profession
        })
    })
    .then((res) => this._checkResponse(res))
}

//Отредактировать аватар пользователя

editAvatarUser({ avatar }) {
    return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            avatar: avatar
        })
    })
    .then((res) => this._checkResponse(res))
}
}

