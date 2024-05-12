import AboutPic from '../assets/filler/about.JPG';
import Journalist from '../assets/filler/profile_picture.JPG';

import CommunityLogo from '../assets/logos/community-people-friends-group-svgrepo-com.svg';
import CowLogo from '../assets/logos/cow-animals-svgrepo-com.svg';
import healthLogo from '../assets/logos/health-care-healthcare-health-service-health-clinic-svgrepo-com.svg';
import TreeLogo from '../assets/logos/tree-svgrepo-com.svg';

import './about.css';

function about() {

    const div = document.createElement('div')
    div.classList = 'about'

    div.innerHTML = `
    <div class="bg-info">

        <div class="about-info">

            <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias saepe quidem totam placeat maiores, reiciendis perspiciatis porro exercitationem, eligendi repudiandae tenetur temporibus debitis voluptatibus omnis veritatis. Cupiditate, perferendis eaque?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, sapiente perspiciatis eaque dolor eos, reiciendis ullam quas atque fugit dicta velit fuga asperiores voluptatum saepe omnis iste iure quam sit.</p>
                <button>Learn More</button>
            </div>
            <img src="./assets/about.JPG" alt="">

        </div>

        
    </div>

    <div class="mission">
        <h1>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint placeat, temporibus praesentium officiis veritatis iusto aut hic esse rem non maiores libero, repudiandae aliquid repellendus nisi facere animi tempora!</p>

        <div class="reasons">

            <ul>
                <li>
                    <img src="./assets/person.png" alt="">
                    <h3>Health</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
                </li>
                <li>
                    <img src="./assets/person.png" alt="">
                    <h3>Animals</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="./assets/person.png" alt="">
                    <h3>Enviroment</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
                </li>
                <li>
                    <img src="./assets/person.png" alt="">
                    <h3>People</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi voluptatum sequi, magni eos sed. Corporis, aspernatur maxime ea, sunt error, alias eum natus consectetur placeat dolores id laborum quaerat!</p>
                </li>
            </ul>

        </div>
    </div>

    <div class="reviews">

        <h1>Journalist's Reviews</h1>

        <div class="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eos assumenda laboriosam blanditiis autem ea, nihil ipsam? Error saepe enim alias quod assumenda velit debitis impedit delectus, qui doloremque?</p>
            <img src="./assets/profile_picture.JPG" alt="">
            <span>Name - Company</span>
        </div>

        <div class="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eos assumenda laboriosam blanditiis autem ea, nihil ipsam? Error saepe enim alias quod assumenda velit debitis impedit delectus, qui doloremque?</p>
            <img src="./assets/profile_picture.JPG" alt="">
            <span>Name - Company</span>
        </div>

        <div class="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum eos assumenda laboriosam blanditiis autem ea, nihil ipsam? Error saepe enim alias quod assumenda velit debitis impedit delectus, qui doloremque?</p>
            <img src="./assets/profile_picture.JPG" alt="">
            <span>Name - Company</span>
        </div>

    </div>

    `
    const about_img = div.querySelector('.about-info img')
    about_img.src = AboutPic
    about_img.loading = "lazy"

    const logos = [healthLogo, CowLogo, TreeLogo, CommunityLogo]

    for (let i = 0; i < 4; ++i) {
        div.querySelectorAll('li img')[i].src = logos[i]
    }

    div.querySelectorAll('.card img').forEach((value) => {
        value.src = Journalist
        value.loading = "lazy"
    })

    return div

}

export default about;