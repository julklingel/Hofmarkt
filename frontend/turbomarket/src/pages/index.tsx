
import { Fragment } from "react"
import FeaturedSuppliers from "./supplier/FeaturedSuppliers"
import Hero from "./components/homepage/Hero"
import Navbar from "./components/navbar"

const DUMMY_SUPPLIERS = [
  {
    id: 's1',
    name: 'Imkerei Ammersee GmbH',
    category: 'Bienenprodukte',
    image: 'imkerei.jpeg',
    slug: 'imkerei-ammersee-gmbh',
    location: 'Ammerseestraße 1, 82515 Wolfratshausen',
    date: '2021-01-01',
  },
  {
    id: 's2',
    name: 'Bäckerei Schmid',
    category: 'Brot und Brötchen',
    image: 'Bäckerei_Bayer_1.webp',
    slug: 'baeckerei-schmid',
    location: 'Ammerseestraße 1, 82515 Wolfratshausen',
    date: '2021-01-01',
  },
  {
    id: 's3',
    name: 'Bauernhof Scholler',
    category: 'Eier, Milch, Fleisch',
    image: 'Farmhouse.jpeg',
    slug: 'bauernhof-scholler',
    location: 'Ammerseestraße 1, 82515 Wolfratshausen',
    date: '2021-01-01',
  },
  {
    id: 's3',
    name: 'Jäger Kevin Moller',
    category: 'Fleisch',
    image: 'hunter-4436354_1920.jpg',
    slug: 'jaeger-kevin-moller',
    location: 'Ammerseestraße 1, 82515 Wolfratshausen',
    date: '2021-01-01',
  },
]

export default function Home(props: any) {
  return (
   



      <div className=" h-screen">
      <Navbar />
      <Hero/>
      <FeaturedSuppliers suppliers={DUMMY_SUPPLIERS} />
      </div>


    
    




  )
}

