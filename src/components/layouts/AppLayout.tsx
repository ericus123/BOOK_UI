"use client";

import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { colors } from "../../constants/colors";
import { useHamburger } from "../../hooks/useHamburger";

import useTheme from "../../hooks/useTheme";
import MenuDrawer from "../navigation/Drawer";

const AppLayout = ({ children, sx }: { children: ReactNode; sx?: SxProps }) => {
  const { isOpen, handleDrawer } = useHamburger();

  const { isDark } = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        background: isDark ? colors.dark_background : colors.light,
        scrollBehavior: "smooth",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        ...sx,
      }}
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: "1400px",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          padding: "0 2rem 0 2rem",
          "@media (min-width: 901px)": {
            padding: "0 4rem 0 4rem",
            width: "calc(100% - 8rem)",
          },
          width: "100%",
        }}
      >
        <MenuDrawer isOpen={isOpen} handleClose={() => handleDrawer(false)} />
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
