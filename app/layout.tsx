import type { Metadata } from "next";
import "./globals.css";

import { roboto } from "@/app/ui/fonts";

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
      <html lang="en">
         <body className={roboto.className}>{children}</body>
      </html>
   );
}
