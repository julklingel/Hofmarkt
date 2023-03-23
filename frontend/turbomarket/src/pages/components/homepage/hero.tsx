import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 h-5/6 px-10 place-items-stretch">
      <div className="place-self-center mb-20 ml-10">
        <h1 className="text-4xl tracking-widest mb-10 font-semibold ml-16 text-c.green">
          HOF MARKT
        </h1>
        <p className="text-xl text-left font-semibold text-c.green mx-16">
          Discover the taste of fresh, organic food from local farmers at
          Hofmarkt. Our webshop brings you the best selection of sustainably
          grown produce straight from the fields to your doorstep. Experience
          the difference of organic, non-GMO ingredients, and support
          small-scale agriculture with every purchase.
        </p>
      </div>

      <div className=" place-self-center mb-20 ml-20 shadow-2xl rounded-full ">
        <Image
          src="/svgs/logo.png"
          alt="Hero picture of vegtables on a table"
          className="rounded-3xl"
          width={600}
          height={600}
        />
      </div>

      <div className="col-span-2 place-self-center ">
        <button>
          <Image
            src="/svgs/scroll.svg"
            alt="Hero picture of vegtables on a table"
            className="animate-bounce"
            width={40}
            height={40}
          />
        </button>
      </div>
    </section>
  );
}
