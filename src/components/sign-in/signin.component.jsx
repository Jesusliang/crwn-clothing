import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-buttom.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const Signin = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUser({
      email: "",
      password: "",
    });

    try {
      await auth.signInWithEmailAndPassword(user.email, user.password);
      setUser({
        email: "",
        password: "",
      });
    } catch (error) {}
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          id="email"
          label="email"
          value={user.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          id="password"
          label="password"
          value={user.password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton style="google-sign-in" onClick={signInWithGoogle}>
            {" "}
            Sign in with Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Signin;
