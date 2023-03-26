import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductCardDetailed(props: any) {
  const DUMMY_PRODUCT = {
    product: {
      name: "Forest Honey",
      img: "1.png",
      price: 14.99,
      id: 1,
      description:
        "Forest Honey is a unique, organic honey variety harvested from the wildflowers found deep within the heart of the forest. This all-natural honey comes with a rich, full-bodied taste that sets it apart from your typical supermarket honey. The captivating aroma and flavor profile of our Forest Honey offer delightful notes of floral, fruity, and earthy undertones, which can be attributed to the diverse wildflowers and plants that our bees forage on.",
      rating: 5,
      supplier: {
        slug: "ammersee-imkerei-gmbh",
        name: "Ammersee Imkerei GmbH",
        location: "Bavaria, Germany",
        established: 1985,
        specialty: "Organic honey products",
      },
    },
  };

  const { img, price, id, description, name, supplier, rating } =
    DUMMY_PRODUCT.product;

  return (
    <section className="text-gray-600  body-font overflow-hidden">
      <div className="container px-5 py-16 mt-24 mx-auto bg-secondary rounded-2xl shadow-2xl">
        <div className="lg:w-4/5 mx-auto flex flex-wrap ">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 lg:h-auto h-64 object-cover object-center rounded-2xl shadow-2xl"
            src="/images/supplier/ammer-imker/facility/1.png"
            width={400}
            height={400}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {name}
            </h1>
            <h2 className="text-sm title-font text-c.green tracking-widest">
              {supplier.name}
            </h2>
            <div className="flex mb-4">
              {/* Stars to be connected with next pr */}
              {/* <Stars rating={rating} /> */}
              stars
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex items-center">
                <span className="mr-4">Stk</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base pl-3 pr-10">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                €{price}
              </span>
              <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Add to Cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
