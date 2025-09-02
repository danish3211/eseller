"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-8 py-4 bg-white">
 
      <div className="flex items-center space-x-2">
           <Image
          src="/image.png" 
          alt="Logo"
         width={173}       
          height={25}            
          priority
          style={{
            width: 172,  
            height: 24,
            opacity: 1,
          }}
        />
      </div>

      
      <div className="hidden md:flex space-x-8 bg-[#00000005] rounded-full border border-gray-200 px-6 py-2 shadow-sm">
        <Link href="#about" className="text-sm font-medium hover:text-purple-600">
          About Us
        </Link>
        <Link href="#services" className="text-sm font-medium hover:text-purple-600">
          Services
        </Link>
        <Link href="#case-studies" className="text-sm font-medium hover:text-purple-600">
          Case Studies
        </Link>
        <Link href="#testimonials" className="text-sm font-medium hover:text-purple-600">
          Client Testimonials
        </Link>
      </div>

      
      <Link
        href="#contact"
        className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-purple-600 text-white font-medium shadow-md hover:opacity-90 transition"
      >
        📞 Contact
      </Link>
    </div>
  );
}
