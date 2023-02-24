import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ErrorMsg from "../msg/ErrorMsg";

async function createAccount(email: string, password: string, isSupplier: boolean) {

  const res = await fetch('http://localhost:4444/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password, isSupplier }),
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

export default function SignupForm() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSupplier, setIsSupplier] = useState(false);

  function switchAccountModeHandler() {
    setIsSupplier((prevState) => !prevState);
  }


  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [error, setError] = useState("");



  const handleSubmit = async (e: any) => {

    e.preventDefault();
    if (password !== password2) {
      setError("Passwords do not match");
    } else {
      try {
        const account = await createAccount(email, password, isSupplier);
        setEmail("");
        setPassword("");
        setPassword2("");

      } catch (error: any) {
        setError(error.message);

      }


    };
  };


  return (
    <Fragment>
      <h1 className="text-3xl tracking-widest mb-10 font-semibold text-center text-c.green ">
        Sign Up
      </h1>

      <section className=" grid grid-cols-2 p-20 gap-56 content-center">
        <div className=" px-10 ">
          <h2 className=" text-lg font-semibold text-c.green">{isSupplier ? 'Supplier Sign Up' : 'User Sign Up'}</h2>
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
                onFocus={() => setError("")}
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
                onFocus={() => setError("")}
              />
            </div>
            <div className="mb-6">
              <label className="block text-c.green text-sm font-bold mb-2">
                Re-enter Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                onFocus={() => setError("")}
              />
            </div>

            <ErrorMsg msg={error} setError={setError} />

          </form>
          <hr className=" bg-gray-200 border-1 dark:bg-gray-700"></hr>
          <div className="flex"  >
            <button onClick={switchAccountModeHandler} ><p className=" text-lg font-semibold hover:underline text-c.green"> {isSupplier ? 'Sign up as a User here' : `Sign up as a Supplier here`}</p></button>
          </div>

        </div>
        <div className="drop-shadow-xl">
          {isSupplier ? <Image src="/images/supplier-signup.jpeg" alt="Hero picture of vegtables on a table" className=' rounded-full  '  width={500} height={500}/> : <Image src="/images/signup.png" alt="Hero picture of vegtables on a table" className=' rounded-full  ' width={500} height={500} />  }
        </div>



      </section>
    </Fragment>

  );
}


