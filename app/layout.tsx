import type { Metadata } from "next";
import { Oxanium, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const oxanium = Oxanium({
  variable: "--font-sans",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-mono",
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
      <body
        className={`${oxanium.variable} ${sourceCodePro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
