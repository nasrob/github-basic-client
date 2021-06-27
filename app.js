import axios from 'axios'

// when dom is available
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')

    form.addEventListener('submit', event => {
        event.preventDefault() // prevent the default behavior (the page reload)
        const username = document.querySelector('input').value
        alert(username)
    })
})