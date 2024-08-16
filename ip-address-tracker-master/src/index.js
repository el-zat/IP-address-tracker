import { validateIp } from './helpers/index.js'

const ipInput = document.querySelector('.search-bar__input')
const btn = document.querySelector('button')

btn.addEventListener('click', getData)
ipInput.addEventListener('keydown', handleKey)



function getData(){

    if (validateIp(ipInput.value)) {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_HGmGYtc5clmlXfeTWrt4VyIFKA4mY&ipAddress=${ipInput.value}`)
        .then((response) => response.json())
        .then(console.log)

        console.log(ipInput.value)
    }

}

function handleKey(event) {
    if (event.key === 'Enter') {
        getData()
    }
}

