import HomeBotton from "../button/HomeBotton";
import { useState } from "react";

export default function AccountRecovery(onEmailSent: any) {
  const [email, setEmail] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:4444/auth/send-reset-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      if (res.status === 200) {
        setLoading(false);
        console.log("Email sent successfully");
      }
    } catch (error) {
      alert("Failed to send email");
      console.error("Error sending email:", error);
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
                required
                onChange={(e) => setEmail(e.target.value)}
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
                  required
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
            {loading ? (
              <div className="flex place-content-center" role="status">
                <svg
                  aria-hidden="true"
                  className=" w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <button
                type="submit"
                className={`w-full  ${
                  isCheck ? "bg-green-900 text-white" : "bg-gray-400 text-black"
                } hover:bg-${
                  isCheck ? "green-700" : "gray-500"
                } focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                disabled={!isCheck}
                onClick={sendEmail}
              >
                Reset password
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
