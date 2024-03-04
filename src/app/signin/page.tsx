"use client";

import withAuthProtection from "../../components/hoc/withAuthProtection";
import SignIn from "../../components/signin";

const SignInPage = () => {
  return <SignIn />;
};

export default withAuthProtection(SignInPage);
