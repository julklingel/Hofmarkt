import Stars from "./Stars"

export default function ReviewForm() {
    return (
      <section className=" place-content-center mx-auto  max-w-2xl px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-2">
        <figure className="max-w-screen-md bg-secondary rounded-2xl shadow-2xl p-2">
       
         
          <blockquote>
            <p className="text-2xl font-semibold text-gray-900 ">
              "I recently purchased this honey jar and I'm absolutely in love with
              it! The honey has a rich, floral flavor that adds a perfect touch of
              sweetness to my morning oatmeal. The jar is well-sealed and keeps
              the honey fresh and easy to use. I highly recommend this honey to
              anyone looking for a delicious and high-quality sweetener."
            </p>
          </blockquote>
          <Stars/>
          <figcaption className="flex items-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-300 ">
              <cite className="pr-3 font-medium text-gray-900">Bonnie Green</cite>
              <cite className="pl-3 text-sm font-light text-gray-500">
                22.12.2020
              </cite>
            </div>
          </figcaption>
        </figure>
      </section>
    );
  }
  