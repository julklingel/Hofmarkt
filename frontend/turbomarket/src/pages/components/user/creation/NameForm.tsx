import React, { Fragment, useRef, useContext } from "react";
import { ViewContext } from "../../../../../store/userCreation/NavigationContext";
import { PersonalDataContext, PersonalData, AddressData } from "../../../../../store/userCreation/DataContext";
import {FormEvent} from "react";

type PersonalDataContextType = {
  personalData: PersonalData;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalData>>;
  addressData: AddressData;
  setAddressData: React.Dispatch<React.SetStateAction<AddressData>>;
};

export default function NameForm() {
  const { currentView, setCurrentView } = useContext(ViewContext);
  const { personalData, setPersonalData } = useContext<PersonalDataContextType>(PersonalDataContext);

  const firstName = useRef<HTMLInputElement>(null);
  const lastName = useRef<HTMLInputElement>(null);
  const phoneNumber = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLButtonElement> ) {
    e.preventDefault();

    const newPersonalData = {
      firstName: firstName.current!.value,
      lastName: lastName.current!.value,
      phoneNumber: Number(phoneNumber.current!.value,)
    };

    if (newPersonalData.firstName && newPersonalData.lastName && newPersonalData.phoneNumber) {
      setCurrentView(2);
      setPersonalData(newPersonalData);
    } else {
      alert("Please fill out all fields");
    }
  }
  
  

  

  return (
    <Fragment>
     

      <section className=" grid grid-cols-2 px-40  gap-x-72 content-center">
      <div className=" text-justify text-lg text-c.green">
          <p className="my-4">
            We're thrilled to have you here at Hofmarkt and can't wait to help
            you discover the delicious products our local suppliers have to
            offer.
          </p>
          <p className="my-4">
            Before we get started, we need to collect a few pieces of
            information from you. Don't worry, it'll only take a minute!
          </p>
          <p className="my-4">
            We require your name and your phone number so that your local
            suppliers can contact you in case there are any issues with your
            delivery.
          </p>
        </div>
        <div className=" px-10 ">
          <h2 className=" text-lg font-semibold text-c.green">
            Your Personal Information
          </h2>
          <hr className=" mb-5 border-1 dark:bg-gray-700"></hr>
          <form className="">
            <div className="mb-4">
              <label className="block text-c.green text-sm font-bold mb-2">
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="name"
                placeholder="First Name"
                ref={firstName}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-c.green text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="name"
                placeholder="Last Name"
                ref={lastName}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-c.green text-sm font-bold mb-2">
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Number"
                ref={phoneNumber}
                required
              />
            </div>
            <button
          type="button"
          onClick={handleSubmit}
          className="rounded bg-green-700 p-2 px-6 mb-4 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-green-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-green-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
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
