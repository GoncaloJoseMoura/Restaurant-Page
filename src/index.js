import './style.css';

import GitIcon from './assets/logos/github-mark-white.png';
import MainLogo from './assets/logos/giordano1.png';

import home from './pages/home.js'
import contact from './pages/contact.js'
import menu from './pages/menu.js'
import about from './pages/about.js'

import { defineButton } from './pages/utility.js';

document.querySelector('nav img').src = MainLogo
document.querySelector('.github img').src = GitIcon
document.querySelector('#content').appendChild(home())

defineButton(document.querySelector('.button-home'), home());
defineButton(document.querySelector('.button-about'), about());
defineButton(document.querySelector('.button-contact'), contact());
defineButton(document.querySelector('.button-menu'), menu());
