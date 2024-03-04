import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";

const CenteredPopup = ({
  sx,
  children,
}: {
  sx?: SxProps;
  children: ReactNode;
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CenteredPopup;
