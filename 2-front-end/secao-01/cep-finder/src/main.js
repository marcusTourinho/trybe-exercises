import Swal from 'sweetalert2';
import './style.css';

const button = document.querySelector('button');
const input = document.querySelector('input');
const pre = document.querySelector('pre');

const fetchAPI = async (cep) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  if (data.erro) throw new Error('Erro de cep inválido');
  pre.innerHTML = JSON.stringify(data);
  return data;
};

const handleSearch = async () => {
  const cep = input.value;
  try {
    await fetchAPI(cep);
  } catch (error) {
    pre.innerHTML = '';
    Swal.fire('Ops', error.message, 'error');
  }
};

button.addEventListener('click', handleSearch);
