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
  title: "Chaynalma.uz - Etiquette for messengers",
  description: "Modern communication etiquette for Telegram, Instagram, and WhatsApp.",
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
