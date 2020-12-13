import React from "react";
import Signin from "../../components/sign-in/signin.component";
import SignUp from "../../components/sign-up/signup.component";

import "./signin-page.scss";

const SigninPage = () => {
  return (
    <div className="signin-page">
      <Signin />
      <SignUp />
    </div>
  );
};

export default SigninPage;
