import styles from '../styles/Home.module.css';
import mapboxgl from 'mapbox-gl';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Aside from '../components/Aside'
import 'tailwindcss/tailwind.css'
//  token =  pk.eyJ1IjoiYWxiZXJ0b2VuZzA4IiwiYSI6ImNrNmVsZTU1aDF5cjMzZnFqMjR4YTVmOWMifQ.InAhlSX15h0QQI-ZBguwLg

export default function Home() {

  return (
    <Layout>
      <Header />
    </Layout>
  )
}
