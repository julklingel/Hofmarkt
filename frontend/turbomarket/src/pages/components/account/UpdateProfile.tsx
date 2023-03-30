import { useSession } from "next-auth/react";
import { Fragment, useState, useEffect } from "react";
import { signOut } from "next-auth/react";

export default function UpdateProfile() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    signOut({ redirect: true, callbackUrl: "/auth/login" });
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      {isClient && (
        <Fragment>
          <section className="bg-secondary">
            <form>
              <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="block mb-2 text-sm font-medium text-c.green"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-c.green dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="block mb-2 text-sm font-medium text-c.green"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-c.green dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your last name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-c.green"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-c.green dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-c.green"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-c.green dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your password"
                    required
                  />
                </div>
              
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="submit"
                  className="text-white bg-green-800 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Update
                </button>
         
              </div>
            </form>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
}
