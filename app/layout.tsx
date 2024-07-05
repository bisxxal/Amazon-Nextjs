import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ReduxProvider from "@/components/ReduxProvider";

const inter = Poppins({ subsets: ["latin"], weight:["400", "500","600","700","800","900"] });

export const metadata: Metadata = {
  title: "Amazon Clone",
  description: "Amazon clone by Bishal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Header/>
          {children}
        </ReduxProvider>
        
        </body>
    </html>
  );
}
