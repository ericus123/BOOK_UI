import { Box } from "@mui/material";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { colors } from "../../../constants/colors";
import useTheme from "../../../hooks/useTheme";

const ThemeToogle = () => {
  const { isDark, changeTheme } = useTheme();

  const handleTheme = () => {
    changeTheme(!isDark);
  };
  return (
    <Box
      sx={{
        width: "50px",
        height: "25px",
        background: !isDark ? "white" : colors.purple8,
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        // marginLeft: "auto",
        // marginRight: "2rem",
        boxShadow: !isDark
          ? "0px 0px 10px rgba(0, 0, 0, .1)"
          : "0px 0px 5px rgba(0, 255, 255, .1)"
      }}
      component={"div"}
      onClick={handleTheme}>
      <Box
        sx={{
          width: "100%",
          height: "22.5px",
          background: "transparent",
          borderRadius: "50%",
          marginLeft: "2.5px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "0 2.5px 0 2.5px"
        }}>
        <DarkModeSwitch
          style={{
            marginLeft: !isDark ? "auto" : 0,
            borderRadius: "50%"
          }}
          checked={isDark}
          onChange={handleTheme}
          size={20}
        />
      </Box>
    </Box>
  );
};

export default ThemeToogle;
