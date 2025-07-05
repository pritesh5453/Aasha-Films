import React from "react";

export default function AddJobPost() {
  const inputClass =
    " border px-4 py-3 w-full text-sm rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder:text-gray-500 mt-2";
  const sectionTitle =
    "text-[#8B3C68] font-semibold text-[15px] col-span-2 mt-6";

  return (
    <div className="w-full md:w-3/4 p-4 ml-[100px] mb-[200px]">
      <h2 className="text-shadow-md font-semibold mb-4">Add Job Post</h2>
      <form className="flex justify-center">
        <div className="flex justify-center w-full gap-30 ">
          <div className=" w-[356px] h-[45px]">
            <div className="flex items-center gap-2 mb-4 ">
              <span className="text-[40px] mt-[-1px] text-[#8B3C68]">.</span>
              <p className={sectionTitle}>Project Information</p>
            </div>

            <input
              className={inputClass}
              placeholder="Project Type (e.g movie, ad, short film etc)*"
              clas
            />
            <input className={inputClass} placeholder="Project Description*" />
            <input className={inputClass} placeholder="Language Required*" />

            <div className="flex items-center gap-2 mb-4">
              <span className="text-[40px] mt-[-1px] text-[#8B3C68]">.</span>
              <p className={sectionTitle}>Role Details</p>
            </div>

            <input
              className={inputClass}
              placeholder="Role Title (e.g. Lead Male, Dancer, Supporting Role)*"
            />
            <input
              className={inputClass}
              placeholder="Gender (Male / Female / Any)*"
            />
            <input className={inputClass} placeholder="Age Range*" />
            <input className={inputClass} placeholder="Height*" />
            <input className={inputClass} placeholder="Body Type*" />
            <input
              className={inputClass}
              placeholder="Skills Needed (e.g. dancing, singing, martial arts, hosting)*"
            />
            <input
              className={inputClass}
              placeholder="Role Description / Character Brief*"
            />
            <input className={inputClass} placeholder="Phone Number*" />
            <input className={inputClass} placeholder="Email ID*" />
          </div>
          <div className=" w-[356px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[40px] mt-[-1px] text-[#8B3C68]">.</span>
              <p className={sectionTitle}>Logistics</p>
            </div>
            <input
              className={inputClass}
              placeholder="City / Shooting Location*"
            />
            <select className={inputClass}>
              <option>Audition Type*</option>
              <option>Online</option>
              <option>Offline</option>
            </select>
            <input className={inputClass} placeholder="Audition Dates*" />
            <input className={inputClass} placeholder="Shoot Dates*" />
            <input
              className={inputClass}
              placeholder="Shoot Duration (e.g 3 days, 1 week, etc.)*"
            />
            <input className={inputClass} placeholder="Application Deadline*" />
            <input
              className={inputClass}
              placeholder="Availability Required (Full-time / Part-time / Flexible)*"
            />

            <div className="flex items-center gap-2 mb-4">
              <span className="text-[40px] mt-[-1px] text-[#8B3C68]">.</span>
              <p className={sectionTitle}>Compensation</p>
            </div>
            <input
              className={inputClass}
              placeholder="Paid / Unpaid / Profit Share / Other"
            />
            <input
              className={inputClass}
              placeholder="Additional Perks (e.g. Travel, Meals, Accommodation)"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
