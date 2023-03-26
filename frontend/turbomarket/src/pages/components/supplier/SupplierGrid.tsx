import SupplierCard from "./SupplierCard";
import React from "react";

export default function SupplierGrid(props: any) {
  const suppliers = props.suppliers;
  

  if (!suppliers) {
    return (
      <div className=" h-screen text-center text-xl p-5 text-c.green ">
        No supplier found
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        
          {suppliers.supplierObj.map((supplier: any) => (
            <SupplierCard key={supplier.slug} supplier={supplier} />
          ))}
      </div>
    </div>
  );
}
