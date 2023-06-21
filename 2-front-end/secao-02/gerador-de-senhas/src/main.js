import { nanoid } from 'nanoid';
import './style.css';

const btn = document.querySelector('button');
const pass = document.querySelector('h2');

btn.addEventListener('click', () => {
  const randomPassword = nanoid();
  pass.innerHTML = randomPassword;
});
