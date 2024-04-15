import React from "react";
import emoji from "../../../public/assets/triste.png";
import Image from "next/image";

export default function Experience() {
  const cardsData = [
    {
      name: "Ainda não tive experiência",
      image: emoji,
      description: ["Sem Experiência", "Sem Experiência", "Sem Experiência"],
    },
    {
      name: "Ainda não tive experiência",
      image: emoji, 
      description: ["Sem Experiência", "Sem Experiência", "Sem Experiência"],
    },
    {
      name: "Ainda não tive experiência",
      image: emoji, 
      description: ["Sem Experiência", "Sem Experiência", "Sem Experiência"],
    },
  ];

  return (
    <>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Experiência
      </h3>

      <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 mb-20">
        {cardsData.map((item, index) => (
          <div className="bg-slate-400 p-6 rounded-lg shadow-md" key={index}>
            <div className="flex items-center justify-center">
              {item.image && (
                <Image
                  className="rounded-full w-32 h-32 mx-auto md:mx-0 object-contain"
                  src={item.image}
                  alt={item.name}
                />
              )}
            </div>
            <h4 className="text-xl text-white font-bold mb-2 mt-4 text-center">
              {item.name}
            </h4>
            <ul className="text-xl text-white font-light text-left list-disc">
              {item.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
