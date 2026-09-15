import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: site.metaTitle,
  description: site.metaDescription,
  metadataBase: new URL(site.siteUrl),
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: site.siteUrl,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
};

export const viewport: Viewport = {
  themeColor: "#06101f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
