import L from 'leaflet'

// add an OpenStreetMap tile layer to add to the map - code from leaftet docu:
export function addTileLayer(map) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Challenge by < href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor. Coded by <a href="#">E.Zatykina</a>'
    }).addTo(map);
}

