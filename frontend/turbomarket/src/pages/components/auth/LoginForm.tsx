import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import ErrorMsg from "../msg/ErrorMsg";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

export default function LoginForm() {
  const { data: session } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

    // Add a new state to track client-side rendering (mounted) -> See docs #1
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
      setIsClient(true);
    }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const result: any = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    if (result.error) {
      setError(result.error);
    } else {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Fragment>
      <h1 className="text-3xl tracking-widest mb-10 font-semibold text-center text-c.green ">
        Log In
      </h1>

      <section className=" grid grid-cols-2 p-20 gap-56 content-center">
        <div className=" px-10 ">
          <h2 className=" text-lg font-semibold text-c.green">Log In</h2>
          <hr className=" bg-gray-200 mb-5 border-1 dark:bg-gray-700"></hr>
          <form onSubmit={handleSubmit} className="">
          {isClient && (
        <>
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
        </>
      )}

            <ErrorMsg msg={error} setError={setError} />
          </form>
          <hr className=" bg-gray-200 border-1 dark:bg-gray-700"></hr>
          <Link href={"/auth/account-recovery"}>
            <p className=" text-xs text-c.green hover:underline">
              Forget Password?
            </p>
          </Link>
        </div>
        <div className="drop-shadow-xl">
          <Image
            src="/images/signup.png"
            alt="Hero picture of vegtables on a table"
            className=" rounded-full  "
            width={500}
            height={500}
          />
        </div>
      </section>
    </Fragment>
  );
}
