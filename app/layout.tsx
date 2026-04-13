import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { APP_CONTENT } from "@/lib/content";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: APP_CONTENT.metadata.title,
  description: APP_CONTENT.metadata.description,
  keywords: [
    "produtos naturais",
    "suplementos premium",
    "especiarias gourmet",
    "orgânico",
    APP_CONTENT.metadata.city,
    "loja natural",
    "granéis",
    "saúde natural",
  ],
  authors: [{ name: APP_CONTENT.navbar.logoText }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: APP_CONTENT.metadata.siteUrl,
    title: APP_CONTENT.metadata.title,
    description: APP_CONTENT.metadata.description,
    siteName: APP_CONTENT.navbar.logoText,
    images: [
      {
        url: APP_CONTENT.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: APP_CONTENT.hero.image.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_CONTENT.navbar.logoText,
    description: APP_CONTENT.metadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#375F39",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased bg-[var(--color-background)] text-[var(--color-text-main)]">
        {children}
      </body>
    </html>
  );
}
