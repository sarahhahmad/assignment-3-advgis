

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWhoYWhtYWQiLCJhIjoiY2x1bHU0NDdxMDBtcTJqb3lwcDAyM3NpMSJ9.LtM9x5jiBhMAt00hdlBVyw';

var mapOptions = {
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/dark-v11', // dark basemap
    center: [-73.99661, 40.73445], // starting position [lng, lat]
    zoom: 9.9, // starting zoom,
}

// instantiate the map
const map = new mapboxgl.Map(mapOptions);

// add a navitation control
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

// loop over the cltData array to make a marker for each record
cltData.forEach(function (cltRecord) {

    var color

    // use if statements to assign colors based on cltData.landstatus
    if (cltRecord.landstatus === 'Advocating for Land') {
        color = '#C95D63'
    }
    if (cltRecord.landstatus === 'Land Transfer in Process') {
        color = '#AE8799'
    }
    if (cltRecord.landstatus === 'Has Land') {
        color = '#717EC3'
    }
    


    // create a popup to attach to the marker
    const popup = new mapboxgl.Popup({
        offset: 24,
        anchor: 'bottom'
    }).setText(
        `${cltRecord.communitylandtrust}`
    );

    // create a marker, set the coordinates, add the popup, add it to the map
    new mapboxgl.Marker({
        scale: 0.65,
        color: color
    })
        .setLngLat([cltRecord.longitude, cltRecord.latitude])
        .setPopup(popup)
        .addTo(map);
})
