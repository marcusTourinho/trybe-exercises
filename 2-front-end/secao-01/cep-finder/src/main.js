import './style.css';

const button = document.querySelector('button');
const input = document.querySelector('input');
const pre = document.querySelector('pre');

const fetchAPI = async (cep) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  pre.innerHTML = JSON.stringify(data);
};

const handleSearch = (event) => {
  event.preventDefault();
  const cep = input.value;
  try {
    fetchAPI(cep);
  } catch (error) {
    pre.innerHTML = '';
    return error.message;
  }
};

button.addEventListener('click', handleSearch);
