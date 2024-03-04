"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { colors } from "../../constants/colors";
import useTheme from "../../hooks/useTheme";
import FormHeader from "../common/FormHeader";
import AppLayout from "../layouts/AppLayout";
import SignInForm from "./Form";

const SignIn = () => {
  const { isDark } = useTheme();
  return (
    <AppLayout>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <FormHeader {...{ text: "SIGN IN" }} />
        <SignInForm />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: ".25rem",
            marginTop: ".75rem",
          }}
        >
          <Typography
            component={"h1"}
            sx={{
              fontSize: "12px",
              // fontFamily: "Montserrat",
              fontWeight: 300,
              color: isDark ? colors.white_9 : colors.gray9,
              lineHeight: "normal",
              textAlign: "left",
            }}
          >
            Don&apos;t have an account?
          </Typography>
          <Link
            href={"/signup"}
            style={{
              textDecoration: "none",
            }}
          >
            <Typography
              component={"h1"}
              sx={{
                fontSize: "12px",
                // fontFamily: "Montserrat",
                fontWeight: 600,
                color: isDark ? colors.white_9 : colors.gray9,
                lineHeight: "normal",
                textAlign: "left",
                textDecoration: "underline",
              }}
            >
              Signup
            </Typography>
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: ".25rem",
            marginTop: ".25rem",
            pointerEvents: "none",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              pointerEvents: "none",
            }}
            href="/forgot-password"
          >
            <Typography
              component={"h1"}
              sx={{
                fontSize: "12px",
                // fontFamily: "Montserrat",
                fontWeight: 600,
                color: isDark ? colors.white_9 : colors.gray9,
                lineHeight: "normal",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              Forgot password?
            </Typography>
          </Link>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default SignIn;
