import React from "react";
import GallaryCard from "./GalleryCard";

export default function GalleryGrid(props: any) {
  const DUMMY_IMAGES = {
    dada: [
      {
        id: "1",
        slug: "ammer-imker",
        img: "1.png",
      },
      {
        id: "2",
        slug: "ammer-imker",
        img: "2.png",
      },
      {
        id: "3",
        slug: "ammer-imker",
        img: "3.png",
      },
      {
        id: "4",
        slug: "ammer-imker",
        img: "4.png",
      },
    ],
  };
  const images = DUMMY_IMAGES.dada;

  return images ? (
    <div className="mx-auto max-w-2xl px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-2">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image: any) => (
          <GallaryCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  ) : (
    <div className="h-screen text-center text-xl p-5 text-c.green">
      No images found
    </div>
  );
}
