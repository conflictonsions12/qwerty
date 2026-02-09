// src/app/components/Header.jsx
"use client";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact", label: "CONTACT" },
];

export default function  Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      {/* Top contact bar */}
      <div className="flex items-center justify-between px-6 lg:px-16 py-4 bg-white">
         <Link href="/" className="flex items-center gap-3">
           <Image 
    src="/Logo.jpg"      
    alt="Company Logo"   
    width={48}          
    height={48}         
    className="rounded" 
    priority             
  /> 
          
        </Link>  

        <div className="flex items-center gap-6 text-sm">
          <div className="hidden md:flex flex-col text-right">
            <span className="font-semibold text-gray-900">
              (941) 298 9451
            </span>
            <span className="text-xs text-gray-600">
             
            </span>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2 rounded-full bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition"
          >
            GET A QUOTE
          </Link>
        </div>
      </div>

      {/* Bottom section: Brand + Nav (Desktop) */}
      <div className="hidden md:flex items-stretch bg-white">
        {/* Left side: Brand name with white background */}
        <div className="flex items-center px-6 lg:px-16 py-4 bg-white">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <span className="text-green-600">Dhorne</span>{" "}
            <span className="text-gray-900">agro consult</span>
          </h1>
        </div>

        {/* Right side: Nav links in bordered box with diagonal left edge */}
        <nav
          className="flex-1 bg-[#1a1a1a] border border-[#333333]"
          style={{
            clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <div className="px-6 lg:px-16 h-full">
            <ul className="flex items-center justify-end gap-10 h-full text-sm font-medium text-white">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`hover:text-green-400 transition ${
                        isActive ? "text-green-500" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-6 py-4 bg-white border-t border-gray-200">
        {/* Brand name for mobile */}
        <h1 className="text-lg font-extrabold tracking-tight">
          <span className="text-green-600">Dhorne</span>{" "}
          <span className="text-gray-900">agro</span>
        </h1>

        {/* Hamburger menu button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
        >
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-900 transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#1a1a1a] border-t border-[#333333]">
          <div className="px-6 py-4">
            <ul className="flex flex-col gap-4 text-sm font-medium text-white">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`hover:text-green-400 transition ${
                        isActive ? "text-green-500" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
