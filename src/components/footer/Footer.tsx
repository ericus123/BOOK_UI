"use client";

import { Box, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import useTheme from "../../hooks/useTheme";

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
      }}
    >
      <Typography
        component={"h3"}
        sx={{
          fontFamily: "Montserrat",
          color: colors.light_8,
          fontSize: "14px",
          fontWeight: "medium",
          marginBottom: "0.5rem",
        }}
      >
        crafted with ❤️ by Amani
      </Typography>
    </Box>
  );
};

export default Footer;
