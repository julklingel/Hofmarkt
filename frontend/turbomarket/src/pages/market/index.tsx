
import React from 'react'
import Navbar from '../components/navbar'
import AllProducts from './AllProducts'



export default function Products(productObj:any) {
  const product = productObj

  
    return (

        <div className=" h-screen">
          <Navbar />
          <AllProducts products={product} />
        </div>
    
      )
}
export async function getStaticProps() {
    const res = await fetch('http://localhost:4444/offer');
    const productObj = await res.json();
  
    return {
      props: {
        productObj
      }
    }
  }