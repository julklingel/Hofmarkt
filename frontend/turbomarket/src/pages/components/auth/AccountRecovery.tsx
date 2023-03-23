import HomeBotton from "../button/HomeBotton";
import { useState } from "react";

export default function AccountRecovery() {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
        <HomeBotton />
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-c.green">
          Hofmarkt
        </h1>

        <div className="w-full p-6 rounded-lg shadow dark:border md:mt-0 sm:max-w-md bg-secondary sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-c.green md:text-2xl ">
            Forgot your password?
          </h1>
          <p className="font-light text-gray-700 ">
            Don't food! Just type in your email and we will send you a code to
            reset your password!
          </p>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  text-c.green"
              >
                Your email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@my-email.com"
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 text-green-700 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:focus:ring-green-600 dark:ring-offset-gray-800"
                  onChange={() => setIsCheck(!isCheck)}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light  text-gray-700">
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className={`w-full  ${
                isCheck ? "bg-green-900 text-white"  : "bg-gray-400 text-black"
              } hover:bg-${
                isCheck ? "green-700" : "gray-500"
              } focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
              disabled={!isCheck}
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
