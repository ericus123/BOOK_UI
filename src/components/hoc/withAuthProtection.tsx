"use client";

import { useSignin } from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import { verifyToken } from "../../helpers";
import { TokenData } from "../navigation/navbar/AuthPopup";

// eslint-disable-next-line react/display-name
const withAuthProtection = (Component: FC<TokenData>) => (props: any) => {
  const { isSignedIn, tokens } = useSignin();
  const unAuthRoutes = ["/signin", "/signup"];

  const router = useRouter();

  let data: TokenData | undefined | null = verifyToken(tokens?.accessToken);

  const path = usePathname();

  if (!isSignedIn) {
    if (unAuthRoutes?.includes(path)) {
      //@ts-ignore
      return <Component {...data} />;
    } else {
      router.push("/signin");
    }
  } else {
    if (unAuthRoutes?.includes(path)) {
      router.push("/");
    } else {
      //@ts-ignore
      return <Component {...data} />;
    }
  }
};

export default withAuthProtection;
