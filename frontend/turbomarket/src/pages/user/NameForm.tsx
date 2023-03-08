import React, { Fragment, useRef } from "react";

export default function NameForm() {
    const firstName = useRef<HTMLInputElement>(null);
    const lastName = useRef<HTMLInputElement>(null);
    const phoneNumber = useRef<HTMLInputElement>(null);

    function handleSubmit(e: any) {
        e.preventDefault();
        console.log("submit");

        const firstNameValue = firstName.current?.value;
        const lastNameValue = lastName.current?.value;
        const phoneNumberValue = phoneNumber.current?.value;
        
    }

      
        return (
          <Fragment>
            <h1 className="text-3xl tracking-widest mb-10 font-semibold text-center text-c.green ">
              Log In
            </h1>
      
            <section className=" grid grid-cols-2 p-20 gap-56 content-center">
              <div className=" px-10 ">
                <h2 className=" text-lg font-semibold text-c.green">Your Personal Information</h2>
                <hr className=" bg-gray-200 pb-5 border-1 dark:bg-gray-700"></hr>
                <form onSubmit={handleSubmit} className="">
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
      
                </form>
                <hr className=" bg-gray-200 border-1 dark:bg-gray-700"></hr>
              </div>
              <div>
                <p>We're thrilled to have you here at Hofmarkt and can't wait to help you discover the delicious products our local suppliers have to offer.</p>
                <p>Before we get started, we need to collect a few pieces of information from you. Don't worry, it'll only take a minute!</p>
                <p>We require your name and your phone number so that your local suppliers can contact you in case there are any issues with your delivery.</p>
           
              </div>
            </section>
          </Fragment>
        );
      }
      
    

}