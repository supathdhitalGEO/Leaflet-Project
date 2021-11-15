const map = L.map('map').setView([28.3949, 84.1240], 9);
const tileurl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tile = L.tileLayer((tileurl), { attribution });
tile.addTo(map);

// to generate markeup lets make function
function generatelist() {
    const ul = document.querySelector('.list');
    place.forEach((places) => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const a = document.createElement('a');
        const p = document.createElement('p');
a.addEventListener('click',() =>{
    flyToplace(places);
});
        div.classList.add('placelist');
        a.innerText = places.properties.Name;
        a.href = '#';
        p.innerText = places.properties.Address;
        div.appendChild(a);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);

    });
}

generatelist();
function makepopupcontent(places){
return   `
<div>
<h4>${places.properties.name}</h4>
<p>${places.properties.Address}</p> 
</div>
`
}

function onEachFeature(feature, layer){
    layer.bindPopup(makepopupcontent(feature));
    }
const placelayer = L.geoJSON(place,{
    onEachFeature : onEachFeature,
    pointToLayer : function(feature, latlng){
        return L.marker(latlng);
    }
});
placelayer.addTo(map);
function flyToplace(place1){
    map.flyTo([place1.geometry.coordinates[1], place1.geometry.coordinates[0]], 16);
}