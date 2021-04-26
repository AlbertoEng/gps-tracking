import React from 'react'
import '../styles/Home.module.css';

const Header = () => {
    return (  
        <div className='bg-black opacity-80 text-white flex z-10 relative p-1 w-full shadow-md'>
            <div className='text-xl  pl-4 w-4/12 flex flex-col items-start md:text-md  sm:min-w-max cursor-pointer'>
                <h2 className='text-red-500 font-black'> DEV<span className='text-white font-black'>-TECH GPS Tracking System</span></h2>
                <h2>"Desarrollando Tecnologia"</h2>
            </div>
            <div className='w-6/12 px-2  flex text-xl justify-center items-center font-bold md:text-md sm:min-w-max'>
                Transportes Mendoza S.A. de C.V.
            </div>
            <div className='w-2/12 flex flex-col items-end pr-6  justify-center text-md sm:min-w-max'>
                <p className='py-2 px-2 '>Hola, <span className='font-black'> Jesus Eng</span></p>
                <button className='px-2 hover:text-white font-black'>
                    Cerrar Sesion
                </button>
            </div>
        </div>
    );
}
export default Header;