'use client'

import { Twitter, Instagram, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="text-xl font-semibold">
          <span className="text-blue-600 dark:text-blue-400">My</span>Blog
        </div>

        <nav className="flex space-x-6 text-sm">
          <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
          <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
          <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
        </nav>

        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <Instagram size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 dark:hover:text-gray-100">
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
