import { getSession } from "next-auth/react";
import HomeButton from "../../../components/button/HomeBotton";
import React, { Fragment} from "react";
import { GetServerSidePropsContext } from 'next';
import CompanyNameForm from "../../../components/supplier/creation/CompanyNameForm";




export default function UserCreation() {
  
  

  return (
    <Fragment>
      <div className="p-4">
        <HomeButton />
      </div>
      <h1 className="text-3xl tracking-widest my-2 mb-8 font-semibold text-center text-c.green ">
        Welcome to Hofmarkt
      </h1>

      <CompanyNameForm/>

  
    </Fragment>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
