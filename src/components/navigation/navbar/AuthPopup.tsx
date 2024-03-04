import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { colors } from "../../../constants/colors";
import { verifyToken } from "../../../helpers";
import { useSignin, useSignout } from "../../../hooks/useAuth";
import { useHamburger } from "../../../hooks/useHamburger";
import useTheme from "../../../hooks/useTheme";
import AppPopover from "../../common/AppPopover";
import MemberInitial from "./Initials";

export enum RoleName {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  DEFAULT = "DEFAULT",
}

export type TokenData = {
  sub: string;
  email: string;
  isVerified: boolean;
  role?: RoleName;
  firstName: string;
  lastName: string;
  avatar?: string;
};

const Item = ({ onClick, text }: { onClick: () => void; text: string }) => {
  const { isDark } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        cursor: "pointer",
      }}
    >
      <Typography
        component={"h2"}
        sx={{
          fontSize: "14px",
          fontFamily: "Montserrat",
          fontWeight: "regular",
          color: colors.gray9,
          transition: ".2s ease-in-out",
          "&:hover": {
            transition: ".2s ease-in-out",
            fontWeight: "medium",
          },
          paddingLeft: "1rem",
        }}
        onClick={onClick}
      >
        {text}
      </Typography>
    </Box>
  );
};

const AuthPopup = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (
    event: MouseEvent<
      HTMLAnchorElement,
      MouseEvent<Element, MouseEvent<Element, MouseEvent>>
    >
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const { handleSignout } = useSignout();
  const { tokens } = useSignin();
  //@ts-ignore
  let member: TokenData = verifyToken(tokens?.accessToken);

  const { isDark } = useTheme();
  const { handleClose: closeMenu } = useHamburger();
  return (
    <Box>
      <Box
        sx={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          position: "relative",
          background: colors.pink5,
          cursor: "pointer",
        }}
        component="div"
        onClick={(e: any) => handleClick(e)}
      >
        <Box
          sx={{
            position: "relative",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          {member?.avatar != undefined ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/avatars/${member?.avatar}`}
              alt=""
              fill
            />
          ) : (
            <>
              <MemberInitial
                fullName={`${member?.firstName} ${member?.lastName}`}
              />
            </>
          )}
        </Box>
      </Box>

      <AppPopover
        handleClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            background: colors.white_9,
            width: "100%",
            maxWidth: "250px",
            gap: "1rem",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            padding: "1rem 1rem 1rem 0",
          }}
        >
          <Item
            {...{
              text: "Signout",
              onClick: () => {
                handleSignout();
                closeMenu();
              },
            }}
          />
        </Box>
      </AppPopover>
    </Box>
  );
};

export default AuthPopup;
