import Image from "next/image";
import { Fragment, useContext, useState } from "react";
import { PersonalDataContext, AddressData, PersonalData } from "../../../../../store/DataContext";
import { useSession } from "next-auth/react";
import { useRouter} from "next/router";
import { FormEvent } from "react";




type PersonalDataContextType = {
  personalData: PersonalData;
  setPersonalData: React.Dispatch<React.SetStateAction<PersonalData>>;
  addressData: AddressData;
  setAddressData: React.Dispatch<React.SetStateAction<AddressData>>;
};


export default function DataConsentForm() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const accessToken = session?.accessToken;
  const { personalData, setPersonalData } = useContext<PersonalDataContextType>(PersonalDataContext);
  const { addressData, setAddressData } = useContext<PersonalDataContextType>(PersonalDataContext);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState();
  

  const handleCheckboxChange = (e: FormEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.checked);
  };

  async function handleSubmit(e:FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:4444/user", {
        method: "POST",
        body: JSON.stringify({ personalData, addressData }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const data = await res.json();
      router.push("/");
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <Fragment>
    <section className="grid grid-cols-2 px-40  gap-x-56">
      <div className=" text-justify text-lg text-c.green">
        <p className="">
          At Hofmarkt, we take your privacy seriously and ensure that your
          personal information is handled securely. All data that we collect
          from you, including your address and phone number, is encrypted and
          stored on our servers with the highest level of security measures in
          place.
        </p>
        <p className="my-4">
          We never share your information with any third parties without your
          explicit consent. If you choose to contact or order from a particular
          supplier, we will only share your information with them to facilitate
          your order. Rest assured that your data is safe with us and will only
          be used for the purpose of delivering your order.
        </p>
        <p className="my-4">
          Thank you for trusting us with your information. We're committed to
          providing you with a safe and enjoyable shopping experience at
          Hofmarkt.
        </p>

        <div className="flex items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 rounded  focus:ring-2  focus:ring-c.green focus:ring-opacity-50"
            checked={isChecked}
            onChange={handleCheckboxChange}

          />
          <label className="ml-2 text-sm font-medium ">
            I agree with the{" "}
            <a
              href="#"
              className="hover:underline font-semibold text-c.green"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <div className="pt-6">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isChecked}
          className={`rounded bg-${isChecked ? 'green' : 'gray'}-700 p-2 px-3 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bgbg-${isChecked ? 'green' : 'gray'}-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bgbg-${isChecked ? 'green' : 'gray'}-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-green-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}
        >
          Submit
        </button>
      </div>
      </div>

      <div className="place-self-center">
        <Image
          src="/images/datapriv.png"
          alt="Hero picture of vegtables on a table"
          className="rounded-3xl"
          width={450}
          height={450}
        />
      </div>

     
      
    </section>

    </Fragment>
  );
}



