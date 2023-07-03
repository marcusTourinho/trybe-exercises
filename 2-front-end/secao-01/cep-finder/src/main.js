import './style.css';

const button = document.querySelector('button');
const input = document.querySelector('input');

const fetchAPI = async (cep) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  return console.log(data);
};

const handleSearch = (event) => {
  event.preventDefault();
  const cep = input.value;
  fetchAPI(cep);
};

button.addEventListener('click', handleSearch);
