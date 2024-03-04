import { Box } from "@mui/material";
import { colors } from "../../constants/colors";

import { motion as Motion } from "framer-motion";

const AppLoader = () => {
  return (
    <Box
      style={{
        background: colors.dark_background,
        width: "100vw",
        height: "100vh",
        display: "flex",
        zIndex: 999,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Motion.img
        src="/images/icons/paw-active.svg"
        alt="Logo"
        style={{ width: 80, height: 80 }}
        animate={{
          opacity: [1, 0.7, 1, 0.7, 1],
          scale: [1, 1.1, 1.2, 1.1, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />
    </Box>
  );
};

export default AppLoader;
