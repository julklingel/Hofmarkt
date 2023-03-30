import { Fragment } from "react";
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from "next";
import Navbar from "../components/navbar";
import SupplierHeader from "./supplier-detail/SupplierHeader";
import SupplierContent from "./supplier-detail/SupplierContent";
import AllProducts from "../market/AllProducts";

interface Supplier {
  id: string;
  name: string;
  catSvgLink: string;
  companyImage: string;
  slug: string;
  bio: string;
  zip: string;
  city: string;
  rating: number;
  reviewsNum: number;
  offer: Offer[];
}

interface Offer {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
}

interface Props {
  supplier: Supplier;
}

export default function Supplier(supplier: Props) {
  const { offer } = supplier.supplier;
  const { slug } = supplier.supplier;
  

  return (
    <Fragment>
      <Navbar />
      <SupplierHeader supplier={supplier} />
      <SupplierContent offers={offer}  />
    </Fragment>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`http://localhost:4444/supplier`);
  const suppliers = await res.json();

  const paths = suppliers.map((supplier: Supplier) => ({
    params: { slug: supplier.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (
  context: GetStaticPropsContext<{ slug: string }>
) => {
  const { params } = context;
  const slug = params?.slug;

  const res = await fetch(`http://localhost:4444/supplier/${slug}`);
  const supplier = await res.json();

  // Add the slug property to each offer object
  supplier.offer = supplier.offer.map((offer: Offer) => ({
    ...offer,
    slug: supplier.slug,
  }));

  return {
    props: {
      supplier,
    },
  };
};