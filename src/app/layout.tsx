import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-fira-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MDAP",
  description: "MDAP Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaSans.className}>
      <body className={`${firaSans.variable} font-sans antialiased`}>
        <div className="fixed inset-0 bg-gradient-to-br from-green-100 via-white to-rose-100 animate-gradient-background"></div>
        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="container mx-auto max-w-3xl px-4 py-6 md:py-12 flex-1 flex flex-col">
            <nav className="pb-10 md:pb-12">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between pt-8 md:pt-0">
                <div className="flex items-center justify-center">
                  <Link href="/">
                    <Image
                      src="/MDAP_logo.svg"
                      alt="MDAP Logo"
                      width={200}
                      height={38}
                      className="w-[200px] md:w-[260px]"
                      priority
                    />
                  </Link>
                </div>
                <div className="flex justify-center md:justify-end mt-4 md:mt-0">
                  <a 
                    href="/presentations" 
                    className="text-black underline underline-offset-4 text-base md:text-lg font-medium hover:text-green-600 transition-colors"
                  >
                    PRESENTATIONS
                  </a>
                </div>
              </div>
            </nav>
            <main className="flex-1 flex items-center">
              <div className="w-full">
                {children}
              </div>
            </main>
            <footer className="mt-16 flex justify-end space-x-4">
              <a
                href="http://instagram.com/__mdap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-green-600 transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/mariomdap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-green-600 transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:info@mdap.io"
                className="text-black hover:text-green-600 transition-colors"
              >
                <MdEmail className="h-7 w-7 -mt-0.5" />
              </a>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
