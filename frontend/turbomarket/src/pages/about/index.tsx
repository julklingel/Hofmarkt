import Image from "next/image";
import { Fragment } from "react";
import Navbar from "../components/navbar";

export default function AboutUs() {
  return (
   
    <Fragment>
        <Navbar />
    <div className="text-c.green">
      <div className="   flex flex-col justify-center">
        <div className="relative  sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10 animate__animated animate__fadeIn">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <Image
                  src="/images/theboyz.jpg"
                  alt="Julius and Julian"
                  width={100}
                  height={100}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div className="block pl-2 font-semibold text-xl self-start">
                  <h2 className="leading-relaxed">Julius & Julian</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    Software Engineering Students
                  </p>
                </div>
              </div>
              <div className="divide-y divide-gray-400">
                <div className="py-8 text-base leading-6 space-y-4 text-c.green sm:text-lg sm:leading-7">
                  <p>
                    Julius and Julian, two passionate software engineering
                    students, recognized the need to bridge the gap between
                    local food suppliers and their customers. They decided to
                    take matters into their own hands and create a platform that
                    makes it easier for people to access fresh, locally sourced
                    products.
                  </p>
                  <p>
                    With a shared passion for supporting local businesses and
                    promoting sustainable practices, they embarked on a journey
                    to create a user-friendly webshop that would make it easy
                    for customers to find and purchase goods from local
                    suppliers.
                  </p>
                  <p>
                    Their dedication to this project goes beyond just creating a
                    convenient shopping experience. Julius and Julian are
                    committed to fostering a sense of community and encouraging
                    a healthier, more sustainable way of life.
                  </p>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p>Want to get in touch? </p>
                  <p>Contact us at:</p>
                  <p>
                    <a
                      href="mailto:contact@localfoodsuppliers.com"
                      className="text-green-600"
                    >
                      contact@hofmarkt.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}
