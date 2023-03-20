import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductCard(props: any) {
  const [isLoading, setLoading] = useState(true);

  const { title, img, price, id } = props.product;
  const { slug, name } = props.product.supplier;
  const linkPath = `/offer/${slug}/${id}`;
  const imgPath = `/images/supplier/${slug}/offers/${img}`;

  return (
    <Link href={linkPath}>
      <div className="bg-secondary rounded-2xl shadow-2xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
        <div className="w-full h-48 overflow-hidden rounded-lg bg-secondary relative">
          <Image
            alt=""
            src={imgPath}
            width={500}
            height={500}
            layout="responsive"
            className={cn(
              "duration-700 ease-in-out group-hover:opacity-75 object-cover object-center absolute inset-0",
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>

        <h3 className="mt-2 text-xl text-c.green">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-l mx-3 text-gray-900 ">${price}</span>
          <span className=" text-xs mx-1 text-gray-900 ">3stk.</span>

          <button className=" mx-2 p-1 px-1.5 m-1 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
}
