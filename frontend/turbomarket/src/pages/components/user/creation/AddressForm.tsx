import React, { Fragment, useRef, useContext } from "react";
import { ViewContext } from "../../../../../store/userCreation/NavigationContext";
import { PersonalDataContext, AddressData, PersonalData } from "../../../../../store/userCreation/DataContext";
type PersonalDataContextType = {
  personalData: PersonalData;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalData>>;
  addressData: AddressData;
  setAddressData: React.Dispatch<React.SetStateAction<AddressData>>;
};

export default function AddressForm() {
  const { currentView, setCurrentView } = useContext(ViewContext);
  const { addressData, setAddressData } = useContext<PersonalDataContextType>(PersonalDataContext);


  const addressLine1 = useRef<HTMLInputElement>(null);
  const addressLine2 = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);
  const state = useRef<HTMLInputElement>(null);
  const postalCode = useRef<HTMLInputElement>(null);
  const country = useRef<HTMLInputElement>(null);

  function handleSubmit(e: any) {
    e.preventDefault();

    const address = {
      addressLine1: String(addressLine1.current?.value) ,
      addressLine2: String(addressLine2.current?.value),
      city: String(city.current?.value),
      state: String(state.current?.value),
      postalCode: String(postalCode.current?.value),
      country: String(country.current?.value),
    };

    if (
      address.addressLine1 &&
      address.city &&
      address.state &&
      address.postalCode &&
      address.country
    ) {
      setAddressData(address);
      setCurrentView(3);
    }
    else {
      alert("Please fill out all fields");
    }
    
   }

  return (
    <Fragment>
      <section className="grid grid-cols-2 px-40 gap-x-72 content-center">
        <div className=" text-justify text-lg text-c.green">
          <p className="my-4">
            One of the details we need is your address, which helps us identify
            the local suppliers in your area. This way, we can connect you with
            the freshest and most authentic products possible.{" "}
          </p>
          <p className="my-4">
            At Hofmarkt, we're passionate about supporting small businesses and
            promoting sustainable food production. By shopping with us, you're
            not only getting high-quality products, but you're also making a
            positive impact on your local community and the environment.
          </p>
        </div>
        <div className=" px-10 ">
          <h2 className=" text-lg font-semibold text-c.green">Your Address</h2>
          <hr className=" bg-gray-200 mb-5 border-1"></hr>

          <form
          onSubmit={handleSubmit}
          className="rounded  pt-2 pb-2 mb-4 text-c.green"
        >
          <div className="mb-4">
            <label
              htmlFor="addressLine1"
              className="block font-bold mb-2"
            >
              Address Line 1
            </label>
            <input
              type="text"
              name="addressLine1"
              id="addressLine1"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              ref={addressLine1}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="addressLine2"
              className="blockfont-bold mb-2"
            >
              Address Line 2
            </label>
            <input
              type="text"
              name="addressLine2"
              id="addressLine2"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              ref={addressLine2}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="city"
                className="block text-gray-700 font-bold mb-2"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                ref={city}
                required
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-gray-700 font-bold mb-2"
              >
                State/Province
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                ref={state}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="postalCode"
                className="block font-bold mb-2"
              >
                Postal Code
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                ref={postalCode}
                required
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-gray-700 font-bold mb-2"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                ref={country}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">

          </div>
          <button
          type="button"
          onClick={handleSubmit}
          className="rounded bg-green-700 p-2 px-6 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Save
        </button>
        </form>

          <hr className=" bg-gray-200 border-1 dark:bg-gray-700"></hr>
        </div>
 
      </section>
     
    </Fragment>
  );
}
