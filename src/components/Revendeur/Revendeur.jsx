import React from "react";

const Revendeur = () => {
  return (
    <div className="bg-black text-white py-20 px-64 flex">
      <div className="flex-1 pr-8">
        <h3 className="text-3xl font-bold">
          TROUVER UN REVENDEUR PRÈS DE CHEZ VOUS
        </h3>
        <p className="my-4 font-thin">
          Lorem ipsum dolor sit amet consectetur. Varius sem vitae turpis
          habitant eget.
        </p>
      </div>
      <div className="flex-1 pl-8 flex flex-col justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="Ville ou code postal"
            className="w-full bg-black px-4 py-2  border-b border-gray-300 "
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
        <button className="bg-white text-black py-2 px-4 flex items-center justify-center w-40 space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="15"
            viewBox="0 0 384 512"
            className="fill-current"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          <span className="font-semibold">Me localiser</span>
        </button>
      </div>
    </div>
  );
};

export default Revendeur;
