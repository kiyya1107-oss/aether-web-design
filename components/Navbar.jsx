"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#170d08]/90 backdrop-blur-md border-b border-orange-500/10 fixed top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Kiri: Logo / Nama Tim */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold tracking-wider text-white">
            AETHER<span className="text-orange-500">.</span>
          </span>
        </div>

        {/* Tengah: Menu Navigasi (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Specifications</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Team</a>
        </div>

        {/* Kanan: Tombol Aksi (Desktop) */}
        <div className="hidden md:block">
          <button className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-full transition-all shadow-md shadow-orange-600/10">
            Join Us
          </button>
        </div>

        {/* Tombol Hamburger Menu (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.83-4.828 4.83a1 1 0 01-1.414-1.414l4.829-4.83-4.829-4.83a1 1 0 011.414-1.414l4.828 4.83 4.829-4.83a1 1 0 011.414 1.414l-4.83 4.83 4.83 4.83z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isOpen && (
        <div className="md:hidden bg-[#170d08] border-b border-orange-500/10 px-6 py-4 flex flex-col space-y-4 text-gray-300 font-medium text-sm">
          <a href="#" className="hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#" className="hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>About</a>
          <a href="#" className="hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>Specifications</a>
          <a href="#" className="hover:text-orange-500 transition-colors" onClick={() => setIsOpen(false)}>Team</a>
          <button className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition-all">
            Join Us
          </button>
        </div>
      )}
    </nav>
  );
}
