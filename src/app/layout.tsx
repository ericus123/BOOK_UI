import { Box } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-multi-carousel/lib/styles.css";
import ScrollIcon from "../components/common/ScrollIcon";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navigation/navbar";
import { Providers } from "../redux/provider";
import "../style.css";
import ThemeRegistry from "../theme/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FortressEye",
  description: "Home automation system (IOT)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Providers>
            <NavBar />
            <Box sx={{ minHeight: "100vh" }}>{children}</Box>
            <Footer />
            <ScrollIcon />
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
