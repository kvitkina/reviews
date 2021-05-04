export class Card {
  constructor({ data }, elementsTemplate) {
    this._photo = data.photo
    this._name = data.name
    this._status = data.status
    this._color = data.color
    this._flag = data.flag
    this._country = data.country
    this._date = data.date
    this._star = data.star
    this._comments = data.comments
    this._company = data.company
    this._plus = data.plus
    this._minus = data.minus
    this._up = data.up
    this._down = data.down
    this._downColor = data.dowmColor
    this._elementsTemplate = elementsTemplate
  }

  _getTemplate () {
    const cardElement = document.querySelector(this._elementsTemplate).content.querySelector('.review').cloneNode(true)
    return cardElement
  }

  generateCard () {
    this._element = this._getTemplate()

    const status = this._element.querySelector('.review__status')
    this._element.querySelector('.review__person-photo').src = this._photo
    this._element.querySelector('.review__name').textContent = this._name
    status.textContent = this._status
    this._element.querySelector('.review__country-icon').src = this._flag
    this._element.querySelector('.review__text_country').textContent = this._country
    this._element.querySelector('.review__caption_date').textContent = this._date
    this._element.querySelector('.review__rating-value').textContent = this._star
    this._element.querySelector('.review__caption_comments').textContent = this._comments
    this._element.querySelector('.review__text_company').textContent = this._company
    this._element.querySelector('.review__comments-text_plus').textContent = this._plus
    this._element.querySelector('.review__comments-text_minus').textContent = this._minus
    this._element.querySelector('.review__thumb-value_up').textContent = this._up
    this._element.querySelector('.review__thumb-value_down').textContent = this._down
    
    if(this._color === 'red') {
      status.classList.add('review__status_blocked')
    } else {
      status.classList.remove('review__status_blocked')
    }

    return this._element
  }
}
