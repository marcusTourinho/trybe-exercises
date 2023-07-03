import Swal from 'sweetalert2';
import { fetchAPI } from './getCep';
import './style.css';

const button = document.querySelector('button');
const input = document.querySelector('input');
const pre = document.querySelector('pre');

const handleSearch = async () => {
  const cep = input.value;

  try {
    const data = await fetchAPI(cep);
    pre.innerHTML = JSON.stringify(data);
  } catch (error) {
    pre.innerHTML = '';
    Swal.fire('Ops', error.message, 'error');
  }
};

button.addEventListener('click', handleSearch);
