import { useSession } from "next-auth/react";
import { Fragment } from "react";
import { signOut } from "next-auth/react";

export default function UserAccount() {
  const { data: session, status } = useSession()
  const accessToken = session?.accessToken;

  const hanldeSubmit = async (e:any) => {
    e.preventDefault();
    signOut({ redirect: true,  callbackUrl: '/auth/login'})
}

  return (
    <Fragment>
      <div className="place-items-center">
      <div>{status}</div>
      {session?.expires}
      <div>{accessToken}</div>
      <button onClick={hanldeSubmit} className="border m-8 p-4">Logout</button>
      </div>
    </Fragment>
  );
}
