import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-bt",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://breaktimeboys.com"),
  title: {
    default: "Break Time Boys — Digital Creative Studio",
    template: "%s — Break Time Boys",
  },
  description:
    "Break Time Boys is an award-winning digital creative studio from Bonney Lake. We build design solutions tailored to your users — logos, websites and tailor-made digital experiences.",
  openGraph: {
    title: "Break Time Boys — Digital Creative Studio",
    description:
      "We build design solutions tailored to your users. Logos, websites and tailor-made digital experiences.",
    url: "https://breaktimeboys.com",
    siteName: "Break Time Boys",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
