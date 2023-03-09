import { getSession } from "next-auth/react";
import AddressForm from "./AddressForm"
import NameForm from "./NameForm"
import HomeButton from "../../../components/button/HomeBotton"
import Footer from "./Footer"
import DataConsentForm from "./DataConsentForm"

export default function UserCreation() {

    return (
        <div className="">
            <div className="p-4"> <HomeButton/> </div>
            <h1 className="text-3xl tracking-widest my-8 mb-32 font-semibold text-center text-c.green ">
                Welcome to Hofmarkt
            </h1>
            {/* <AddressForm /> */}

            {/* <NameForm/> */}

            <DataConsentForm/>
            <Footer/>
           

        </div>
    );

}


export async function getServerSideProps(context: any) {
    const session = await getSession({ req: context.req });
  
    if (!session) {
      return {
        redirect: {
          destination: "auth/login",
          permanent: false,
        },
      };
    }
  
    return {
      props: { session },
    };
  }
  