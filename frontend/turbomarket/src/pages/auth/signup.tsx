import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../components/navbar";

async function createAccount(email: string, password: string, ) {
  const firstName = "test";
  const lastName = "test";
  
  const res = await fetch('http://localhost:4444/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password, firstName, lastName }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong!')
  }
  return data
}

export default function Signup() {
  const [isLogin, setIsLogin] = useState(false);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {

    e.preventDefault();
    if (isLogin) {
      console.log("is logged in");
      
    } else {
      try {
        const account = await createAccount(email, password)
        console.log('Account', account)
      } catch (error) {
        console.log(error);
      }
   
    };
  };


    return (
      <Fragment>
        <Navbar />
        <h1 className="text-3xl tracking-widest mb-10 font-semibold text-center text-c.green ">
          SIGN UP
        </h1>

        <section className=" grid grid-cols-2 p-20 gap-20 content-center">
          <div className=" px-10 ">
            <h2 className=" text-lg font-semibold text-c.green">User Sign Up</h2>
            <hr className=" bg-gray-200 pb-5 border-1 dark:bg-gray-700"></hr>
            <form onSubmit={handleSubmit} className="">


              <div className="mb-4">
                <label className="block text-c.green text-sm font-bold mb-2">
                  Email
                </label>
                <input

                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-c.green text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-12">
                <label className="block text-c.green text-sm font-bold mb-2">
                  Re-enter Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <button type="submit"><Image src="/images/continue-botton.png " alt="Continue Botton" className=" content-end" width={100} height={100} /> </button>
              </div>
            </form>
            <hr className=" bg-gray-200 border-1 dark:bg-gray-700"></hr>
            <h2 className=" text-lg font-semibold text-c.green">Supplier Sign Up</h2>
          </div>
          <div className="">
            <Image src="/images/signup.png" alt="Hero picture of vegtables on a table" className=' rounded-full  ' width={500} height={500} />
          </div>

        </section>
      </Fragment>

    );
  }


