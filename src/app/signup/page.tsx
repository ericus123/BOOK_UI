"use client";

import withAuthProtection from "../../components/hoc/withAuthProtection";
import SignUp from "../../components/signup";

const SignUpPage = () => {
  return <SignUp />;
};

export default withAuthProtection(SignUpPage);
