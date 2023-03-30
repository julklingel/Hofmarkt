import ProductsGrid from "../components/products/ProductGrid";

export default function AllProducts(props: any) {
  const offer = props.offer;
  
  return (
    <section className=" px-10 text-center text-c.green ">
      <ProductsGrid offer={offer} />
    </section>
  );
}
