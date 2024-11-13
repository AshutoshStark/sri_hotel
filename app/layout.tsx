'use client'
import Burger from "@/components/nav and foot/Burger";
import "./globals.css";
import Navbar from "@/components/nav and foot/Navbar";
import useWindowDimension from "@/hooks/useWindowDimension";

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  const {width} = useWindowDimension()

  return (
    <html>
      <body className="px-4 sm:px-10 md:px-[70px] lg:px-[128px] xl:px-[150px] py-4 md:py-8">
        {width! > 900 ? <Navbar/> : <Burger/>}
        {children}
      </body>
    </html>
  );
}
