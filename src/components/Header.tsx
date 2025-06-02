"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md px-4 py-3 md:px-8 ${
        isScrolled ? "bg-white/70 dark:bg-gray-900/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <span className="text-indigo-600 font-bold text-xl">♥︎</span>
          </div>
          <span className="text-xl font-semibold dark:text-white">MyBlog</span>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex space-x-6 text-sm">
          {[
            { href: "#", label: "Home" },
            { href: "#", label: "About" },
            { href: "#", label: "Pricing" },
            { href: "#", label: "Contact" },
            { href: "#", label: "Blog" },
            { href: "#", label: "Pages" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-100 dark:text-white hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 dark:text-white" />
            )}
          </button>
          <Link
            href="#"
            className="text-sm text-gray-100 dark:text-white hover:text-blue-900 dark:hover:text-blue-400"
          >
            Sign In
          </Link>
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-md text-sm hover:bg-gray-300 dark:hover:bg-gray-600">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
