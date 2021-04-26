import React from 'react'
import '../styles/Home.module.css';

const Aside = () => {

    const vehiculos = [
        {
            id: '1',
            nombre: 'El yancarlo',
            velocidad: 102,
            gas: 78,
            position:[19.1116989403268, -104.33749967811606]
        },
        {
            id: '2',
            nombre: 'El marlo',
            velocidad: 100,
            gas: 90,
            position:[19.116281175498628, -104.34418897036272]  
        },
        {
            id: '3',
            nombre: 'El guacamayo',
            velocidad: 57,
            gas: 99,
            position:[19.16196721894028, -104.26546007223101]
        },
        {
            id: '4',
            nombre: 'El romo',
            velocidad: 120,
            gas: 54,
            position:[19.1116989403268, -104.33749967811606]
        },
        {
            id: '5',
            nombre: 'El marinero',
            velocidad: 90,
            gas: 24,
            position:[19.218935713013078, -104.23599203012205] 
        },
    ]


    return (  
        <div id='aside' className='w-3/12 h-screen bg-black opacity-90 text-white text-center  md:w-4/12 sm:w-3/12 lg:w-3/12 xl:w-2/12'>
            <h1 className='pt-2 text-lg pb-2'>Tu Flotilla</h1>
            <div className='w-full h-full '>
                <div className='flex w-full font-bold'>
                    <div className='w-7/12 '>Nombre</div>
                    <div className='w-3/12'>Velocidad</div>
                    <div className='w-2/12'>Gas</div>
                </div>
                {
                    vehiculos.map(( vehiculo )=>{
                        return (
                            <div className='flex w-full hover:bg-gray-800 cursor-pointer' key={vehiculo.id}>
                                <div className='w-7/12 '>{vehiculo.nombre}</div>
                                <div className='w-3/12'>{vehiculo.velocidad} Km/h</div>
                                <div className='w-2/12'>{vehiculo.gas} %</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
 
export default Aside;