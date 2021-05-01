import '../pages/index.scss';
import { Card } from './Card';
import { Section } from './Section';
import { array } from './array';
const elementsList = document.querySelector('.reviews__list');

//создание карточки
const createCardFunction = (data) => {
    const card = new Card({data,
    }, '.reviews__template')
    const element = card.generateCard()
    cardsList.addItem(element)
  }
  
  //создание экземпляра класса для отрисовки карточек на странице
  const cardsList = new Section ({
    renderer: (data => {
    createCardFunction(data)
    })
  }, elementsList)

  cardsList.renderItems(array)