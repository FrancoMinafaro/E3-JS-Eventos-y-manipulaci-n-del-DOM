const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

function realizarBusqueda() {
  const numero = parseInt(document.getElementById('numero').value);

  const resultadoContainer = document.getElementById('resultado');
  resultadoContainer.innerHTML = '';  

  if (isNaN(numero)) {
    mostrarError('Por favor, ingresa un número válido.');
    return;
  }

  const pizzaEncontrada = pizzas.find(pizza => pizza.id === numero);

  if (pizzaEncontrada) {
    renderizarPizza(pizzaEncontrada);
    guardarUltimaPizzaBuscada(pizzaEncontrada);
  } else {
    mostrarError('No se encontró una pizza con ese número.');
  }
}

function mostrarError(mensaje) {
  const resultadoContainer = document.getElementById('resultado');
  resultadoContainer.innerHTML = `<p>${mensaje}</p>`;
}

function renderizarPizza(pizza) {
  const resultadoContainer = document.getElementById('resultado');

  const pizzaCard = document.createElement('div');
  pizzaCard.classList.add('card');

  pizzaCard.innerHTML = `
    <h3>${pizza.nombre}</h3>
    <img src="${pizza.imagen}" alt="${pizza.nombre}">
    <p>Precio: $${pizza.precio}</p>
  `;

  resultadoContainer.appendChild(pizzaCard);
}

function guardarUltimaPizzaBuscada(pizza) {
  localStorage.setItem('ultimaPizzaBuscada', JSON.stringify(pizza));
}

// Cargar la última pizza buscada al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const ultimaPizzaBuscada = JSON.parse(localStorage.getItem('ultimaPizzaBuscada'));
  if (ultimaPizzaBuscada) {
    renderizarPizza(ultimaPizzaBuscada);
  }
});

function renderizarPizza(pizza) {
  const resultadoContainer = document.getElementById('resultado');

  const pizzaCard = document.createElement('div');
  pizzaCard.classList.add('card');

  pizzaCard.innerHTML = `
    <h3>${pizza.nombre}</h3>
    <img src="${pizza.imagen}" alt="${pizza.nombre}">
    <p>Precio: $${pizza.precio}</p>
    <h4>Ingredientes:</h4>
    <ul>
      ${pizza.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
    </ul>
  `;

  resultadoContainer.appendChild(pizzaCard);
}