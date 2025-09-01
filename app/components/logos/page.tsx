import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden ">
      <div className="absolute inset-0" />
     <div className="absolute inset-0 bg-linear-to-bl from-[#F6F6F7] to-[#9627E61A] z-10" />
        <Image
          src="/logobg.png"
          alt="background"
          fill
          className="object-cover -top-4 opacity-15"
          priority
        />
      <div className="relative max-w-6xl mx-auto px-6 text-center z-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Trusted by{" "}
          <span className="bg-gradient-to-r from-[#EB843F] to-[#9627E6] bg-clip-text text-transparent">
            1000
          </span>{" "}
          startups &amp; enterprises
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <Image src="/logos.png" alt="Alpont" width={1190} height={89} />
        </div>
      </div>
    </section>
  );
};

export default Logos;
