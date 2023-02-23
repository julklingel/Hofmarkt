import React, { Fragment, useState } from "react";

import SignupForm from "../components/auth/SignupForm";
import Navbar from "../components/navbar";



export default function Signup() {

  return (
    <Fragment>
      <Navbar/>
      <SignupForm/>
    </Fragment>
  )
}

