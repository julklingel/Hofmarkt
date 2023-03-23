import HomeBotton from "../button/HomeBotton";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

export default function AccountRecovery() {
  const router = useRouter();
  const [isEntered, setIsEntered] = useState(false);
  const [pin, setPin] = useState("");

  const checkPIN = async () => {
    const res = await fetch(
      "http://localhost:3000/api/auth/password-reset/pin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pin: pin,
        }),
      }
    );
    const data = await res.json();
    if (data.status === "success") {
      sessionStorage.setItem("passwordResetToken", data.token);
      router.push("/auth/password-reset");
    }
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
        <HomeBotton />
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-c.green">
          Hofmarkt
        </h1>

        <div className="w-full p-6 rounded-lg shadow md:mt-0 sm:max-w-md bg-secondary sm:p-8">
          <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-c.green md:text-2xl ">
            Enter your PIN
          </h1>
          <p className="font-light text-gray-700 ">
            We just send you the PIN to your email. Please enter it here.
          </p>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  text-c.green"
              >
                Your PIN:
              </label>
              <input
                type="numeric"
                name="PIN"
                id="PIN"
                maxLength={6}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="X X X X X X"
                onChange={(e) => {
                  if (e.target.value.length === 6) {
                    setIsEntered(true);
                    setPin(e.target.value);
                  } else {
                    setIsEntered(false);
                  }
                }}
              />
            </div>

            <button
              type="submit"
              className={`w-full  ${
                isEntered ? "bg-green-900 text-white" : "bg-gray-400 text-black"
              } hover:bg-${
                isEntered ? "green-700" : "gray-500"
              } focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
              disabled={!isEntered}
              onClick={checkPIN}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
