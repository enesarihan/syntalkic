import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const bai = Bai_Jamjuree({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syntalkic.",
  description: "An AI-powered platform for talking with specific topics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bai.className} antialiased flex flex-col min-h-screen relative`}
      >
        {" "}
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1">{children}</main>
        </ThemeProvider>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
