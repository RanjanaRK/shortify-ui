import Navbar from "@/components/Header/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import ClientProvider from "./ClientProvider";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shortify",
  description: "This is Url shorten web app",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProvider>
          <Navbar />
          <main className="bg-sky-950">
            <div className="mx-auto min-h-screen w-full max-w-7xl p-6">
              {children}
            </div>
          </main>
          <Footer />
          <ToastContainer position="top-left" />
        </ClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
