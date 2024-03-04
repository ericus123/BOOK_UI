"use client";

import { Box, Drawer } from "@mui/material";
import { usePathname } from "next/navigation";
import { colors } from "../../constants/colors";
import useTheme from "../../hooks/useTheme";
import AuthStatus from "./navbar/AuthStatus";
import MenuItems from "./navbar/menu/Items";

const MenuDrawer = ({
  isOpen,
  handleClose
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const { isDark } = useTheme();
  const pathname = usePathname();
  return (
    <Drawer
      anchor={"top"}
      open={isOpen}
      onClose={handleClose}
      sx={{
        position: "relative",
        zIndex: 9,
        // maxWidth: "1000px",
        "@media (min-width: 991px)": {
          display: "none"
        }
      }}
      PaperProps={{
        sx: {
          width: "100%",
          marginTop: "6rem",
          height: "fit-content",
          maxHeight: "600px",
          background: isDark ? colors.dark_background : colors.light
        }
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4rem 2rem 4rem 2rem",
          gap: "3rem",
          maxHeight: "calc(100vh - 200px)",
          overflow: "scroll"
        }}>
        <MenuItems
          sx={{
            display: "flex",
            zIndex: 99,
            "@media (max-width: 990px)": {
              display: "flex"
            },
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "250px"
          }}
        />
        <AuthStatus
          {...{
            sx: {
              display: "flex !important"
            }
          }}
        />
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
