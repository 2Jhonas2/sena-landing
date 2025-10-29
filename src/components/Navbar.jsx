import React from "react";

function Navbar() {
  return (
    <nav className="w-full bg-[#009639] text-white flex justify-between px-8 py-4 rounded-lg mb-8 shadow-md">
      <div className="font-bold text-lg tracking-wide">
        Servicio Nacional de Aprendizaje
      </div>
      <div className="flex gap-6">
        <a href="#" className="hover:underline">Inicio</a>
        <a href="#" className="hover:underline">Programas</a>
        <a href="#" className="hover:underline">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
