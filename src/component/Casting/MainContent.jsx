import React from "react";
import image from "../../assets/Acteress/image.png";
import image1 from "../../assets/Acteress/image (1).png";
import image2 from "../../assets/Acteress/image (2).png";
import image3 from "../../assets/Acteress/image (3).png";
import image4 from "../../assets/Acteress/image (4).png";

const profiles = [
  {
    imgUrl: image,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining  essentially unchanged.",
  },
  {
    imgUrl: image1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining  essentially unchanged.",
  },
  {
    imgUrl: image2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining  essentially unchanged.",
  },
  {
    imgUrl: image3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining  essentially unchanged.",
  },
  {
    imgUrl: image4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining  essentially unchanged.",
  },
];

export default function MainContent() {
  return (
    <>
      {profiles.map((profile, idx) => (
        <div
          key={idx}
          className="bg-[#fefaf6] border border-[#eee] p-4 flex items-start gap-4 mb-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={profile.imgUrl}
            alt={`Profile ${idx + 1}`}
            className="w-24 h-24 object-cover rounded"
          />
          <div className="flex-1">
            <p className="text-sm text-gray-700 leading-relaxed">
              {profile.description}
            </p>
            <button className="mt-2 bg-white text-[#9b2c51] border border-[#9b2c51] px-4 py-1.5 rounded-sm text-sm font-medium float-right hover:bg-[#9b2c51] hover:text-white">
              View More
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
