// const element = document.createElement('h1')
// element.innerText = 'Hello, Platzi Badges!'

// const container = document.getElementById('app')

// container.appendChild(element)

// const jsx = <h1>Hello, Chuck from react</h1>
// siempre que escribamos JSX poner import react e import ReactDOM
// const element = React.createElement(
//     'a', 
//     { href: 'https://platzi.com' }, 
//     'ir a platzi.com');
// const name = 'Ricardo'
// const apellido = 'Valles'
// const element = React.createElement('h1', {}, `Hola, soy ${name}${apellido}`);
// const sum = () => 3 + 3 
// const jsx = (
//     <div>
//         <h1>Hola, soy Chuck</h1>
//         <p>Soy ingeniero frontend.</p>
//     </div>
// );

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola, soy Chuck'),
//     React.createElement('p', {}, 'Soy ingeniero de la web'),
// );
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgeNew from './pages/BadgeNew';


const container = document.getElementById('app');

// ReactDOM.render(_qué_ ,_donde_);
ReactDOM.render(<BadgeNew />, container);