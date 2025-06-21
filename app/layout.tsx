import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Typeracing with your friends",
  description:
    "Real-time multiplayer typing race game built with modern full-stack technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
