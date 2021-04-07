import React from 'react';
import ReactDOM from 'react-dom';

/* //Crear un elemento en el DOM con JSX vs Sin JSX
const jsx = <h1>Hello, Platzi Badges!</h1>;
const element = React.createElement(
  'a',
  {href: 'https://www.atlassian.com/'},
  'Ir a Atlassian'
)

//Pasar parametros a elementos con JSX vs Sin JSX
const name = 'Juan'
const element = React.createElement(
  'h1',
  {},
  `Hola, soy ${name}`
)
const jsx = <h1>Hola, soy ${name}</h1> */


//Anidar elementos con JSX vs Sin JSX
const jsx = (
  <div>
    <h1>Hola soy droal</h1>
    <p>Soy desarrollador</p>
  </div>
)

const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Hola soy droal'),
  React.createElement('p', {}, 'Soy desarrollador'),
)

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
