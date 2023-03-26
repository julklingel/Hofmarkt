import { Fragment } from "react";
import Image from "next/image";
import Stars from "@/pages/components/reviews/Stars";

const DUMMY_SUPPLIERS = {
  id: "s1",
  name: "Imkerei Ammersee GmbH",
  catSvgLink: "/svgs/honey.svg",
  companyImage: "Imkerei.jpeg",
  slug: "ammer-imker",
  bio: "Die Imkerei Ammersee GmbH ist ein Familienunternehmen, das sich auf die Herstellung von Bienenprodukten spezialisiert hat. Die Produkte werden in der Region produziert und sind von höchster Qualität.",
  zip: "82319",
  city: "Starnberg",
  rating: 4,
  reviewsNum: 72,
  products: [
    {
      id: "p1",
      name: "Wald-Honig",
      image: "honig.jpg",
      price: 5.99,
      description: "Honig aus der Region",
    },
    {
      id: "p2",
      name: "Bienenwachs",
      image: "bienenwachs.jpg",
      price: 9.99,
      description: "Bienenwachs aus der Region",
    },
  ],
};

export default function SupplierHeader(props: any) {
  const { slug, companyImage, rating , reviewsNum} = DUMMY_SUPPLIERS;
  const imgPath = `/images/supplier/${slug}/${companyImage}`;
  return (
    <Fragment>
      <section className="mx-auto mt-12 max-w-2xl px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-2">
        <div className="grid grid-cols-2 gap-x-16">
          <section className="text-c.green">
            <div className="grid grid-cols-2">
              <h1 className="flex justify-start text-3xl font-bold">
                {DUMMY_SUPPLIERS.name}
              </h1>
              <div className="flex justify-end">
                <Image
                  src={DUMMY_SUPPLIERS.catSvgLink}
                  width={50}
                  height={50}
                  alt={DUMMY_SUPPLIERS.slug}
                />
              </div>
              <p>
                {DUMMY_SUPPLIERS.zip}, {DUMMY_SUPPLIERS.city}
              </p>
            </div>
            <p className=" my-6 text-lg text-justify font-semibold">
              {DUMMY_SUPPLIERS.bio}
            </p>
            <div className="flex justify-start">
              <Stars stars={rating}/>
              <p className="ml-4"> {rating}</p>
              <p> / {reviewsNum} </p>
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
