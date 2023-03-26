import Stars from "./Stars";
import ReviewCard from "./ReviewCard";

export default function ReviewGrid() {
  const DUMMY_REVIEWS = {
    reviews: [
      {
        id: "1",
        comment:
          "I recently purchased this honey jar and I'm absolutely in love with it! The honey has a rich, floral flavor that adds a perfect touch of sweetness to my morning oatmeal. The jar is well-sealed and keeps the honey fresh and easy to use. I highly recommend this honey to anyone looking for a delicious and high-quality sweetener.",
        name: "Bonnie Green",
        date: "22.12.2020",
        rating: 3,
      },
      {
        id: "2",
        comment:
          "I recently purchased this honey jar and I'm absolutely in love with it! The honey has a rich, floral flavor that adds a perfect touch of sweetness to my morning oatmeal. The jar is well-sealed and keeps the honey fresh and easy to use. I highly recommend this honey to anyone looking for a delicious and high-quality sweetener.",
        name: "Bonnie Blue",
        date: "22.12.2020",
        rating: 4,
      },
      {
        id: "3",
        comment:
          "I recently purchased this honey jar and I'm absolutely in love with it! The honey has a rich, floral flavor that adds a perfect touch of sweetness to my morning oatmeal. The jar is well-sealed and keeps the honey fresh and easy to use. I highly recommend this honey to anyone looking for a delicious and high-quality sweetener.",
        name: "Bonnie Red",
        date: "22.12.2020",
        rating: 5,
      },
    ],
  };

  const reviews = DUMMY_REVIEWS.reviews;

  return reviews ? (
    <div className="mx-auto max-w-2xl px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-2">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
        {reviews.map((review: any) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  ) : (
    <div className="h-screen text-center text-xl p-5 text-c.green">
      No images found
    </div>
  );
}
