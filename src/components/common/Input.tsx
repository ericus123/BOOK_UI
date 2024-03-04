import { TextField, TextFieldProps } from "@mui/material";
import { CSSProperties } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { colors } from "../../constants/colors";
import useTheme from "../../hooks/useTheme";

export const TextInput = ({
  error,
  register,
  sx,
  fieldsProps
}: {
  register: UseFormRegisterReturn;
  error?: boolean;
  sx?: CSSProperties;
  fieldsProps: TextFieldProps;
}) => {
  const { isDark } = useTheme();
  return (
    <TextField
      {...fieldsProps}
      variant="standard"
      {...register}
      error={error}
      fullWidth
      autoFocus={false}
      sx={{
        border: error
          ? `1px solid ${colors.red3}`
          : `1px solid ${colors.gray5}`,
        borderRadius: "5px",
        height: "40px",
        color: isDark ? colors.light_8 : colors.gray9,
        marginBottom: 0,
        fill: "none",
        outline: "none",
        "& fieldset": { border: "none" },
        paddingLeft: "10px"
      }}
      InputProps={{
        disableUnderline: true,
        style: {
          padding: 0,
          height: "40px",
          color: isDark ? colors.light_8 : colors.gray9,
          fill: "none",
          outline: "none",
          ...sx
        }
      }}
    />
  );
};

export default TextInput;
