import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Smith - Backend & Blockchain Developer",
  description:
    "Backend development (JavaScript and python) and Solidity smart contracts. Building the future of decentralized applications.",
  authors: [{ name: "Joshua Smith", url: "https://joshuasmith.me" }],
  creator: "Joshua Smith",
  publisher: "Joshua Smith",
  metadataBase: new URL("https://joshuasmith.me"),
  alternates: {
    canonical: "https://joshuasmith.me",
  },
  robots: "index, follow",
  openGraph: {
    title: "Joshua Smith",
    description:
      "Backend development (JavaScript and python) and Solidity smart contracts. Building the future of decentralized applications.",
    images: ["/images/joshua.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Smith",
    description:
      "Backend development (JavaScript and python) and Solidity smart contracts. Building the future of decentralized applications.",
    images: ["/images/joshua.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
