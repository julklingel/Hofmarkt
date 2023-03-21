import { Fragment } from "react";
import Image from "next/image";
import AllProducts from "../../market/AllProducts";

export default function SupplierContent(props: any) {
  const product = props.products;

  return (
    <Fragment>
      <section className="grid mx-24 mt-16  grid-cols-6 gap-x-32">
        <hr className=" border-c.green col-span-6 "></hr>
        <button className="mt-4 p-2 bg-secondary text-c.green rounded-2xl text-center ">
          Products
        </button>
        <button className="mt-4 p-2 bg-secondary text-c.green rounded-2xl text-center">
          Pictures
        </button>
        <button className="mt-4 p-2 bg-secondary text-c.green rounded-2xl text-center">
          Reviews
        </button>
      </section>
      <AllProducts products ={product}  />
    </Fragment>
  );
}

