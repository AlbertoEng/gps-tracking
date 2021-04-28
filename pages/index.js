import styles from '../styles/Home.module.css';
import React,{useEffect} from 'react';
import {useRouter} from 'next/router';
import mapboxgl from 'mapbox-gl';
import Layout from '../components/Layout';
import 'tailwindcss/tailwind.css'

//  token =  pk.eyJ1IjoiYWxiZXJ0b2VuZzA4IiwiYSI6ImNrNmVsZTU1aDF5cjMzZnFqMjR4YTVmOWMifQ.InAhlSX15h0QQI-ZBguwLg

export default function Home() {

  const router = useRouter()


  return (
    <>
      <Layout>
        
      </Layout>
    </>
  )
}
