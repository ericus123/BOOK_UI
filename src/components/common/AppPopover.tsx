import { Popover, PopoverOrigin, SxProps } from "@mui/material";
import { ReactNode } from "react";

const AppPopover = ({
  children,
  anchorEl,
  handleClose,
  anchorOrigin,
  sx
}: {
  children: ReactNode;
  anchorEl: any;
  anchorOrigin: PopoverOrigin;
  handleClose: () => void;
  sx: SxProps;
}) => {
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
      slotProps={{
        paper: {
          sx: {
            background: "transparent",
            borderRadius: 0,
            ...sx
          }
        }
      }}>
      {children}
    </Popover>
  );
};
export default AppPopover;
