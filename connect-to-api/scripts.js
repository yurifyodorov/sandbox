const app = document.getElementById('root');
const logo = document.createElement('img');

// задаю атрибут src для logo
logo.src = 'logo.png';

// создаю <div> c классом 'container'
const container = document.createElement('div');
container.setAttribute('class', 'container');

// с помощью appendChild() добавляю логотип и div-контейнер в корневой контейнер 'root'
app.appendChild(logo);
app.appendChild(container);

// переменной request назначаю новый объект XMLHttpRequest
const request = new XMLHttpRequest();

// открываю новое соединения с помощью open()
// в аргументах: тип запроса, URL конечной точки API
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function() {
  // доступ к данным внутри функции onload
  const data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      // с помощью textContent будут установлены данные из API
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    console.log('error');
  }
};

// Отправляю запрос
request.send();
