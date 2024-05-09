function reset(new_div) {

    const content = document.querySelector('#content')
    content.innerHTML = '';
    content.appendChild(new_div)

}

function defineButton(button, func) {

    button.addEventListener('click', () => {
        reset(func)
    })
}

export {defineButton, reset}