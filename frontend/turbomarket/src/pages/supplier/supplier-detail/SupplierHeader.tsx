import { Fragment } from "react";
import Image from "next/image";

const DUMMY_SUPPLIERS = {
  id: "s1",
  name: "Imkerei Ammersee GmbH",
  catSvgLink: "/svgs/honey.svg",
  companyImage: "Imkerei.jpeg",
  slug: "ammer-imker",
  bio: "Die Imkerei Ammersee GmbH ist ein Familienunternehmen, das sich auf die Herstellung von Bienenprodukten spezialisiert hat. Die Produkte werden in der Region produziert und sind von höchster Qualität.",
  zip: "82319",
  city: "Starnberg",
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
  const { slug, companyImage } = DUMMY_SUPPLIERS;
  const imgPath = `/images/supplier/${slug}/${companyImage}`;
  return (
    <Fragment>
      <div className="grid grid-cols-2 gap-16 mx-32 mt-16">
        <section className="text-c.green">
          <div className="grid grid-cols-2">
            <h1 className="flex justify-start text-3xl font-bold">{DUMMY_SUPPLIERS.name}</h1>
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
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-green-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-green-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-green-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-green-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-green-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        <p className="ml-4"> 4.9 </p>
        <p>/ 72 Reviews </p>
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

    </Fragment>
  );
}
