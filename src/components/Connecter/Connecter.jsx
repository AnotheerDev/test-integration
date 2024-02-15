import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

const Revendeur = () => {
  return (
    <section className="bg-red-700 text-white py-8 px-64 flex items-center">
      <div className="flex-1 pr-8">
        <h3 className="text-3xl font-bold">Restons connectés</h3>
        <p className="my-4 font-thin">
          Ne ratez aucune informations sur les produits UTF en vous inscrivant à
          notre newsletter !
        </p>
      </div>
      <div className="flex-1 pl-8">
        <div className="relative text-white">
          <input
            type="text"
            placeholder="Renseigner votre adresse email"
            className="w-full bg-red-700 pl-4 pr-10 py-2 border-b border-white text-white"
          />
          <FaRegEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl" />
        </div>
      </div>
    </section>
  );
};

export default Revendeur;
