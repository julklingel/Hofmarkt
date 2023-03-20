import ProductsGrid from "../components/products/ProductGrid";

export default function AllProducts(props: any) {
  return (
    <section className=" px-10 text-center text-c.green ">
      <ProductsGrid products={props.products} />
    </section>
  );
}
