import "@fontsource/montserrat";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

import { createTheme } from "@mui/material/styles";
import { colors } from "../constants/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {},
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: "Open Sans, Montserrat, Roboto, Arial, sans-serif",
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: colors.purple1,
          }),
        }),
      },
    },
  },
});

export default theme;
