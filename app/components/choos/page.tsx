import Image from "next/image";
import React from "react";
import { FaAmazon, FaForward } from "react-icons/fa";

const Choose = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 z-20">
        <div className="bg-[#F3F3F3] shadow-md rounded-xl p-4">
          <div className="bg-white shadow-md rounded-xl p-4">
            <p className="text-sm text-gray-700 mb-3 bg-[#F3F3F3] rounded-[5px] p-2">
              <span className="font-bold text-black">Snapngo Scooters</span>,
              one of our oldest clients, recently had a meeting with an Amazon
              representative, here’s what they had to say about the experience.
            </p>
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              P.S. I want to give a special commendation to your partnership
              with Vishal and the eSeller World team. Their management of your
              advertising campaigns is delivering exceptional results, and the
              quality of A+ content they’ve developed truly stands out. It’s
              refreshing to see such effective third-party management, and I
              applaud you for choosing such a capable partner. This kind of
              strategic partnership is exactly what we like to see for brand
              success on our platform.
            </p>
            <Image
              src="/amazon1.png"
              alt="testimonial"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
        <div>
          <h2 className="inline-block px-4 py-2 bg-[#EEDCFB] rounded-lg text-2xl md:text-2xl font-extrabold mb-4 text-[#3B0C65]">
            Why Choose Us?
          </h2>

          <p className="text-gray-700 mb-6">
            Because we genuinely care. <br />
            <br />
            We care about every dollar you spend on PPC, every blocked product,
            every spike in FBA fees, each &amp; every compliance issue, and
            every negative review. While Amazon prioritizes customers, as it
            should, someone needs to stand up and support the sellers too.
            That’s where we come in. Before we were an agency, we were sellers
            too. And that makes all the difference.
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-2xl">
                <FaForward className="text-[#EB843F]" />
              </span>
              Fast Turnaround &amp; Scaling
            </div>

            <div className="flex items-center gap-2 font-semibold">
              <span className=" text-2xl">
                <FaAmazon className="text-[#EB843F]" />
              </span>
              Amazon-Certified Experts
            </div>
          </div>
        </div>
      </div>
      <hr
        className="w-[1066px] mx-auto opacity-100 mt-10 mb-10"
        style={{
          border: "0.2px solid",
          borderImageSource:
            "linear-gradient(90deg, #FFFFFF 0%, #9627E6 48.56%, #FFFFFF 100%)",
          borderImageSlice: 1,
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 z-20">
        <div>
          <h2 className="inline-block px-4 py-2 bg-[#EEDCFB] rounded-lg text-2xl md:text-2xl font-extrabold mb-4 text-[#3B0C65]">
            Our Mission
          </h2>

          <p className="text-gray-700 mb-6">
            To make the lives of Amazon sellers easier and less stressful. We
            understand how frustrating it gets when Seller Support doesn't have
            answers, and you're left feeling helpless. We've been there & we
            never want you to feel that way. The ever-evolving world of Amazon
            Seller Central can be tricky to navigate. By working with us, you
            can focus on growing instead of troubleshooting.
          </p>

          <div className="relative w-[453.66px] h-[140px]">
            <div
              className="absolute top-[18.74px] left-[0.66px] 
        w-[453.66px] h-[70px] 
        rounded-[12.42px] 
        bg-[#FCF8FF]"
            />
            <div
              className="absolute top-[10.71px] left-[19.4px] 
        w-[417.53px] h-[80px] 
        rounded-[12.42px] 
        bg-[#F7ECFF]"
            />

            <div
              className="absolute left-[36.8px] 
        w-[382.73px] h-[100px] 
        rounded-[13.55px] border-2 
        border-[#F6F6F6] bg-white flex items-center justify-evenly"
            >
              <div className="text-center">
                <div className="text-[32px] font-semibold leading-none">
                  80+
                </div>
                <div className="text-[16px] mt-1">Brands</div>
              </div>
              <div className="h-[70%] w-[1px] bg-[#EAEAEA]" />
              <div className="text-center">
                <div className="text-[32px] font-semibold leading-none">
                  500+
                </div>
                <div className="text-[16px] mt-1">Sellers</div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src="/card.png"
            alt="testimonial"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Choose;
