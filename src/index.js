import './style.css';

// import data from './assets/data.json';
// import data from './assets/data.js';

import GitIcon from './assets/logos/github-mark-white.png';
import MainLogo from './assets/logos/giordano1.png';

// import AboutPic from './assets/filler/about.JPG';
// import Journalist from './assets/filler/profile_picture.JPG';
// import Location from './assets/filler/location.JPG';

// import CommunityLogo from './assets/logos/community-people-friends-group-svgrepo-com.svg';
// import CowLogo from './assets/logos/cow-animals-svgrepo-com.svg';
// import healthLogo from './assets/logos/health-care-healthcare-health-service-health-clinic-svgrepo-com.svg';
// import TreeLogo from './assets/logos/tree-svgrepo-com.svg';

import home from './pages/home.js'
import contact from './pages/contact.js'
import menu from './pages/menu.js'
import about from './pages/about.js'

import { defineButton } from './pages/utility.js';

// function home() {
//     const div = document.createElement('div')
//     div.className = 'home'

//     const bg_home = document.createElement('div')
//     bg_home.className = 'bg-home'
//     div.appendChild(bg_home)

    
//     const h1 = document.createElement('h1')
//     const p = document.createElement('p')
//     const button = document.createElement('button')

//     h1.textContent = 'Welcome to Vegan Scoop'
//     p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, minus nihil sapiente totam provident consequuntur doloribus corrupti expedita eligendi deleniti consectetur deserunt est, aliquid odio quidem nulla quod. Quis, ducimus!'
//     button.textContent = 'Order Now'

//     defineButton(button, menu())

//     bg_home.appendChild(h1)
//     bg_home.appendChild(p)
//     bg_home.appendChild(button)

//     return div
// }

// function about() {

//     const div = document.createElement('div')
//     div.classList = 'about'

//     div.innerHTML = `
//     <div class="bg-info">

//         <div class="about-info">

//             <div>
//                 <h1>About</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias saepe quidem totam placeat maiores, reiciendis perspiciatis porro exercitationem, eligendi repudiandae tenetur temporibus debitis voluptatibus omnis veritatis. Cupiditate, perferendis eaque?</p>
//                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, sapiente perspiciatis eaque dolor eos, reiciendis ullam quas atque fugit dicta velit fuga asperiores voluptatum saepe omnis iste iure quam sit.</p>
//                 <button>Learn More</button>
//             </div>
//             <img src="./assets/about.JPG" alt="">

//         </div>

        
//     </div>

//     <div class="mission">
//         <h1>Our Mission</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint placeat, temporibus praesentium officiis veritatis iusto aut hic esse rem non maiores libero, repudiandae aliquid repellendus nisi facere animi tempora!</p>

//         <div class="reasons">

//             <ul>
//                 <li>
//                     <img src="./assets/person.png" alt="">
//                     <h3>Health</h3>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
//                 </li>
//                 <li>
//                     <img src="./assets/person.png" alt="">
//                     <h3>Animals</h3>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
//                 </li>
//             </ul>
//             <ul>
//                 <li>
//                     <img src="./assets/person.png" alt="">
//                     <h3>Enviroment</h3>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
//                 </li>
//                 <li>
//                     <img src="./assets/person.png" alt="">
//                     <h3>People</h3>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
//                 </li>
//             </ul>

//         </div>
//     </div>

//     <div class="reviews">

//         <h1>Journalist's Reviews</h1>

//         <div class="card">
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eos assumenda laboriosam blanditiis autem ea, nihil ipsam? Error saepe enim alias quod assumenda velit debitis impedit delectus, qui doloremque?</p>
//             <img src="./assets/profile_picture.JPG" alt="">
//             <span>Name - Company</span>
//         </div>

//         <div class="card">
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eos assumenda laboriosam blanditiis autem ea, nihil ipsam? Error saepe enim alias quod assumenda velit debitis impedit delectus, qui doloremque?</p>
//             <img src="./assets/profile_picture.JPG" alt="">
//             <span>Name - Company</span>
//         </div>

