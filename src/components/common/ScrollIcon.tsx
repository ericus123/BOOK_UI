"use client";

import GoToTop from "react-scroll-to-top";
import { colors } from "../../constants/colors";
import useTheme from "../../hooks/useTheme";

const ScrollIcon = () => {
  const { isDark } = useTheme();
  return (
    <GoToTop
      smooth
      style={{
        right: "20px",
        bottom: "20px",
        background: colors.purple5
      }}
      color={!isDark ? colors.light : colors.light_8}
      top={800}
    />
  );
};

export default ScrollIcon;
