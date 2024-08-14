import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Wild Lifee",
  description: "Wild animals slides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='body'>{children}</body>
    </html>
  );
}
