import { Box, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { colors } from "../../constants/colors";
import { useSignup } from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme";
import AppButton from "../common/AppButton";
import GraphqlError from "../common/GraphqlError";
import TextInput from "../common/Input";

type SignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
};

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<SignUpFormData>();
  const { handleSignup, tokens, fetching, error } = useSignup();

  const onSubmit = (data: SignUpFormData) => {
    handleSignup(data);
  };

  const hasError =
    Boolean(errors.firstName) ||
    Boolean(errors.lastName) ||
    Boolean(errors.email) ||
    Boolean(errors.password) ||
    Boolean(errors.confirmPassword) ||
    Boolean(errors.username);

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
            display: "flex",
            gap: "1rem"
          }}>
          <Box
            sx={{
              marginBottom: "1rem",
              display: "flex",
              flexDirection: "column",
              width: "calc(50% - .5rem)"
            }}>
            <Typography
              component={"h5"}
              sx={{
                color: colors.gray5,
                fontSize: "14px",
                fontWeight: "normal",
                marginBottom: "0.5rem"
              }}>
              First Name
            </Typography>
            <TextInput
              fieldsProps={{
                id: "firstName",
                type: "text",
                placeholder: "First name"
              }}
              register={{
                ...register("firstName", {
                  required: "First Name is required"
                })
              }}
              error={Boolean(errors.firstName)}
              sx={{
                fontSize: "12px"
              }}
            />
            {errors.firstName && (
              <Typography color="error" variant="caption">
                {errors.firstName.message}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              color: colors.gray5,
              fontSize: "14px",
              fontWeight: "normal",
              marginBottom: "0.5rem",
              width: "calc(50% - .5rem)"
            }}>
            <Typography
              component={"h5"}
              sx={{
                color: colors.gray5,
                fontSize: "14px",
                fontWeight: "normal",
                marginBottom: "0.5rem"
              }}>
              Last Name
            </Typography>
            <TextInput
              fieldsProps={{
                id: "lastName",
                type: "text",
                placeholder: "Last name"
              }}
              register={{
                ...register("lastName", {
                  required: "Last Name is required"
                })
              }}
              error={Boolean(errors.lastName)}
              sx={{
                fontSize: "12px"
              }}
            />
            {errors.lastName && (
              <Typography color="error" variant="caption">
                {errors.lastName.message}
              </Typography>
            )}
          </Box>
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
              color: colors.gray5,
              fontSize: "14px",
              fontWeight: "normal",
              marginBottom: "0.5rem"
            }}>
            Email
          </Typography>

          <TextInput
            fieldsProps={{
              id: "email",
              type: "email",
              placeholder: "Email"
            }}
            register={{
              ...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })
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
              color: colors.gray5,
              fontSize: "14px",
              fontWeight: "normal",
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
          title="Sign Up"
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

export default SignUpForm;
