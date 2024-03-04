"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { colors } from "../../constants/colors";
import useTheme from "../../hooks/useTheme";
import AppButton from "../common/AppButton";
import AppLayout from "../layouts/AppLayout";

const NotFound = () => {
  const { isDark } = useTheme();
  return (
    <AppLayout>
      <Box
        sx={{
          background: isDark ? colors.dark_background : colors.light,
          height: "calc(100vh - 6rem)"
        }}>
        <Box
          sx={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 6rem)",
            gap: "1rem"
          }}>
     
          <Typography
            component={"p"}
            sx={{
              fontSize: "14px",
              fontFamily: "Montserrat",
              fontWeight: "regular",
              color: isDark ? colors.light_8 : colors.purple8,
              lineHeight: "1.6",
              width: "400px",
              textAlign: "center",
              "@media (max-width: 901px)": { width: "80%", maxWidth: "400px" }
            }}>
            Seems like we&apos;ve hit a snag, just like a cat in a yarn shop.
            Let&apos;s take a different paw-path, shall we?
          </Typography>

          <Link
            href={"/"}
            style={{
              textDecoration: "none"
            }}>
            <AppButton
              title="Go Back Home"
              sx={{
                background: "none",
                border: isDark
                  ? `1px solid ${colors.purple4}`
                  : `1px solid ${colors.purple5}`,
                borderRadius: "40px",
                height: "50px",
                width: "150px",
                color: isDark ? colors.purple4 : colors.purple5,
                fontSize: "14px",
                fontFamily: "Montserrat",
                fontWeight: "medium",
                "&:hover": {
                  background: "none",
                  color: colors.blue5,
                  border: `1px solid ${colors.blue5}`
                },
                "@media (max-width: 720px)": {
                  height: "40px"
                }
              }}
            />
          </Link>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default NotFound;
