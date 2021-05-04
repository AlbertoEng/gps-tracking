import React from 'react'
import Link from 'next/link'
import HeaderAuth from '../components/auth/HeaderAuth';
import 'tailwindcss/tailwind.css'
import styles from '../styles/Signup.module.css';

const Signup = () => {
    return (
        <div className='h-screen bg-gray-500 '>
            <HeaderAuth />
            <div className='bg-gray-500 py-2 sm:w-full '>
                <div className='formulario my-10 sm:w-full md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 mx-auto bg-gray-800 rounded-md'>
                    <form action="" className='mt-2 py-2 sm:w-full'>
                        <div className='w-full text-3xl text-white mt-1 mb-4 mx-auto'>
                            <h2 className='text-center'>Registro</h2>
                        </div>
                        <div className='py-2 px-2'>
                            <label htmlFor="nombre" className='pl-2 font-bold text-white'>Nombre de usuario:</label>
                            <input type="text" id='nombre' placeholder='Tu nombre de usuario' className='w-full p-2 rounded mt-2 leading-tight' />
                        </div>
                        <div className='py-2 px-2'>
                            <label htmlFor="password" className='pl-2 font-bold text-white'>Contraseña:</label>
                            <input type="password" id='password' placeholder='Tu contraseña' className='w-full p-2 rounded mt-2 leading-tight' />
                        </div>
                        <div className='py-2 px-2'>
                            <label htmlFor="confirmar" className='pl-2 font-bold text-white'>Confirmar contraseña:</label>
                            <input type="password" id='confirmar' placeholder='Reescribir contraseña' className='w-full p-2  rounded mt-2 leading-tight' />
                        </div>
                        <div className='py-2 px-2'>
                            <label htmlFor="numero_empleado" className='pl-2 font-bold text-white'>Numero de empleado:</label>
                            <input type="text" id='numero_empleado' placeholder='Numero de empleado' className='w-full p-2  rounded mt-2 leading-tight' />
                        </div>
                        <div className='py-2 px-2'>
                            <label htmlFor="numero_telefono" className='pl-2 font-bold text-white'>Numero de Telefono:</label>
                            <input type="numbers" id='numero_telefono' placeholder='Numero de telefono' className='w-full p-2  rounded mt-2 leading-tight' />
                        </div>
                        <div className='py-2 px-2'>
                            <label htmlFor="email" className='pl-2 font-bold text-white'>Email:</label>
                            <input type="email" id='email' placeholder='Tu email' className='w-full p-2  rounded mt-2 leading-tight' />
                        </div>
                        <div className='py-2 px-2'>
                            <button type='button' className='bg-blue-500 p-3 my-2 w-full rounded font-bold text-white leading-tight hover:bg-blue-600'>Registrar Nueva Cuenta</button>
                        </div>
                        <p className='text-white font-bold text-center'>Ya tienes Cuenta? <span className='text-blue-500 cursor-pointer'><Link href='/login'><a className='font-bold'>Inicia Sesion</a></Link></span></p>
                    </form>
                </div>
            </div>
        </div>

    );
}
 
export default Signup;