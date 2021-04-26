import React from 'react'
import Link from 'next/link'
import HeaderAuth from '../components/auth/HeaderAuth';

const Login = () => {
    return (
        <div className='h-screen bg-gray-500'>
            <HeaderAuth />
            <div className='flex flex-col justify-center my-20'>
                <div className='sm:w-full md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 mx-auto bg-gray-800 rounded-md'>
                    <form action="" className='py-4 shadow-md'>
                        <div className='p-4'>
                            <label htmlFor="nombre" className='pl-2 font-bold text-white'>Nombre de usuario:</label>
                            <input type="text" id='nombre' placeholder='Tu nombre de usuario' className='w-full p-2 text-lg rounded mt-2 leading-tight' />
                        </div>
                        <div className='p-4'>
                            <label htmlFor="password" className='pl-2 font-bold text-white'>Contraseña:</label>
                            <input type="password" id='password' placeholder='Tu contraseña' className='w-full p-2 text-lg rounded mt-2 leading-tight' />
                        </div>
                        <div className='p-4'>
                            <button type='button' className='bg-blue-500 p-3 w-full rounded font-bold text-white leading-tight hover:bg-blue-600'>Entrar</button>
                        </div>
                        <p className='text-white font-bold text-center'>No tienes Cuenta? <span className='text-blue-500 cursor-pointer'><Link href='/singup'><a>Crear Una</a></Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login;