import SupplierCard from "./SupplierCard";
import React from "react";




export default function SupplierGrid(props:any) {
    const suppliers = props.suppliers;
    
    
    

    

    
    if (!suppliers) {
        return <div className=" h-screen text-center text-xl p-5 text-c.green ">No supplier found</div>
}
    return (
        <div className="">
            <ul className="grid grid-cols-4 content-center gap-6">
                {suppliers.supplierObj.map((supplier:any) => (<SupplierCard key={supplier.slug} supplier={supplier}/>))}           
            </ul> 
            
        </div>
    )
}
