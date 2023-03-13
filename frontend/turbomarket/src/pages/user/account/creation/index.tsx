import { getSession } from "next-auth/react";
import HomeButton from "../../../components/button/HomeBotton";
import React, { Fragment, useContext, useState } from "react";
import ViewProvider from "../../../../../store/NavigationContext";
import { ViewContext } from "../../../../../store/NavigationContext";
import DataProvider from "store/DataContext";




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
