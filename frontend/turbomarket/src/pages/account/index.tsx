import { getSession } from "next-auth/react";
import { Fragment } from "react";
import Overview from "../components/account/Overview";
import UserAccount from "../components/account/UpdateProfile";
import Navbar from "../components/navbar";

export default function AccountPage() {
  return (
    <Fragment>
      <Navbar/>
      <Overview/>
{/*       
      <UserAccount/> */}
    </Fragment>
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
