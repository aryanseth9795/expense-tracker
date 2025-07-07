import { Geist, Geist_Mono,Roboto_Slab } from "next/font/google";
import "./globals.css";

const geistSans = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Expense Tracker",
  description: "Track your expenses efficiently",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
       
      >
        {children}
      </body>
    </html>
  );
}
