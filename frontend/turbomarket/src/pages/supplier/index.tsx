


import { Fragment } from "react";
import Navbar from "../components/navbar";
import AllSuppliers from "./AllSuppliers";




export default function AllSuppliersPage(supplierObj: any) {
    const supplier = supplierObj

    
    return (
            
        <Fragment>
            <Navbar />
            <AllSuppliers suppliers={supplier}/>
        </Fragment>
        
    );
    }

export async function getStaticProps() {
    const res = await fetch('http://localhost:4444/supplier');
    const supplierObj = await res.json();
    
    
    return {
        props: {
            supplierObj
        }
    }
}
