import React, { Fragment, useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import Navbar from "../components/navbar";



export default function Signup() {

  return (
    <Fragment>
      <Navbar/>
      <LoginForm/>
    </Fragment>
  )
}

