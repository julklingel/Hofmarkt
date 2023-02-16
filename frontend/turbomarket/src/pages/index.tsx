
import { Fragment } from "react"
import FeaturedSuppliers from "./supplier/FeaturedSuppliers"
import Hero from "./components/homepage/hero"
import Navbar from "./components/navbar"


export default function Home(supplierObj: any) {
  const supplier = supplierObj
  

  return (

    <div className=" h-screen">
      <Navbar />
      <Hero />
      <FeaturedSuppliers suppliers={supplier} />
    </div>

  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:4444/supplier/featured');
  const supplierObj = await res.json();



  return {
    props: {
      supplierObj
    }
  }
}