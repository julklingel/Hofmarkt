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

export default function SupplierContent(props: any) {
  const { slug, companyImage } = DUMMY_SUPPLIERS;
  const imgPath = `/images/supplier/${slug}/${companyImage}`;
  return (
    <Fragment>
      <div className="grid grid-cols-2 gap-16 mx-32 mt-16">
        <section className="text-c.green">
          <div className="grid grid-cols-2">
            <h1 className="text-3xl font-bold">{DUMMY_SUPPLIERS.name}</h1>
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
          <p className=" my-6 text-justify font-semibold">
            {DUMMY_SUPPLIERS.bio}
          </p>
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
