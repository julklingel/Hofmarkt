import { getSession } from "next-auth/react";

export default function UserAccount() {

    return (
        <div>
            
            <h1 className="text-3xl tracking-widest m-10 font-semibold text-center text-c.green ">
                Welcome to Hofmarkt MYYYY Account
            </h1>
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
  