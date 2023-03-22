import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function GalleryCard(props: any) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="bg-secondary rounded-2xl shadow-2xl m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
      <div className="w-full h-48 overflow-hidden rounded-lg bg-secondary relative">
        <Image
          alt=""
          src={`/images/supplier/ammer-imker/facility/${props.image.img}`}
          width={500}
          height={500}
          layout="responsive"
          className={cn(
            "duration-700 ease-in-out group-hover:opacity-75 object-cover object-center absolute inset-0",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
