import React from "react";
import Navbar from "../components/navbar";
import AllProducts from "./AllProducts";

export default function Products(offers: any) {
  const offer = offers;
  console.log(offer);
  

  return (
    <div className=" h-screen">
      <Navbar />
      <AllProducts offer={offer} />
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:4444/offer");
  const productObj = await res.json();

  const offersWithSlug = productObj.map((offer: any) => ({
    ...offer,
    slug: offer.supplier.slug,
  }));

  return {
    props: {
      offers: offersWithSlug,
    },
  };
}