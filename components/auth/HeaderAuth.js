import React from 'react'
import '../../styles/Home.module.css';

const HeaderAuth = () => {
    return (  
        <div className='bg-black sm:w-full text-white flex p-1  w-full relative z-10 shadow-md justify-center'>
            <div className='text-3xl p-2 sm:w-4/12 text-center md:text-md  sm:min-w-max'>
                <h2 className='branding font-black'> DEV<span className='text-white font-black'>-TECH </span></h2>
                {/* <h2>   "Desarrollando Tecnologia"</h2> */}
            </div>
        </div>
    );
}
export default HeaderAuth;