import NavbarTop from "@/Components/layouts/NavberTop";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-surface-container-lowest text-on-surface antialiased`}
      >
        <NavbarTop />
        {children}
      </body>
    </html>
  );
}
