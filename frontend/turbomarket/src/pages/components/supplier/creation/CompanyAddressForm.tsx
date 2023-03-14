import React, { Fragment, useRef, useContext, FormEvent } from "react";
import { ViewContext } from "store/supplierCreation/NavigationContextSupplier";
import { AddressDataContext } from "store/supplierCreation/DataContextSupplier";
import Image from "next/image";


export default function CompanyAddressForm() {
  const { currentView, setCurrentView } = useContext(ViewContext);
  const { addressData, setAddressData } = useContext(AddressDataContext);

  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const companyName = useRef<HTMLInputElement>(null);
  const streetAddress = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLSelectElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLInputElement>(null);
  const postalCode = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLButtonElement> ) {
    e.preventDefault();

    const newAddressData = {
      firstName: firstName.current!.value,
      lastName: lastName.current!.value,
      companyName: companyName.current!.value,
      streetAddress: streetAddress.current!.value,
      country: country.current!.value,
      city: city.current!.value,
      state: state.current!.value,
      postalCode: postalCode.current!.value,
    };
  
    

    if (newAddressData.firstName && newAddressData.lastName && newAddressData.streetAddress && newAddressData.country && newAddressData.city && newAddressData.state && newAddressData.postalCode) {
      setCurrentView(2);
      setAddressData(newAddressData);
     
      
      
    } else {
      alert("Please fill out all fields");
    }
  }







  return (
    <Fragment>
      <section className="grid grid-cols-2">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-1 mx-28 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  Your Address
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Use a address where costumers can find you.
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form>
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          required
                          ref={firstName}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          required
                          ref={lastName}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Copmany name (Optional)
                        </label>
                        <input
                          type="text"
                          name="company-name"
                          id="company-name"
                          ref={companyName}
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          required
                          ref={country}
                        >
                          <option>Germany</option>
                          <option>France</option>
                          <option>Italy</option>
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                      
                        </select>
                      </div>

                      <div className="col-span-6">
                        <label
                          htmlFor="street-address"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Street address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          required
                          ref={streetAddress}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          required
                          ref={city}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          required
                          ref={state}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          required
                          ref={postalCode}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                      onClick={handleSubmit}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="place-self-center pt-12">
          <Image
            src="/images/farm-icon.png"
            alt="Hero picture of vegtables on a table"
            className=" rounded-full shadow-2xl"
            width={500}
            height={500}
          />
        </div>
      </section>
    </Fragment>
  );
}
