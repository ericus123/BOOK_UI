import { Box, SxProps } from "@mui/material";
import { menuLinks } from "../../../../constants/menuLinks";
import MenuItem from "./Item";

const MenuItems = ({ sx }: { sx?: SxProps }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "clamp(200px, 50%, 600px)",
        "@media (max-width: 990px)": {
          display: "none"
        },
        ...sx
      }}>
      {menuLinks?.map((item, i) => (
        <MenuItem {...{ item }} key={i} />
      ))}
    </Box>
  );
};

export default MenuItems;
