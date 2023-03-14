import { getSession } from "next-auth/react";
import HomeButton from "../../../components/button/HomeBotton";
import React, { Fragment} from "react";
import ViewProvider from "../../../../../store/userCreation/NavigationContextUser";
import DataProvider from "store/userCreation/DataContextUser";
import { GetServerSidePropsContext } from 'next';




export default function UserCreation() {
  
  

  return (
    <Fragment>
      <DataProvider>
      <div className="p-4">
        <HomeButton />
      </div>
      <h1 className="text-3xl tracking-widest my-8 mb-32 font-semibold text-center text-c.green ">
        Welcome to Hofmarkt
      </h1>
      <ViewProvider>
      </ViewProvider>
      </DataProvider>
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
