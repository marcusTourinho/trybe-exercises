import "./style.css";

const dog = document.querySelector("#random-dog");
const cat = document.querySelector("#random-cat");
const surprise = document.querySelector("#surprise-me");
const random = document.querySelector("#random-pet-image");

dog.addEventListener('click', () => {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(data => {
    const petURL = data.message;
    random.src = petURL;
  });
});

cat.addEventListener('click', () => {
  fetch("https://api.thecatapi.com/v1/images/search")
  .then(res => res.json())
  .then(([data]) => {
    const petURL = data.url
    random.src = petURL;
  })
});

surprise.addEventListener('click', () => {
  Promise.any([
    fetch("https://dog.ceo/api/breeds/image/random"),
    fetch("https://api.thecatapi.com/v1/images/search"),
  ])
  .then(res => res.json())
  .then(data => {
    const petURL = data.message || data[0].url;
    random.src = petURL;
  })
});
