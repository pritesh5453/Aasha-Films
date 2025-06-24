// import React from "react";
// import Cast from "../assets/castingImg.png";

// export default function CastingCard({ role = "Acting" }) {
//   return (
//     <div className="
//       w-full sm:w-[320px] md:w-[420px] lg:w-[450px] xl:w-[450px]
//       bg-white shadow-md overflow-hidden
//       border-10 border-transparent hover:border-[#8B3C68]
//       font-[Source Sans 3] transition-colors duration-200 gap-2
//     ">
//       {/* Card Image */}
//       <div className="relative">
//         <img
//   src={Cast}
//   alt="Casting"
//   className="w-full h-[180px] sm:h-[200px] md:h-[228px] object-cover border-b-8 border-transparent hover:bg-[#8B3C68]"
// />

//         {/* Role Tag */}
//         <p className="absolute bottom-[-10px] right-10 bg-[#8B3C68] text-white text-sm px-3 py-1">
//           {role}
//         </p>
//       </div>

//       {/* Card Content */}
//       <div className="px-4 pt-4 pb-6 text-[#333] text-sm leading-relaxed">
//         <p className="mb-4 line-clamp-3">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
//         </p>

//         <div className="flex items-start gap-2 text-[#555] text-sm mb-4">
//           <div className="flex md:flex-col gap-2 flex-col-1">
//             <span>📍 Mumbai</span>
//             <span>💰 Paid</span>
//             <span>📅 10 May</span>
//           </div>

//           <div className="ml-auto flex flex-col gap-2 items-end">
//             <button className="w-[110px] sm:w-[131px] h-[29px] border border-[#8B3C68] text-[#060606] text-xs px-3 py-1 hover:bg-[#8B3C68] hover:text-white transition">
//               4 Days to Expire
//             </button>
//             <button className="w-[110px] sm:w-[131px] h-[29px] border border-[#8B3C68] text-[#060606] text-xs px-3 py-1 hover:bg-[#8B3C68] hover:text-white transition">
//               Apply Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Cast from "../assets/castingImg.png";
 
export default function CastingCard({ role = "Acting" }) {
  return (
    <div
      className="font-['Source_Sans_3'] group w-full sm:w-[320px] md:w-[420px] lg:w-[450px] xl:w-[450px] 
      bg-white shadow-md overflow-hidden border-10 border-transparent hover:border-[#8B3C68] 
      transition-colors duration-200 gap-2"
    >
      {/* Card Image */}
      <div className="relative">
        <img
          src={Cast}
          alt="Casting"
          className="w-full h-[180px] sm:h-[200px] md:h-[228px] object-cover border-b-8 border-transparent group-hover:border-[#8B3C68] transition-colors duration-200"
        />

        {/* Role Tag */}
        <p className="absolute bottom-[-10px] right-10 bg-[#8B3C68] text-white text-sm px-3 py-1">
          {role}
        </p>
      </div>

      {/* Card Content */}
      <div className="px-4 pt-4 pb-6 text-[#333] group-hover:text-[#8B3C68] text-sm leading-relaxed">
        <p className="mb-4 line-clamp-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>

        <div className="flex items-start gap-2 text-[#555] text-sm mb-4">
          <div className="flex md:flex-col gap-2 flex-col-1 group-hover:text-[#8B3C68]">
            <span>📍 Mumbai</span>
            <span>💰 Paid</span>
            <span>📅 10 May</span>
          </div>

          <div className="ml-auto flex flex-col gap-2 items-end">
            <button className="w-[110px] sm:w-[131px] h-[29px] border border-[#8B3C68] text-[#060606] text-xs px-3 py-1 hover:bg-[#8B3C68] hover:text-white transition">
              4 Days to Expire
            </button>
            <button className="w-[110px] sm:w-[131px] h-[29px] border border-[#8B3C68] text-[#060606] text-xs px-3 py-1 hover:bg-[#8B3C68] hover:text-white transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

