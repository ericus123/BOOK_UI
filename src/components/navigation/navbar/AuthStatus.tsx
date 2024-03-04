import { Box, SxProps } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { colors } from "../../../constants/colors";
import { useSignin } from "../../../hooks/useAuth";
import { useHamburger } from "../../../hooks/useHamburger";
import AppButton from "../../common/AppButton";
import AuthPopup from "./AuthPopup";

const AuthStatus = ({ sx }: { sx?: SxProps }) => {
  const pathname = usePathname();

  const { isSignedIn } = useSignin();
  const { handleClose } = useHamburger();
  return (
    <Box
      sx={{
        display: "none",
        alignItems: "center",
        ...sx
      }}>
      {isSignedIn ? (
        <AuthPopup />
      ) : (
        <Link
          href={pathname === "/signin" ? "/signup" : "/signin"}
          style={{
            textDecoration: "none"
          }}
          onClick={handleClose}>
          <AppButton
            title={pathname === "/signin" ? "Signup" : "Signin"}
            startIcon={
              <Box
                sx={{
                  marginTop: "-2px"
                }}>
                <FaUser
                  style={{
                    fontSize: "15px"
                  }}
                />
              </Box>
            }
            sx={{
              background: colors.purple5,
              borderRadius: "25px",
              height: "45px",
              width: "150px",
              color: colors.light,
              fontSize: "16px",
              fontFamily: "Montserrat",
              fontWeight: "medium",
              "&:hover": {
                background: colors.gray7
              }
            }}
          />
        </Link>
      )}
    </Box>
  );
};

export default AuthStatus;
