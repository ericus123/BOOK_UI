"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../constants/colors";
import { useHamburger } from "../../../hooks/useHamburger";
import useTheme from "../../../hooks/useTheme";
import { RootState } from "../../../redux/modules/rootReducer";
import AuthStatus from "./AuthStatus";
import Hamburger from "./Hamburger";
import Menu from "./menu";

const NavBar = () => {
  const { isDarkTheme } = useSelector(
    ({ navigation }: RootState) => navigation
  );

  const dispatch = useDispatch();

  const { handleClose } = useHamburger();

  const { isDark } = useTheme();

  const pathname = usePathname();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        background: isDark ? colors.dark_background : colors.light,
        width: "100vw",
        height: "6rem",
        WebkitBackdropFilter: "blur(20px)",
        backdropFilter: "blur(20px)",
        position: "fixed",
        top: 0,
        zIndex: 10
      }}>
      <Box
        sx={{
          maxWidth: "1400px",
          width: "100%",
          height: "6rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 999,
          padding: "0 4rem 0 4rem",
          "@media (max-width: 901px)": {
            padding: "0 2rem 0 2rem"
          }
        }}>
        {/* <Logo /> */}
        <Box>
          <Link
            href={"/"}
            style={{
              textDecoration: "none"
            }}
            onClick={handleClose}>
            <Typography
              component={"h1"}
              sx={{
                fontSize: "36px",
                fontFamily: "Montserrat",
                fontWeight: 900,
                color: isDark ? colors.light_8 : colors.gray9,
                lineHeight: "normal"
              }}>
           Book.
            </Typography>
          </Link>
        </Box>
        <Menu />
        <Hamburger />
        <AuthStatus
          {...{
            sx: {
              "@media (min-width: 991px)": {
                display: "flex"
              }
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default NavBar;
