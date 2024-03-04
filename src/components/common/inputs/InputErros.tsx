import { Typography } from "@mui/material";
import { colors } from "../../../constants/colors";

const InputError = ({ error }: { error?: string }) => {
  return (
    <Typography
      component={"p"}
      sx={{
        color: colors.red4,
        fontSize: "14px",
      }}
    >
      {error}
    </Typography>
  );
};

export default InputError;
