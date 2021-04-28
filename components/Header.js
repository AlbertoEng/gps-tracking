import React from 'react'



const Header = () => {
    return ( 
        <div className='w-full h-11  bg-blue-500 p-2 text-white text-xl font-bold flex items-center justify-between'>
            <h1 className='text-xl w-2/12'>DEV<span className='text-red-400'>-TECH</span></h1> 
            <div className='w-5/12 flex justify-end pr-2'>
                <p className=' min-w-min text-black text-md pr-4 font-bold flex items-center'>Bienvenido, <span className='text-white font-bold'>Jesus Eng</span></p>
                <button className='border rounded-md  hover:bg-red-600 hover:border-red-600 p-1'>
                    Cerrar Sesion
                </button>
            </div> 
            
        </div>
    );
}
 
export default Header;