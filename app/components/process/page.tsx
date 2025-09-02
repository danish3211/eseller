import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Process = () => {
  return (
    <div className="bg-[#f6f5f6]">
      <p className="font-bold text-5xl font-[Cabinet Grotesk] text-center pt-5">
        Our 3-part process
      </p>
      <p className="font-medium text-[16px] text-center text-[#636363] mt-5">
        Our Amazon agency works hard to get a full understanding of your
        business. <br />
        After identifying your needs and goals, we begin our work on Amazon.
      </p>

      <section className="py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex">
              <div className="flex  gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full shadow-md font-semibold">
                  1
                </span>
                <h3 className="text-xl font-bold mt-1">Audit</h3>
              </div>
              <ul className="space-y-1 text-gray-700 font-medium text-[16px] ml-30">
                {[
                  "Setting expectations and goals",
                  "Onboarding Survey",
                  "Kick Off",
                  "Competitor Analysis",
                  "Account Audit",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-">
                    <span className="mr-3 shadow-md rounded-md p-1 ">
                      <span className="bg-gradient-to-r from-[#EB843F] to-[#9627E6] p-[1.5px] rounded-full inline-flex">
                        <span className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-white">
                          <span className="bg-gradient-to-r from-[#EB843F] to-[#9627E6] bg-clip-text text-transparent text-[12px] font-semibold">
                            ✔
                          </span>
                        </span>
                      </span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Step 2 */}
            <div className="flex">
              <div className="flex gap-3">
                <span className="w-8 h-8 flex items-center justify-center shadow-md rounded-full font-semibold">
                  2
                </span>
                <h3 className="text-xl font-bold mt-1">Optimize</h3>
              </div>
              <ul className="space-y-1 text-gray-700 ml-22">
                {[
                  "Improve listing content",
                  "Enhance keyword strategy",
                  "Align backend settings",
                  "Upgrade visuals and SEO",
                  "Refine pricing and offers",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-3 shadow-md rounded-md p-1 ">
                      <span className="bg-gradient-to-r from-[#EB843F] to-[#9627E6] p-[1.5px] rounded-full inline-flex">
                        <span className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-white">
                          <span className="bg-gradient-to-r from-[#EB843F] to-[#9627E6] bg-clip-text text-transparent text-[12px] font-semibold">
                            ✔
                          </span>
                        </span>
                      </span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex">
              <div className="flex gap-3">
                <span className="w-8 h-8 flex items-center justify-center shadow-md rounded-full font-semibold">
                  3
                </span>
                <h3 className="text-xl font-bold mt-1">Grow</h3>
              </div>
              <ul className="space-y-1 text-gray-700 ml-30">
                {[
                  "Data-driven ad campaigns",
                  "Boost organic rankings",
                  "Monitor performance",
                  "Expand into new product lines",
                  "Automate and optimize systems",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-3 shadow-md rounded-md p-1 ">
                      <span className="bg-gradient-to-r from-[#EB843F] to-[#9627E6] p-[1.5px] rounded-full inline-flex">
                        <span className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-white">
                          <span className="bg-gradient-to-r from-[#EB843F] to-[#9627E6] bg-clip-text text-transparent text-[12px] font-semibold">
                            ✔
                          </span>
                        </span>
                      </span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl p-4">
            <Image
              src="/process1.png"
              alt="Amazon Dashboard"
              width={700}
              height={400}
              className="rounded-xl"
            />
            {/* <div className="bg-[#fa95f221] rounded-full h-100 w-100 absolute "/> */}
            <p className="text-gray-600 mb-4 font-semibold text-2xl text-center mt-5">
              Trusted by
            </p>
            <div className="flex justify-center">
              <Image
                src="/processicons.png"
                alt="Trusted Logos"
                width={600}
                height={80}
              />
            </div>
          </div>
        </div>

        {/* <div className="max-w-7xl mx-auto mt-10 text-center">
          <p className="text-gray-600 mb-4 font-medium">Trusted by</p>
          <div className="flex justify-center">
            <Image
              src="/processicons.png"
              alt="Trusted Logos"
              width={600}
              height={80}
            />
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Process;
