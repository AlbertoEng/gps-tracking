import React,{ useEffect, useState} from 'react'
import axios from 'axios'
import Head from 'next/head';
import Header from '../components/Header';
import Aside from './Aside'
import Section from './Section';
import Mapa from '../classes/Mapa';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


const Layout = ({children}) => {

    const [vehiculos, setVehiculos] = useState([]);
    const [mapa, setMapa] = useState(null)

    const reqVehiculos = async ()=>{
        const resp = await axios.get('http://localhost:3004/vehiculos');
        setVehiculos(resp.data);
    }


    useEffect(() => {
        reqVehiculos();
        const newMap = new Mapa('map', 'mapbox://styles/mapbox/dark-v10',[-104.34797062270904,19.112510111731996]);
        setMapa(newMap);
    }, [])

    return (  
        <div className='h-screen flex flex-col'>
            <Header />
            <div className='h-full w-full flex'>
                <Aside vehiculos={vehiculos} mapa={mapa} />
                <Section/>
            </div>
        </div>
    )
}
 
export default Layout;