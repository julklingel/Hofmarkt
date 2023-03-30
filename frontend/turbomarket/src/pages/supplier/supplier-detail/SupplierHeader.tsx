
import { Fragment } from "react";
import Image from "next/image";
import Stars from "@/pages/components/reviews/Stars";




export default function SupplierHeader({ supplier }: any) {

  const { companyName, slug, companyLogo, companyBio } = supplier.supplier;
  const {imageUrl} = supplier.supplier.SupplierImage[0];
  const {zip, city} = supplier.supplier.AccountAddress;
  

  const imgPath = "/images/supplier/" + slug + "/" + imageUrl;
  

  

  return (
    <Fragment>
      <section className="mx-auto mt-12 max-w-2xl px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-2">
        <div className="grid grid-cols-2 gap-x-16">
          <section className="text-c.green">
            <div className="grid grid-cols-2">
              <h1 className="flex justify-start text-3xl font-bold">
                {companyName}
              </h1>
              <div className="flex justify-end">
                <Image
                  src={supplier.catSvgLink}
                  width={50}
                  height={50}
                  alt={supplier.slug}
                />
              </div>
              <p>
                {zip}, {city}
              </p>
            </div>
            <p className=" my-6 text-lg text-justify font-semibold">
              {companyBio}
            </p>
            <div className="flex justify-start">
              <Stars stars={supplier.rating || 2} />
              <p className="ml-4"> {supplier.rating || 2}</p>
              <p> / {supplier.reviewsNum  || 72 + " Reviews"} </p>
            </div>
            <button className="bg-c.green text-white font-bold py-2 px-4 mt-12 rounded-full hover:bg-green-600">
              Add to Favorites
            </button>
          </section>
          <div className=" place-self-center">
            {" "}
            <Image
              src={imgPath}
              width={500}
              height={500}
              alt={imgPath}
              layout="responsive"
              className=" rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

