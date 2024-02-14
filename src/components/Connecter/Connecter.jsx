import React from "react";

const Revendeur = () => {
  return (
    <div className="bg-red-700 text-white py-8 px-64 flex items-center"> 
      <div className="flex-1 pr-8">
        <h3 className="text-3xl font-bold">
          Restons connectés
        </h3>
        <p className="my-4 font-thin">
          Ne ratez aucune informations sur les produits UTF en vous inscrivant à notre newsletter !
        </p>
      </div>
      <div className="flex-1 pl-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Renseigner votre adresse email"
            className="w-full bg-red-700 px-4 py-2 border-b border-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 19l-6-6M7 11a5 5 0 1 0 0-2 5 5 0 0 0 0 2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Revendeur;
