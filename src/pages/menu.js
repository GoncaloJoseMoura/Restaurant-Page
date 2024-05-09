import data from '../assets/data.js';
import './menu.css';

function menu() {

    const div = document.createElement('div')
    div.classList = 'menu'

    div.innerHTML = `
    
    <div class="bg-info">

        <div class="inside-card">

            <h1>Menu</h1>

            <div class="card-list"></div>

            <button type="button">View More</button>

        </div>  
    </div>
    `

    div.querySelectorAll('.card img').forEach((value) => {
        value.src = Journalist
    })

    const card_list = div.querySelector('.card-list')


    data.forEach((value) => {

        const card = document.createElement('div')
        card.className = 'card'

        const img = document.createElement('img')
        img.src = value.image

        const card_div = document.createElement('div')

        const card_div_h3 = document.createElement('h3')
        card_div_h3.textContent = value.title

        const card_div_span = document.createElement('span')
        card_div_span.textContent = value.price

        const card_div_p = document.createElement('p')
        card_div_p.textContent = value.ingredients

        const card_div_button = document.createElement('button')
        card_div_button.textContent = 'Add'

        card_div.appendChild(card_div_h3)
        card_div_h3.appendChild(card_div_span)
        card_div.appendChild(card_div_p)
        card_div.appendChild(card_div_button)

        card.appendChild(img)
        card.appendChild(card_div)

        card_list.appendChild(card)

    })

    return div
    
}

export default menu;