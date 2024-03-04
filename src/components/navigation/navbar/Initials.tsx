import { Box, Typography } from "@mui/material";
import { colors } from "../../../constants/colors";
import { extractInitials } from "../../../helpers";

const MemberInitial = ({ fullName }: { fullName: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        background: colors.purple6,
        borderRadius: "50%"
      }}>
      <Typography
        component={"h2"}
        sx={{
          color: colors.light,
          fontSize: "clamp(16px, 1.5vw, 18px)",
          fontStyle: "normal",
          fontWeight: "600",
          opacity: 0.9,
          lineHeight: "normal"
        }}>
        {extractInitials(fullName)}
      </Typography>
    </Box>
  );
};

export default MemberInitial;
