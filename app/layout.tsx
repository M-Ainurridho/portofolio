import type { Metadata } from "next";
import "./globals.css";

import { poppins, roboto } from "@/app/ui/fonts";

export const metadata: Metadata = {
   title: "Design Portofolio",
   description: "Muhammad Ainurrihdho, Portofolio",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="scroll-smooth">
         <body className={poppins.className}>{children}</body>
      </html>
   );
}
