import { validateIp } from './helpers/index.js'

const ipInput = document.querySelector('.search-bar__input')
const btn = document.querySelector('button')

btn.addEventListener('click', getData)
ipInput.addEventListener('keydown', handleKey)

const ipInfo = document.querySelector('#ip')
const locationInfo = document.querySelector('#location')
const timezoneInfo = document.querySelector('#timezone')
const ispInfo = document.querySelector('#isp')



function getData(){

    if (validateIp(ipInput.value)) {
        fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_HGmGYtc5clmlXfeTWrt4VyIFKA4mY&ipAddress=${ipInput.value}`)
        .then(response => response.json())
        .then(data => setInfo(data))

        console.log(ipInput.value)
    }

}

function handleKey(event) {
    if (event.key === 'Enter') {
        getData()
    }
}

function setInfo(mapData) {
    console.log(mapData)
    ipInfo.innerHTML = mapData.ip
    locationInfo.innerHTML = mapData.location.country + ", " + mapData.location.region
    timezoneInfo.innerHTML = mapData.location.timezone
    ispInfo.innerHTML = mapData.isp
}

