"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import NearFooter from "./components/NearFooter";
import { productContext } from "./context/productContext";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cart, setCart] = useState([]);
  return (
    <html lang="en">
      <body className={inter.className}>
        <productContext.Provider
          value={{ cart, setCart }}
        ></productContext.Provider>
        <Header />
        <main className="relative">
          <Modal />
          {children}
          <NearFooter />
        </main>
        <Footer />
      </body>
    </html>
  );
}
