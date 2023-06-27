import Swal from 'sweetalert2';
import './style.css';

const currency = document.querySelector('#currency');
const button = document.querySelector('#button');
const list = document.querySelector('#currency-list');
const title = document.querySelector('#currency-title');

const BASE_URL = 'https://api.exchangerate.host/latest?base=';

const fetchAPI = (coin) => {
  return fetch(`${BASE_URL}${coin}`)
    .then((res) => res.json())
    .then((data) => data.rates);
};

const renderCoins = (coins) => {
  list.innerHTML = '';
  const coinsArray = Object.entries(coins);
  const limit = 3;

  coinsArray.forEach((coin) => {
    const [coinName, coinValue] = coin;

    const li = document.createElement('li');
    li.innerHTML = `${coinName} - ${coinValue.toFixed(limit)}`;
    li.classList.add('coin');
    list.appendChild(li);
  });
  console.log(coinsArray);
};

const handleSearch = () => {
  const coin = currency.value;
  title.innerHTML = `Valores referentes a 1 ${coin}`;
  fetchAPI(coin)
    .then(renderCoins);
};

button.addEventListener('click', handleSearch);
