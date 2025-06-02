import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] dark:bg-gray-900/50 text-white text-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-xl">♥︎</span>
              </div>
              <span className="text-xl font-semibold">MyBlog</span>
            </div>
            <p className="text-gray-100 dark:text-gray-300 mb-6">
              We create digital experiences for brands and companies by using technology.
            </p>
            <div className="flex space-x-4 text-white">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-indigo-500" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-indigo-500" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-indigo-500" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-indigo-500" />
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li><Link href="#" className="hover:text-indigo-400">Home</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">Features</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">About</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">Testimonial</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li><Link href="#" className="hover:text-indigo-400">How it works</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">Privacy policy</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">Refund policy</Link></li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li><Link href="#" className="hover:text-indigo-400">Linelcons</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">Next.js Templates</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">TailAdmin</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">PlainAdmin</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li><Link href="#" className="hover:text-indigo-400">FAQ</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">Blogs</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">Support</Link></li>
              <li><Link href="#" className="hover:text-indigo-400">About</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 px-4 text-gray-400 dark:text-gray-300 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="#" className="hover:text-indigo-400">Privacy policy</Link>
          <Link href="#" className="hover:text-indigo-400">Legal notice</Link>
          <Link href="#" className="hover:text-indigo-400">Terms of service</Link>
        </div>
        <div className="flex items-center space-x-1">
          <span>Designed and Developed by</span>
          <span className="text-white dark:text-white">htc </span>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6">
        <button
          className="bg-[#3C5EFF] hover:bg-[#5c78ff] text-white p-3 rounded-xl shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
