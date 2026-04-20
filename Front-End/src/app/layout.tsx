import NavbarTop from "@/Components/layouts/NavberTop";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/Components/layouts/Footer";

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
        <AuthProvider>
          <NavbarTop />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
