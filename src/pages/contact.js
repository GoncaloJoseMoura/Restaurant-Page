import Location from '../assets/filler/location.JPG';
import './contact.css';

function contact() {

    const div = document.createElement('div')
    div.classList = 'contacts'

    div.innerHTML = `
    <div class="bg-info">

        <div class="contacts-info">

            <div>
                <h3>Address</h3>
                <p>Av. de la Bourdonnais, 75007 Paris, France</p>
                <img src="./assets/location.JPG" alt="">
            </div>


            <form action="">
                <h3>Contact Form</h3>
                <ul>
                    <li>
                        <label for="name">Name:</label>
                        <input type="text" name="name" id="name" required>
                    </li>
                    <li>
                        <label for="email">Email:</label>
                        <input type="text" name="email" id="email" required>
                    </li>
                    <li>
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" rows="8" cols="33" maxlength="250" spellcheck="true" required></textarea>
                    </li>
                    <li></li>
                </ul>
                <button type="button">Send</button>
            </form>

        </div>
        
    </div>
    `

    div.querySelectorAll('div img').forEach((value) => {
        value.src = Location
    })


    return div

}

export default contact