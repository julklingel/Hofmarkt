import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid(props: any) {
  const products = props.products;

  return products ? (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.productObj.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  ) : (
    <div className="h-screen text-center text-xl p-5 text-c.green">
      No products found
    </div>
  );
}
