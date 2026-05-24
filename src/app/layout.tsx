import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Header } from "@/components/layout/Header";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chaynalma.uz - Raqamli muloqot va etiket qoidalari",
  description: "Telegram, Instagram va WhatsApp uchun zamonaviy raqamli muloqot qoidalari. Samarali, tushunarli va vaqtni tejovchi yozishmalar.",
  keywords: ["etiket", "telegram", "muloqot", "chaynalma", "raqamli odob", "nohello", "uzbekistan"],
  authors: [{ name: "necokie", url: "https://necokie.com" }],
  openGraph: {
    title: "Chaynalma.uz - Raqamli muloqot qoidalari",
    description: "Telegram, Instagram va WhatsApp uchun zamonaviy raqamli muloqot qoidalari.",
    url: "https://chaynalma.uz",
    siteName: "Chaynalma",
    locale: "uz_UZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}>
        <LanguageProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">
              {children}
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
