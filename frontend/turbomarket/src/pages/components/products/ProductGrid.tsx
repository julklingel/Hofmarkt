import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid(props: any) {
  const offers = props.offer.offers;
  

  return offers ? (
    <div className="mx-auto max-w-2xl px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-2">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {offers.map((offer: any) => (
          <ProductCard key={offer.id} product={offer} />
        ))}
      </div>
    </div>
  ) : (
    <div className="h-screen text-center text-xl p-5 text-c.green">
      No products found
    </div>
  );
}
