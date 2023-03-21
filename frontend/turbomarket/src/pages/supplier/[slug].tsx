import { Fragment } from "react";
import Navbar from "../components/navbar";
import SupplierHeader from "./supplier-detail/SupplierHeader";
import SupplierContent from "./supplier-detail/SupplierContent";
import AllProducts from "../market/AllProducts";


// You need to retrieve the slug from the URL and then use it to fetch the data for the supplier#
// You need to retrieve data from the supplier and offers.

export default function Supplier(productObj: any) {
    const product = productObj;
  
    return (
       <Fragment>
        <Navbar/>
        <SupplierHeader/>
        <SupplierContent products={product} />
       </Fragment>
    )
}

export async function getStaticPaths() {
    const res = await fetch("http://localhost:4444/supplier");
    const productObj = await res.json();
    const paths = productObj.map((product: any) => ({
        params: { slug: product.slug },
    }));
    

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
   // const res = await fetch(`http://localhost:4444/${params.slug}/offers/`);
   const res = await fetch(`http://localhost:4444/offer`);
    const productObj = await res.json();

    return {
        props: {
            productObj,
        },
    };
}
