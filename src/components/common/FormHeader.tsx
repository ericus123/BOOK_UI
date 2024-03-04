import { SxProps, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import useTheme from "../../hooks/useTheme";

const FormHeader = ({ text, sx }: { text: string; sx?: SxProps }) => {
  const { isDark } = useTheme();
  return (
    <Typography
      component={"h1"}
      sx={{
        fontSize: [
          // "clamp(28px, 4.5vw, 48px)",
          "clamp(24px, 5vw, 28px)",
          "28px"
        ],
        fontFamily: "Montserrat",
        fontWeight: 600,
        color: isDark ? colors.light_8 : colors.gray7,
        lineHeight: "normal",
        textAlign: "center",
        ...sx
      }}>
      {text}
    </Typography>
  );
};

export default FormHeader;
