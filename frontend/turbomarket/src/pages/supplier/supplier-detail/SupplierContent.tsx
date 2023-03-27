import { Fragment, useState } from "react";
import Image from "next/image";
import AllProducts from "../../market/AllProducts";
import Reviews from "@/pages/components/reviews/Reviews";
import Gallery from "@/pages/components/gallery/Gallery";

export default function SupplierContent(props: any) {
  const offer = props;
  console.log("Suppliercontent", offer);
  
  
  const [selectedView, setSelectedView] = useState("Products");

  function viewToggle(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedView(event.target.value);
  }

  return (
    <Fragment>
      <section className="mx-auto mt-12 max-w-2xl px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-2">
        <ul className="items-center w-full text-sm font-medium  text-c.green rounded-lg shadow-2xl sm:flex dark:bg-secondary">
          <li className="w-full grid grid-cols-6">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value="Products"
                name="list-radio"
                defaultChecked={true}
                className="w-4 h-4 text-green-600 bg-gray-100  focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={viewToggle}
              />
              <label
                htmlFor="horizontal-list-radio-license"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Products
              </label>
            </div>
          </li>
          <li className="w-full ">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-id"
                type="radio"
                value="Gallery"
                name="list-radio"
                className="w-4 h-4 text-green-600 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={viewToggle}
              />
              <label
                htmlFor="horizontal-list-radio-id"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900"
              >
                Gallery
              </label>
            </div>
          </li>

          <li className="w-full ">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-passport"
                type="radio"
                value="Reviews"
                name="list-radio"
                className="w-4 h-4 text-green-600 bg-gray-100 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600"
                onChange={viewToggle}
              />
              <label
                htmlFor="horizontal-list-radio-passport"
                className="w-full py-3 ml-2 text-sm font-medium text-green-900 "
              >
                Reviews
              </label>
            </div>
          </li>
        </ul>
      </section>
      <section>
        {selectedView === "Products" && <AllProducts offer={offer} />}
        {selectedView === "Gallery" && <Gallery />}
        {selectedView === "Reviews" && <Reviews />}
      </section>
    </Fragment>
  );
}
