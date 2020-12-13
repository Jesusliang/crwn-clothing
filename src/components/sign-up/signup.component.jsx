import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-buttom.component";
import FormInput from "../form-input/form-input.component";

import "./signup.styles.scss";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (signUpData.password !== signUpData.confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        signUpData.email,
        signUpData.password
      );
      const { displayName, email, password, confirmPassword } = signUpData;
      await createUserProfileDocument(user, { displayName });
      setSignUpData({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={signUpData.displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={signUpData.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={signUpData.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={signUpData.confirmPassword}
          handleChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">SignUp</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
