import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

const Revendeur = () => {
  return (
    <section className="bg-red-700 text-white py-10 px-4 lg:py-8 lg:px-64 lg:flex lg:items-center">
      <div className="lg:flex-1 lg:pr-8">
        <h3 className="text-3xl font-bold">Restons connectés</h3>
        <p className="py-4 lg:py-0 lg:my-4 font-thin">
          Ne ratez aucune informations sur les produits UTF en vous inscrivant à
          notre newsletter !
        </p>
      </div>
      <div className="flex-1">
        <div className="flex items-center bg-red-700 pl-4  py-2 border-b border-white text-white">
          <input
            type="text"
            placeholder="Renseigner votre adresse email"
            className="w-auto bg-transparent flex-1 "
          />
          <FaRegEnvelope className="text-xl" />
        </div>
      </div>
    </section>
  );
};

export default Revendeur;
