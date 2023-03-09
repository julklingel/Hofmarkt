import Image from "next/image";
import Link from "next/link";

export default function HomeBotton() {
  return (
    <div>
      <button>
        <Link href="/">
        <Image
          
          src="/svgs/logo.png "
          alt="Back Botton"
          className=" content-end"
          width={50}
          height={50}
        />
        </Link>
      </button>
    </div>
  );
}