import Stars from "./Stars";

export default function ReviewCard(props: any) {
  const { comment, name, date, rating } = props.review;

  console.log("review card",);
  

  return (
    <section className=" place-content-center mx-auto  max-w-2xl px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-2">
      <figure className="max-w-screen-md bg-secondary rounded-2xl shadow-2xl p-2">
        <blockquote>
          <p className="text-2xl font-semibold text-gray-900 ">{comment}</p>
        </blockquote>
        <Stars />
        <figcaption className="flex items-center mt-6 space-x-3">
          <img
            className="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-300 ">
            <cite className="pr-3 font-medium text-gray-900">{name}</cite>
            <cite className="pl-3 text-sm font-light text-gray-500">
              {date}
            </cite>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
