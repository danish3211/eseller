import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  points: string[];
}

const Card: React.FC<ServiceCardProps> = ({ title, description, points }) => {
  return (
    <div className="bg-[#f6f3f1] rounded-[12px] p-5 shadow-sm border border-[#EFEAEF]">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="bg-white rounded-[12px] p-3 mt-5">
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <ul className="space-y-2">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-800">
              <span className="mr-3">
              <span className="bg-gradient-to-r from-[#EB843F] to-[#9627E6] p-[1.5px] rounded-full inline-flex">
                <span className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-white">
                  <span className="bg-gradient-to-r from-[#EB843F] to-[#9627E6] bg-clip-text text-transparent text-[12px] font-semibold">
                    ✔
                  </span>
                </span>
              </span>
            </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
