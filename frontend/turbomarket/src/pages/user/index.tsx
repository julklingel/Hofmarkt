import { getSession } from "next-auth/react";
import AddressForm from "./AddressForm"
import NameForm from "./NameForm"

export default function UserCreation() {

    return (
        <div>
            <h1 className="text-3xl tracking-widest m-10 font-semibold text-center text-c.green ">
                Welcome to Hofmarkt
            </h1>
            <AddressForm />
            <NameForm/>
        
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
  