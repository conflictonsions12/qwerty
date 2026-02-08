// src/app/layout.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { footerData } from "@/constants/footerData";

export const metadata = {
  title: {
    template: "%s | Dhorne agro consult",
    default:
      "Dhorne agro consult - Crop Inspections, Soil Testing, Irrigation Planning",
  },
  description:
    "Dhorne agro consult offers comprehensive services like crop inspections, soil testing, and irrigation planning to boost agricultural productivity and sustainability through high-quality, reliable consulting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
