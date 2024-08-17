import L from 'leaflet'
import { validateIp, addTileLayer } from './helpers/index.js'

import icon from '../images/icon-location.svg'


const ipInput = document.querySelector('.search-bar__input')
const btn = document.querySelector('button')

btn.addEventListener('click', getData)
ipInput.addEventListener('keydown', handleKey)

const ipInfo = document.querySelector('#ip')
const locationInfo = document.querySelector('#location')
const timezoneInfo = document.querySelector('#timezone')
const ispInfo = document.querySelector('#isp')

const mapArea = document.querySelector('.map')


// initialize the map on the "map" div with a given center and zoom - code from docu
const map = L.map(mapArea, {
    center: [51.505, -0.09],
    zoom: 13,
})

// receive data via API
function getData(){
    /**
     * apiKey received when registering on the geo.ipify.org website
     */

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
    /**
     * data received from output json are set into the HTML template
     */

    console.log(mapData)
    ipInfo.innerHTML = mapData.ip
    locationInfo.innerHTML = mapData.location.country + ", " + mapData.location.region
    timezoneInfo.innerHTML = mapData.location.timezone
    ispInfo.innerHTML = mapData.isp
}

addTileLayer(map)
L.marker([51.505, -0.09])

// create an own icon - based on the code from leaflet docu
const markerIcon = L.icon({
    iconUrl: icon,
    iconSize:     [30, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


// put a marker with this icon on a map:
L.marker([51.5, -0.09], {icon: markerIcon}).addTo(map);