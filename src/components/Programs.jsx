import React from "react";

const programs = [
  "ADSO",
  "Redes de Datos",
  "Animación 3D",
  "Logística",
  "Mercadeo",
  "Sistemas",
];

function Programs() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-10">
      {programs.map((prog) => (
        <div
          key={prog}
          className="bg-white shadow-md rounded-lg px-6 py-4 text-center font-semibold text-gray-700 hover:bg-[#009639] hover:text-white transition cursor-pointer border border-gray-200"
        >
          {prog}
        </div>
      ))}
    </section>
  );
}

export default Programs;
