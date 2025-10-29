import React from "react";

function ContactForm() {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-md border-t-4 border-[#009639]">
      <h2 className="text-lg font-bold mb-4 text-center text-[#009639]">
        Contacto
      </h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nombres"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#009639]"
        />
        <input
          type="text"
          placeholder="Apellidos"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#009639]"
        />
        <textarea
          placeholder="Mensaje"
          rows="4"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#009639]"
        ></textarea>
        <button
          type="submit"
          className="bg-[#009639] text-white py-2 rounded-md hover:bg-[#006B2D] transition font-semibold"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
