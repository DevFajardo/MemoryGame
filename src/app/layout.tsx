import type { Metadata } from "next";
import { Rubik_Puddles } from "next/font/google";
import "./globals.css";

const rubik = Rubik_Puddles({ weight: "400",subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Memory Game🎴",
  description: "classic memory game and find equalities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
