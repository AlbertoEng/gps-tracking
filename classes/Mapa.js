import mapboxgl from 'mapbox-gl';

class Mapa {

    constructor(container, style, posicion){
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0b2VuZzA4IiwiYSI6ImNrNmVsZTU1aDF5cjMzZnFqMjR4YTVmOWMifQ.InAhlSX15h0QQI-ZBguwLg';
        const mapa =  new mapboxgl.Map({
            container: container, // container id 'map'
            style: style, // style URL  'mapbox://styles/mapbox/streets-v11'
            center: posicion, // starting position [lng, lat]
            zoom: 12// starting zoom
        });
        return mapa;
    }

}

export default Mapa;