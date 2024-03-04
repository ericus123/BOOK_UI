import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
import { colors } from "../../../../constants/colors";
import { MenuLink } from "../../../../constants/menuLinks";
import { useHamburger } from "../../../../hooks/useHamburger";
import useTheme from "../../../../hooks/useTheme";

const MenuItem = ({ item }: { item: MenuLink }) => {
  const { isDark } = useTheme();

  const { handleClose } = useHamburger();

  const path = usePathname();
  const isActive = item.goto === path;

  return (
    <Box>
      <Link
        href={item.goto}
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
        onClick={handleClose}>
        <Typography
          component={"p"}
          sx={{
            fontSize: "14px",
            fontFamily: "Montserrat",
            fontWeight: "regular",
            color: isDark
              ? isActive
                ? colors.light
                : colors.light_6
              : isActive
              ? colors.purple5
              : colors.purple9,
            transition: ".2s ease-in-out",
            "&:hover": {
              transition: ".2s ease-in-out",
              color: isDark ? colors.light : colors.purple5
            }
          }}>
          {item.name}
        </Typography>
      </Link>
    </Box>
  );
};

export default MenuItem;
