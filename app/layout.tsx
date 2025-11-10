import type { Metadata } from "next";
import { Montserrat_Alternates, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat_alternates = Montserrat_Alternates({
  variable: "--font-montserret-alt",
  subsets: ["latin"],
  weight: '400',
});

export const montserrat = Montserrat({
  variable: "--font-montserret",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atul Verma",
  description: "This is the portfolio of Atul Verma aka 'WiredBrat'. Feel free to explore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat_alternates.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
