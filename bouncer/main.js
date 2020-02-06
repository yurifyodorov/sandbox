function loadData() {
  getGoods();
}

const productCardsHolder = document.querySelector('#product-cards-holder');
let loadedCardsCount = 0, cardsPerPage = 8, areCardsLoaded = false, isNothingToLoad = false;
let cardsFormServer = [];

function renderProductCard(item) {
  const newCard = `
      <div class="product-card">
          <span class="hot-icon">hot</span>
          <img class="product-image" src="img/macbook-pro.svg" alt="macbook-pro">
          <div class="product-controls">
              <button class="like"></button>
              <button class="add-to-cart"></button>
          </div>
          <div class="product-title">${item.name}</div>
          <div class="product-rating">
              <span class="star active"></span>
              <span class="star active"></span>
              <span class="star active"></span>
              <span class="star active"></span>
              <span class="star"></span>
              <span>${item.rating}</span>
          </div>
          <div class="product-price">
              <span class="new-price">$${item.price * 0.666}</span>
              <span class="old-price">$${item.price}</span>
          </div>
      </div>
  `;

  productCardsHolder.innerHTML += newCard;
}

function getGoods() {
  if (areCardsLoaded) {
    addCardsToHolder();
  } else {
    sendRequest('GET', 'http://127.0.0.1:3000/goods') // не получилось 'http://yuryfyodorov.github.io/bouncer/goods' ("причина: блокируются скрипты")
      .then(cardsArray => {
          areCardsLoaded = true;
          cardsFormServer = cardsArray;
          addCardsToHolder();
      })
      .catch(error => console.error(error));
  }
}

function sendRequest(method = 'POST', url = '', data) {
  // Значения по умолчанию обозначены знаком *
  return fetch(url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      body: data ? JSON.stringify(data) : undefined, // тип данных в body должен соответвовать значению заголовка "Content-Type"
  })
  .then(response => response.json())
  .catch(error => console.log(error)); // парсит JSON ответ в Javascript объект
}

function addCardsToHolder() {
  if (isNothingToLoad) return;

  let arrayToRender = cardsFormServer.slice(
      cardsPerPage * loadedCardsCount, 
      cardsPerPage * (loadedCardsCount + 1));
  arrayToRender.forEach(x => renderProductCard(x));
  loadedCardsCount++;
  if (cardsPerPage * loadedCardsCount > cardsFormServer.length) {
      isNothingToLoad = true;
  }
}