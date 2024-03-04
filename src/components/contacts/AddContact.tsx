import { yupResolver } from "@hookform/resolvers/yup";
import { Box, TextField } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import * as Yup from "yup";
import { colors } from "../../constants/colors";
import AppButton from "../common/AppButton";
import InputError from "../common/inputs/InputErros";
import CenteredPopup from "../common/popups/Centered";

type FormData = {
  firstName: string;
  lastName: string;
};

const AddContactPopup = ({
  show,
  handleShow,
}: {
  show: boolean;
  handleShow: (state: boolean) => void;
}) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
  });

  const methods = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Implement your logic to add the contact
    console.log(data.firstName, data.lastName);
    // After adding the contact, reset the form
    methods.reset();
    // Close the popup
    handleShow(false);
  };

  return show ? (
    <CenteredPopup
      sx={{
        width: "400px",
        height: "250px",
        zIndex: 1,
        background: colors.gray5,
        borderRadius: "10px",
        padding: "2rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            cursor: "pointer",
          }}
        >
          <MdClose onClick={() => handleShow(false)} />
        </Box>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <TextField
              variant="standard"
              id="firstName"
              type="text"
              {...methods.register("firstName")}
              error={Boolean(methods.formState.errors.firstName)}
              fullWidth
              autoFocus
              placeholder="First Name"
            />
            <InputError error={methods.formState.errors.firstName?.message} />

            <TextField
              variant="standard"
              id="lastName"
              type="text"
              {...methods.register("lastName")}
              error={Boolean(methods.formState.errors.lastName)}
              fullWidth
              placeholder="Last Name"
            />
            <InputError error={methods.formState.errors.lastName?.message} />

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <AppButton
                title="Add Contact"
                type="submit"
                sx={{
                  background: colors.purple5,
                  color: colors.light,
                  fontWeight: 600,
                  "&:hover": {
                    background: colors.purple9,
                  },
                }}
              />
            </Box>
          </form>
        </FormProvider>
      </Box>
    </CenteredPopup>
  ) : null;
};

export default AddContactPopup;
