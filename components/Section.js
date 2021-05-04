import React, { useEffect, useState, useRef } from 'react'
import mapboxgl from 'mapbox-gl';
import axios from 'axios';

const Section = ({vehiculos, mapa, setTemaMapa} ) => {

    const [tema, setTema] = useState('dark');
    const [showMenuTema, setShowMenuTema]= useState(false);

    const temasMapas = {
        dark: 'mapbox://styles/mapbox/dark-v10',
        light: 'mapbox://styles/mapbox/satellite-streets-v11'
    }

    

    useEffect(()=>{
        setTemaMapa(temasMapas[`${tema}`]);
    },[tema])

    useEffect(()=>{

        

        if(vehiculos){
            vehiculos.map((vehiculo)=>{
                let popup = new mapboxgl.Popup({ className: 'popup'}).setLngLat(vehiculo.position)
                            .setHTML(`<h1>${vehiculo.nombre}</h1>`)
                            .setMaxWidth("300px").addTo(mapa);
                let marcador = new mapboxgl.Marker().setLngLat(vehiculo.position).setPopup(popup).addTo(mapa); 
                
            })
        }
    })


    const handleDark = ( e )=>{
        setTema('dark');
        setShowMenuTema(false);
    }

    const handleLight = ( e )=>{
        setTema('light')
        setShowMenuTema(false);
    }

    const handleMenuTema = ( e )=>{
        e.target.setFocus;
        if(showMenuTema){
            setShowMenuTema(false);
        }else{
            setShowMenuTema(true);
        }
    }

    const handleMenuTemaBlur = ()=>{
        setShowMenuTema(false);
    }

    return (  
        <div id='map' className='bg-blue-100 section'>
            <div onClick={handleMenuTema} onBlur={handleMenuTemaBlur} className='absolute cursor-pointer bg-blue-500 w-30 z-10 right-0 m-3 px-2 py-1 opacity-90 rounded text-white font-bold hover:bg-blue-600'>
                <p>Modo {tema}</p>
            </div>
            <div className= {`${showMenuTema ? 'menuMostrado': 'menuOculto'} absolute bg-blue-500 w-30 z-10 right-0 m-3 top-8 opacity-90 rounded text-white font-bold`}>
                <div className='w-full p-2 flex items-center hover:bg-blue-600'>
                    <input type="radio" name="tema" id="darkTema" defaultChecked  value='dark' onClick={handleDark}  className='w-5'/>
                    <label htmlFor="darkTema">modo Dark</label>
                </div>
                <div className='w-full flex p-2 items-center hover:bg-blue-600'>
                    <input type="radio" name="tema" id="lightTema" value='light' onClick={handleLight} className='w-5'/>
                    <label htmlFor="lightTema" className=''>modo Light</label>
                </div>
            </div>
        </div>  
    );
}
 
export default Section;