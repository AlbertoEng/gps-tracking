import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import Head from 'next/head';
import Header from '../components/Header';
import Aside from './Aside'
import Section from './Section';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0b2VuZzA4IiwiYSI6ImNrNmVsZTU1aDF5cjMzZnFqMjR4YTVmOWMifQ.InAhlSX15h0QQI-ZBguwLg';

const Layout = ({children}) => {

    const [vehiculos, setVehiculos] = useState([]);
    const [mapa, setMapa] = useState(null)
    const [temaMapa, setTemaMapa] = useState('mapbox://styles/mapbox/satellite-streets-v11');

    const reqVehiculos = async ()=>{
        const resp = await axios.get('http://localhost:3004/vehiculos');
        setVehiculos(resp.data);
    }

    useEffect(() => {
        reqVehiculos();
        const newMap =  new mapboxgl.Map({
            container: 'map', // container id 'map'
            style: temaMapa, // style URL  'mapbox://styles/mapbox/streets-v11'
            center:  [-104.34797062270904,19.112510111731996], // starting position [lng, lat]
            zoom: 15// starting zoom
        });
        setMapa(newMap)
    }, [temaMapa])


    


    return (  
        <>
        <Head>
            <link rel="stylesheet" href="/path/to/material-icons/iconfont/material-icons.css" />
        </Head>
        <div className='h-screen flex flex-col'>
            <Header />
            <div className='h-full w-full flex'>
                <Aside vehiculos={vehiculos} mapa={mapa} />
                <Section vehiculos={vehiculos} mapa={mapa} setTemaMapa={setTemaMapa} />
            </div>
        </div>
        </>
    )
}
 
export default Layout;