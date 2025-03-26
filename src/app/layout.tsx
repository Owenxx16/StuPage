import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Trường Đại học Công nghệ Sài Gòn - STU",
  description: "Website của Trường Đại học Công nghệ Sài Gòn - STU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${roboto.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
