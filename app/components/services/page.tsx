import Image from "next/image";
import React from "react";
import bgChartImage from "../../../public/service.png";
import Card from "./Card";
import { FaCompass, FaPlayCircle } from "react-icons/fa";
const services = [
  {
    title: "Amazon Account Management",
    description:
      "Take the guesswork out of growth. From compliance to catalog health, we manage your entire seller account with precision.",
    points: ["500+ accounts optimized", "95% client retention"],
  },
  {
    title: "Amazon Seller Consulting",
    description:
      "Whether you’re launching or scaling, our tailored consulting services help you avoid costly mistakes and unlock growth faster.",
    points: [
      "40% sales growth within 60 days",
      "300+ sellers guided to success",
    ],
  },
  {
    title: "Amazon PPC",
    description:
      "Boost growth at any stage with top ROAS. But don’t just take our word for it, explore our case studies.",
    points: ["Amazon Ads Verified Partner", "25%+ average increase in sales"],
  },
  {
    title: "Amazon 3D & AR services",
    description:
      "We help create immersive 3D models and AR experiences that let brands visualise products in the real world.",
    points: [
      "+94% increase in conversion",
      "+40% increase in customer confidence",
    ],
  },
  {
    title: "Amazon Troubleshooting",
    description:
      "Whether it’s listing errors, Buy Box loss, or account suspensions, we resolve critical Amazon problems swiftly and accurately.",
    points: [
      "Resolved 500+ listing issues",
      "Reinstated 100+ suspended accounts",
    ],
  },
  {
    title: "Amazon Creatives/Cataloging",
    description:
      "Take the guesswork out of growth. From compliance to catalog health, we manage your entire seller account with precision.",
    points: [
      "Designed 20,000+ listing images",
      "Designed more than 5000 A+ contents",
    ],
  },
];
const Service = () => {
  return (
    <div className="bg-[#f6f5f6]">
      <div className="relative w-full py- overflow-hidden text-center">
        <div className="absolute inset-0 z-0 mt-4">
          <Image
            src={bgChartImage}
            alt="Background graph"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-90 pointer-events-none select-none"
          />
        </div>

        <div className="relative z-10">
          <h2 className="text-[28px] md:text-[56px] font-bold text-black">
            Centric
          </h2>
          <div className="text-[20px] md:text-[48px] font-bold text-black">
            Seller{" "}
            <span className="relative inline-block mx-1">
              <span className="line-through decoration-pink-500 decoration-[3px]">
                Central
              </span>
            </span>
            Services
            <span className="ml-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">
              ✔
            </span>
          </div>
        </div>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <Card
                key={idx}
                title={service.title}
                description={service.description}
                points={service.points}
              />
            ))}
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center mb-8">
            <div className="relative">
              <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-black text-white font-medium relative z-10">
                <FaCompass size={16} />
                Explore Services
              </button>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EB843F] to-[#9627E6] blur-md opacity-70 -z-0 translate-y-1"></div>
            </div>

            <p className="mt-4 md:mt-0 text-gray-700 text-center md:text-left text-xl pl-5">
              Not sure what you need?{" "}
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline"
              >
                Get the free audit now!
              </a>
            </p>
          </div>

        
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-[#9627E608] rounded-2xl p-5 shadow-md hover:shadow-lg transition flex gap-5">
              <div className="mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/chart1.png"
                  alt="Revenue Graph"
                  width={600}
                  height={350}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
              <h3 className="text-xl font-bold mb-2">
                Increase in 645% sales in Revenue
              </h3>
              <p className="text-gray-600 mb-4">
                Striving to Thriving for the Mexicon Spices brand.
              </p>
              <button className="px-4 py-2 rounded-lg bg-black text-white shadow-md hover:bg-gray-900 transition">
                More Details
              </button>
              </div>
            </div>

            <div className="bg-[#9627E608] rounded-2xl p-5 shadow-md hover:shadow-lg transition flex gap-5">
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/chart2.png"
                  alt="Testimonial"
                  width={600}
                  height={350}
                  className="object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <FaPlayCircle className="w-14 h-14 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="text-left">
              <h3 className="text-xl font-bold mb-2">
                Helping this Ford Motor Re-seller
              </h3>
              <p className="text-gray-600 mb-4">To get more market share.</p>
              <button className="px-4 py-2 rounded-lg bg-black text-white shadow-md hover:bg-gray-900 transition">
                More Details
              </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;
