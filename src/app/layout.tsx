import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavbarContainer from "@/container/NavbarContainer/NavbarContainer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "축구용병사이트",
  description: "축구용병사이트입니다",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={sans.className}>
        <NavbarContainer />
        <main>{children}</main>
      </body>
    </html>
  );
}
