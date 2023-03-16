import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SupplierCard(props: any) {
  const [isLoading, setLoading] = useState(true);

  const { companyName, companyImage, companyAddress, slug } = props.supplier;
  const linkPath = `/supplier/${slug}`;
  const imgPath = `/images/supplier/${slug}/${companyImage}`;

  return (
    <li >
      <Link href={linkPath}>
        <div className=" bg-secondary rounded-2xl shadow-2xl">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <Image
            alt=""
            src={imgPath}
            width={500}
            height={500}
            layout="responsive"
            className={cn(
              "duration-700 ease-in-out group-hover:opacity-75",
              isLoading
                ? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <h3 className="mt-4 text-lg text-c.green">{companyName}</h3>
        <p className="mt-1 text-sm font-medium text-gray-700">
          {companyAddress}
        </p>
        </div>
      </Link>
    </li>
  );
}
