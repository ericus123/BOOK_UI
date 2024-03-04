import { Button, SxProps } from "@mui/material";
import Image from "next/image";

import { ReactNode } from "react";
import dotsLoader from "../../../public/loader.svg";

export interface AuthButtonProps {
  title: string | ReactNode;
  variant?: "text" | "outlined" | "contained" | undefined;
  customClass?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  sx?: SxProps;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  hasIcon?: boolean;
  type?: "button" | "reset" | "submit";
}

const AppButton = ({
  title,
  variant = "text",
  customClass,
  onClick,
  isLoading,
  disabled,
  sx,
  type,
  startIcon,
  endIcon
}: AuthButtonProps) => {
  return (
    <Button
      variant={variant}
      sx={sx}
      type={type || "submit"}
      onClick={onClick}
      startIcon={
        startIcon ||
        (isLoading && <Image src={dotsLoader} width={15} height={15} alt="" />)
      }
      disabled={disabled}
      endIcon={endIcon}>
      {title}
    </Button>
  );
};

export default AppButton;
