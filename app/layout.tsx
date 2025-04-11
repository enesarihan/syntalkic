import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const bai = Bai_Jamjuree({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syntalkic.",
  description: "An AI-powered platform for talking with spesific topics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bai.className} antialiased`}>
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
