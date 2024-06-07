import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "축구용병사이트",
  description: "축구용병사이트입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
