"use client";

import Contacts from "../components/contacts";
import withAuthProtection from "../components/hoc/withAuthProtection";

const Home = () => {
  return <Contacts />;
};

export default withAuthProtection(Home);
