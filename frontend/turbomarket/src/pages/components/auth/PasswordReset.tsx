import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HomeBotton from "@/pages/components/button/HomeBotton";

export default function PasswordReset(props: any) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validatePasswords = async (e: any) => {

    e.preventDefault();
    if (password === confirmPassword) {
      const res = await fetch("http://localhost:4444/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          token: props.token,
          email: props.email,
        }),
      });

      if (res.status === 200) {
        router.push("/auth/login");
      }
    } else {
      setErrorMessage("Passwords do not match.");
    }
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
        <HomeBotton />
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-c.green">
          Hofmarkt
        </h1>

        <div className="w-full p-6 rounded-lg shadow dark:border md:mt-0 sm:max-w-md bg-secondary sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-c.green md:text-2xl">
            Change Password
          </h2>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium  text-c.green"
              >
                New Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300
              text-c.green sm:text-sm rounded-lg focus:ring-primary-600 focus:border-green-600 block w-full p-2.5 
                     dark:focus:ring-green-500 dark:focus:border-green-500"
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium  text-c.green"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300
              text-c.green sm:text-sm rounded-lg focus:ring-primary-600 focus:border-green-600 block w-full p-2.5  
                    dark:focus:ring-green-500 dark:focus:border-green-500"
              />
            </div>
            <div className="flex items-start"></div>
            <button
              type="submit"
              onClick={validatePasswords}
              className="w-full text-white bg-green-900 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Reset passwod
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