//         <div class="card">
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eos assumenda laboriosam blanditiis autem ea, nihil ipsam? Error saepe enim alias quod assumenda velit debitis impedit delectus, qui doloremque?</p>
//             <img src="./assets/profile_picture.JPG" alt="">
//             <span>Name - Company</span>
//         </div>

//     </div>

//     `

//     div.querySelector('.about-info img').src = AboutPic

//     const logos = [healthLogo, CowLogo, TreeLogo, CommunityLogo]

//     for (let i = 0; i < 4; ++i) {
//         div.querySelectorAll('li img')[i].src = logos[i]
//     }

//     div.querySelectorAll('.card img').forEach((value) => {
//         value.src = Journalist
//     })

//     return div

// }

// function contact() {

//     const div = document.createElement('div')
//     div.classList = 'contacts'

//     div.innerHTML = `
//     <div class="bg-info">

//         <div class="contacts-info">

//             <div>
//                 <h3>Address</h3>
//                 <p>Av. de la Bourdonnais, 75007 Paris, France</p>
//                 <img src="./assets/location.JPG" alt="">
//             </div>


//             <form action="">
//                 <h3>Contact Form</h3>
//                 <ul>
//                     <li>
//                         <label for="name">Name:</label>
//                         <input type="text" name="name" id="name" required>
//                     </li>
//                     <li>
//                         <label for="email">Email:</label>
//                         <input type="text" name="email" id="email" required>
//                     </li>
//                     <li>
//                         <label for="message">Message:</label>
//                         <textarea id="message" name="message" rows="8" cols="33" maxlength="250" spellcheck="true" required></textarea>
//                     </li>
//                     <li></li>
//                 </ul>
//                 <button type="button">Send</button>
//             </form>

//         </div>
        
//     </div>
//     `

//     div.querySelectorAll('div img').forEach((value) => {
//         value.src = Location
//     })


//     return div

// }

// function menu() {

//     const div = document.createElement('div')
//     div.classList = 'menu'

//     div.innerHTML = `
    
//     <div class="bg-info">

//         <div class="inside-card">

//             <h1>Menu</h1>

//             <div class="card-list"></div>

//             <button type="button">View More</button>

//         </div>  
//     </div>
//     `

//     div.querySelectorAll('.card img').forEach((value) => {
//         value.src = Journalist
//     })

//     const card_list = div.querySelector('.card-list')


//     data.forEach((value) => {

//         const card = document.createElement('div')
//         card.className = 'card'

//         const img = document.createElement('img')
//         img.src = value.image

//         const card_div = document.createElement('div')

//         const card_div_h3 = document.createElement('h3')
//         card_div_h3.textContent = value.title

//         const card_div_span = document.createElement('span')
//         card_div_span.textContent = value.price

//         const card_div_p = document.createElement('p')
//         card_div_p.textContent = value.ingredients

//         const card_div_button = document.createElement('button')
//         card_div_button.textContent = 'Add'

//         card_div.appendChild(card_div_h3)
//         card_div_h3.appendChild(card_div_span)
//         card_div.appendChild(card_div_p)
//         card_div.appendChild(card_div_button)

//         card.appendChild(img)
//         card.appendChild(card_div)

//         card_list.appendChild(card)

//     })

//     return div
    
// }

// function reset(new_div) {

//     content.innerHTML = '';
//     content.appendChild(new_div)

// }

// function defineButton(button, func) {

//     button.addEventListener('click', () => {
//         reset(func)
//     })
// }

document.querySelector('nav img').src = MainLogo
document.querySelector('.github img').src = GitIcon
document.querySelector('#content').appendChild(home())

defineButton(document.querySelector('.button-home'), home());
defineButton(document.querySelector('.button-about'), about());
defineButton(document.querySelector('.button-contact'), contact());
defineButton(document.querySelector('.button-menu'), menu());
