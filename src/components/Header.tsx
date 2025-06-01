'use client';

import { useState } from 'react';
import { Moon, Sun, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const [language, setLanguage] = useState<'en' | 'tr'>('en');
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'tr' : 'en'));
  };

  return (
    <header className="w-full px-4 py-3 shadow-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-between">
      {/* Sol taraf: logo ve yazı */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl">📝</span>
        <span className="font-bold text-lg">MyBlog</span>
      </div>

      {/* Orta: navbar */}
      <nav className="space-x-6 hidden md:flex">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>

      {/* Sağ: dark mode ve dil butonları */}
      <div className="flex items-center space-x-3">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-1 px-3 py-1 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Globe size={16} />
          <span>{language.toUpperCase()}</span>
        </button>
      </div>
    </header>
  );
}


