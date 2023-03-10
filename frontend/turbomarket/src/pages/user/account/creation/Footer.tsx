import React, { Fragment, useRef } from "react";
import Image from "next/image";

export default function Footer(props: any) {
  console.log(props.firstPage)
  
  return (

    <section className=" grid grid-cols-2 px-40  gap-x-72 py-24 content-center">
      <div>
        <Image
          src="/images/back.png "
          alt="Continue Botton"
          className="min-h-fit min-w-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          width={50}
          height={50}
        />
      </div>

      <div className="justify-self-end px-6">
        <Image
          src="/images/forth.png "
          alt="Continue Botton"
          className="min-h-fit min-w-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          width={50}
          height={50}
        />
      </div>
    </section>
  );
}
