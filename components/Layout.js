import React,{ useEffect} from 'react'
import Head from 'next/head';

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';




const Layout = ({children}) => {


    
    useEffect(()=>{
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0b2VuZzA4IiwiYSI6ImNrNmVsZTU1aDF5cjMzZnFqMjR4YTVmOWMifQ.InAhlSX15h0QQI-ZBguwLg';
            const map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [ -104.34426223239404,19.116391282496753], // starting position [lng, lat] 19.116391282496753, -104.34426223239404
                zoom: 15 // starting zoom
            });

            map.on('click', (e)=>{
                let coordenadasMarcador = Object.values(e.lngLat);
                let marcador = new mapboxgl.Marker()
                    .setLngLat(coordenadasMarcador)
                    .setPopup(new mapboxgl.Popup().setHTML(`<h1>MArcador</h1>`)) // add popup
                    .addTo(map);
                console.log(marcador.getLngLat())
                console.log(coordenadasMarcador)
            })  
    },[])

    


    return (  
        <>
        <Head>
            <title>GPS - DEVTECH</title>
        </Head>
        <div id='map' className='h-screen w-full relative'>
            {children}
        </div>
        </>
    );
}
 
export default Layout;