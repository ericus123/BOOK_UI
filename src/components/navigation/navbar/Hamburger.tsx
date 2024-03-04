import { Box, SxProps } from "@mui/material";
import { colors } from "../../../constants/colors";
import { useHamburger } from "../../../hooks/useHamburger";
import ThemeToogle from "./ThemeToogle";

const Hamburger = () => {
  const { isOpen, handleDrawer } = useHamburger();
  const closedSytles1: SxProps = isOpen
    ? {
        transform: "rotate(-45deg)",
        marginBottom: "-13px",
        marginTop: "14px",
        transition: ".3s ease-in-out"
      }
    : {};

  const closedSytles2: SxProps = isOpen
    ? {
        transform: "rotate(45deg)",
        transition: ".3s ease-in-out"
      }
    : {};
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem"
      }}>
      <ThemeToogle />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "7.5px",
          minWidth: "40px",
          minHeight: "37.5px",
          position: "relative",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          "@media (min-width: 991px)": {
            display: "none"
          }
        }}
        component={"div"}
        onClick={() => handleDrawer(!isOpen)}>
        <Box
          sx={{
            width: "40px",
            height: "5px",
            borderRadius: "5px",
            background: colors.purple5,
            transition: ".3s ease-in-out",
            ...closedSytles1
          }}></Box>
        <Box
          sx={{
            width: "40px",
            height: "5px",
            borderRadius: "5px",
            background: colors.purple5,
            display: !isOpen ? "flex" : "none",
            transition: ".3s ease-in-out"
          }}></Box>
        <Box
          sx={{
            width: "40px",
            height: "5px",
            borderRadius: "5px",
            background: colors.purple5,
            transition: ".3s ease-in-out",
            ...closedSytles2
          }}></Box>
      </Box>
    </Box>
  );
};

export default Hamburger;
