import { Box, Typography } from "@mui/material";
import { CombinedError } from "urql";
import { colors } from "../../constants/colors";
import { getGraphQLErrorMessage } from "../../helpers";

const GraphqlError = ({ error }: { error?: CombinedError }) => {
  return (
    <Box
      sx={{
        paddingBottom: ".5rem"
      }}>
      {error ? (
        <Typography
          component={"h3"}
          sx={{
            color: colors.red5,
            fontSize: "clamp(12px, 1vw, 14px)",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            textAlign: "center"
          }}>
          {getGraphQLErrorMessage(error)}
        </Typography>
      ) : null}
    </Box>
  );
};

export default GraphqlError;
