import validator from 'validator';
import './style.css';

const text = document.querySelector('#value');
const button = document.querySelector('#button');
const select = document.querySelector('#options');
const answer = document.querySelector('#answer');

button.addEventListener('click', (event) => {
  event.preventDefault();
  const campos = {
    cpf: validator.isTaxID(text.value, 'pt-BR'),
    email: validator.isEmail(text.value),
    rgb: validator.isRgbColor(text.value),
    url: validator.isURL(text.value),
    date: validator.isDate(text.value),
  };
  if (campos[select.value] === true) {
    answer.innerHTML = `${select.value} válido`;
  } else {
    answer.innerHTML = `${select.value} inválido`;
  }
});
