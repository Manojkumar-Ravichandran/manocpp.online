import "./globals.css";
import { Bricolage_Grotesque, Sora } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "Manojkumar | Full Stack Developer",
  description: "Portfolio of Manojkumar - Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
