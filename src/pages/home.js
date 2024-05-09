import './home.css';
import { defineButton } from './utility';
import menu from './menu';

function home() {
    const div = document.createElement('div')
    div.className = 'home'

    const bg_home = document.createElement('div')
    bg_home.className = 'bg-home'
    div.appendChild(bg_home)

    
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const button = document.createElement('button')

    h1.textContent = 'Welcome to Vegan Scoop'
    p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus nihil sapiente totam provident consequuntur doloribus corrupti expedita eligendi deleniti consectetur deserunt est, aliquid odio quidem nulla quod. Quis, ducimus!'
    button.textContent = 'Order Now'

    defineButton(button, menu())

    bg_home.appendChild(h1)
    bg_home.appendChild(p)
    bg_home.appendChild(button)

    return div
}

export default home