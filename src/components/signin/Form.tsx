import { Box, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { colors } from "../../constants/colors";
import { useSignin } from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme";
import AppButton from "../common/AppButton";
import GraphqlError from "../common/GraphqlError";
import TextInput from "../common/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const SignInForm: React.FC = () => {
  const { isSignedIn, handleSignin, error, fetching } = useSignin();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormData>();

  const onSubmit = (data: SignInFormData) => {
    handleSignin(data);
  };

  const hasError = Boolean(errors.email) || Boolean(errors.password);

  const isDark = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        marginTop: "1.5rem"
      }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          margin: "0 auto",
          maxWidth: "80%",
          width: "450px"
        }}>
        <Box
          sx={{
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "column",
            width: "100%"
          }}>
          <Typography
            component={"h5"}
            sx={{
              color: "#666",
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "0.5rem"
            }}>
            Email
          </Typography>

          <TextInput
            register={{
              ...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })
            }}
            fieldsProps={{
              id: "email",
              type: "email",
              name: "email",
              placeholder: "Email"
            }}
            error={Boolean(errors.email)}
            sx={{
              fontSize: "12px"
            }}
          />
          {errors.email && (
            <Typography color="error" variant="caption">
              {errors.email.message}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "column",
            width: "100%"
          }}>
          <Typography
            component={"h5"}
            sx={{
              color: "#666",
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "0.5rem"
            }}>
            Password
          </Typography>

          <TextInput
            fieldsProps={{
              id: "password",
              type: "password",
              placeholder: "Password"
            }}
            register={{
              ...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters"
                }
              })
            }}
            error={Boolean(errors.password)}
            sx={{
              fontSize: "12px"
            }}
          />
          {errors.password && (
            <Typography color="error" variant="caption">
              {errors.password.message}
            </Typography>
          )}
        </Box>
        <GraphqlError {...{ error }} />
        <AppButton
          title="Sign In"
          isLoading={fetching}
          disabled={fetching}
          sx={{
            background: isDark ? colors.purple5 : colors.gray9,
            borderRadius: "5px",
            height: "50px",
            width: "100%",
            color: colors.light,
            fontSize: "14px",
            fontFamily: "Montserrat",
            fontWeight: "medium",
            "@media (max-width: 720px)": {
              height: "50px"
            },
            "&:hover": {
              background: colors.gray7
            }
          }}
        />
      </form>
    </Box>
  );
};

export default SignInForm;
