import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const btn = document.querySelector('button');
const pass = document.querySelector('h2');

btn.addEventListener('click', () => {
  const randomPassword = nanoid();
  pass.innerHTML = randomPassword;
});

pass.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
});
