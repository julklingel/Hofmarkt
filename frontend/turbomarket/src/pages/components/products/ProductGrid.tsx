import React from 'react';
import ProductCard from './ProductCard';


export default function ProductGrid(props:any) {
    const products = props.products;
    console.log('hello from product grid', products);
    
    
    if (!products) {
        return <div className=" h-screen text-center text-xl p-5 text-c.green ">No products found</div>
}
    return (
        <div className="">
            <ul className="grid grid-cols-4 content-center gap-6">
                {products.productObj.map((product:any) => (<ProductCard key={product.id} product={product}/>))}           
            </ul> 
            
        </div>
    )
}

