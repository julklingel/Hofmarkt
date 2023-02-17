import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../components/navbar";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    console.log("submit");
    
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        password2,
      }),
    });

    const data = await res.json();

    if (data.error) {
      setError(data.error);
    } else {
      router.push("/auth/login");
    }
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
          <form className="">


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
          <Image src="/images/continue-botton.png " alt="Continue Botton" className=" content-end" width={100} height={100} />
            </div>
          </form>
          <hr className=" bg-gray-200 border-1 dark:bg-gray-700"></hr>
          <h2 className=" text-lg font-semibold text-c.green">Supplier Sign Up</h2>
        </div>
        <div className="">
         <button type="submit" onClick={handleSubmit} ><Image src="/images/signup.png" alt="Hero picture of vegtables on a table" className=' rounded-full  ' width={500} height={500} /> </button>
        </div>

      </section>
    </Fragment>

  );
}

