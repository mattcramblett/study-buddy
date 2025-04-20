import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { Header } from "@/components/ui/header";
import { UserBadge } from "@/components/auth/user-badge";
import { HomeButton } from "@/components/brand/home-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study Buddy",
  description: "Study with flashcards!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-hidden h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header>
          <HomeButton />
          <UserBadge />
        </Header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
