"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { colors } from "../../constants/colors";
import useTheme from "../../hooks/useTheme";
import FormHeader from "../common/FormHeader";
import AppLayout from "../layouts/AppLayout";
import SignUpForm from "./Form";

const SignUp = () => {
  const { isDark } = useTheme();
  return (
    <AppLayout>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}>
        <FormHeader {...{ text: "REGISTER" }} />
        <SignUpForm />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap: ".25rem",
            marginTop: ".75rem"
          }}>
          <Typography
            component={"h1"}
            sx={{
              fontSize: "12px",
              // fontFamily: "Montserrat",
              fontWeight: 300,
              color: isDark ? colors.white_9 : colors.gray9,
              lineHeight: "normal",
              textAlign: "left"
            }}>
            Already have an account?
          </Typography>
          <Link
            href={"/signin"}
            style={{
              textDecoration: "none"
            }}>
            <Typography
              component={"h1"}
              sx={{
                fontSize: "12px",
                // fontFamily: "Montserrat",
                fontWeight: 600,
                color: isDark ? colors.white_9 : colors.gray9,
                lineHeight: "normal",
                textAlign: "left",
                textDecoration: "underline"
              }}>
              Signin
            </Typography>
          </Link>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default SignUp;
