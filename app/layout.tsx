import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/app-nav/Navbar";

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Online Shop",
  description: "Online Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ralewaySans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
