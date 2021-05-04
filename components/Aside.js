import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';



const Aside = ({vehiculos,mapa}) => {


    useEffect(()=>{

        let geojson = {
            type: 'FeatureCollection',
            features : vehiculos.map(( vehiculo)=>{
                return {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Point',
                        'coordinates': vehiculo.position
                    },
                    'properties': {
                        'title': 'DEV-TECH',
                        'description': vehiculo.nombre
                    }
                }
            })
        }    
        
    },[vehiculos])

    const volarAPosition = ( position )=>{
        mapa.flyTo({
            center: position,
            essential: true
        })
    } 


    const handleColorGas = (levelGas)=>{
        if(levelGas < 50 && levelGas > 35){
            return 'text-yellow-500';
        }else if(levelGas <= 35){
            return 'text-red-500';
        }else {
            return 'text-green-500';
        }
    }

    return (  
        <div className='h-full aside text-white min-w-min relative'>
            <h1 className='w-full p-3 text-center  text-lg'>Tu Flotilla</h1>
            <div className='flex text-center font-bold w-full'>
                <div className='w-5/12 font-black border-r-2 border-b-2 text-center'>Vehiculo</div>
                <div className='w-4/12 font-black border-r-2 border-b-2 text-center'>Velocidad</div>
                <div className='w-3/12 font-black border-b-2 text-center'>Gas</div>
            </div>
            {
                vehiculos.map(( vehiculo)=>(
                    <div key={vehiculos.gas} className='flex text-center font-semibold hover:bg-gray-700 cursor-pointer'>
                        <div className='w-5/12' onClick={()=>{volarAPosition(vehiculo.position)}}>{vehiculo.nombre}</div>
                        <div className='w-4/12'>{vehiculo.velocidad}</div>
                        <div className={`${ handleColorGas(vehiculo.levelGas) } w-3/12`}>{vehiculo.levelGas}%</div>
                    </div>
                ))
            }
            <div className='absolute bottom-5 text-center  w-full '>
                <button className='w-50 bg-blue-600 px-2 py-2  rounded-md hover:bg-blue-700'>
                    Agregar Nuevo Vehiculo 
                </button>
            </div>
        </div>
    );
}
 
export default Aside;