"use client";
import Image from "next/image";
import { FaArrowRight, FaCompass } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

export default function Hero() {
  return (
    <section className="relative w-full bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-1 py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Everything You Need to <br />
            <span className="relative">
              <span className="bg-purple-200 text-black px-2 rounded">
                Succeed on Amazon.
              </span>
              <span className="absolute -right-13 top-0.5 flex flex-col">
                <span className="bg-purple-600 text-white text-xs font-medium px-2 py-0.5 rounded-t-md rounded-r-md">
                  eSeller
                </span>
                <span className="w-1 h-8 bg-purple-600"></span>
              </span>
            </span>
          </h1>
          <p className="text-gray-500">
            Streamline Your Amazon Selling Process
          </p>

          <div className="flex gap-6">
            <div className="relative">
              <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-black text-white font-medium relative z-10">
                <FaCompass size={16} />
                Explore Services
              </button>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EB843F] to-[#9627E6] blur-md opacity-70 -z-0 translate-y-1"></div>
            </div>

            <div className="relative">
              <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-black text-white font-medium relative z-10">
                <GiNetworkBars size={16} />
                Grow Sales
              </button>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EB843F] to-[#9627E6] blur-md opacity-70 -z-0 translate-y-1"></div>
            </div>
          </div>
          <div className="flex items-center gap-6 flex-wrap pt-6">
            <Image
              src="/hero1.png"
              alt="MCF"
              width={482}
              height={49}
              priority
              style={{
                width: 481,
                height: 89,
              }}
            />
          </div>
        </div>

        <div className="relative overflow-hidden">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
