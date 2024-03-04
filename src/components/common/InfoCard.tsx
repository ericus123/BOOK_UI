import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";
import { colors } from "../../constants/colors";
import useTheme from "../../hooks/useTheme";

const InfoCard = ({
  icon,
  title,
  description
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => {
  const { isDark } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        width: "100%",
        transition: ".3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
          transition: ".3s ease-in-out"
        }
      }}>
      <Box sx={{}}>
        <Box
          sx={{
            width: "80px",
            height: "80px",
            minWidth: "60px",
            minHeight: "60px",
            background: colors.purple5,
            borderRadius: "10px"
          }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
            {icon}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          rowGap: "10px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          "@media(max-width: 480px)": {
            rowGap: "3px"
          }
        }}>
        <Box>
          <Typography
            component={"h2"}
            sx={{
              fontSize: [
                "clamp(16px, 4.5vw, 14px)",
                "clamp(14px, 5vw, 16px)",
                "16px"
              ],
              //   fontFamily: "Montserrat",
              fontWeight: 900,
              color: isDark ? colors.light_6 : colors.gray9,
              lineHeight: "normal",
              maxWidth: "300px"
            }}>
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography
            component={"p"}
            sx={{
              fontSize: [
                "clamp(12px, 4.5vw, 12px)",
                "clamp(12px, 5vw, 14px)",
                "14px"
              ],
              fontFamily: "Montserrat",
              fontWeight: "regular",
              color: isDark ? colors.light_6 : colors.gray7,
              lineHeight: "normal",
              maxWidth: "350px"
            }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoCard;
