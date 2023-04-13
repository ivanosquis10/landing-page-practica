import Image from 'next/image'
import { Raleway } from 'next/font/google'
import Layout from '@/layout/Layout'
import Hero from '@/components/hero'
import Banner from '@/components/banner'
import Nosotros from '@/components/nosotros'
import Deportes from '@/components/deportes'
import Contacto from '@/components/contacto'

const inter = Raleway({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Banner />
        <Nosotros />
        <Deportes />
        <Contacto />
      </Layout>
    </>
  )
}
