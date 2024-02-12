import React from "react";

const Marques = () => {

  const marques = [
    {
      name: "MEGABASS",
      img: "/img/marque1.png",
    },
    {
      name: "TACKLE HOUSE",
      img: "/img/marque2.png",
    },
    {
      name: "GAN CRAFT",
      img: "/img/marque3.png",
    },
    {
      name: "DUO",
      img: "/img/marque4.png",
    },
    {
      name: "TACKLE HOUSE",
      img: "/img/marque5.png",
    },
    {
      name: "GAN CRAFT",
      img: "/img/marque6.png",
    },
    {
      name: "DUO",
      img: "/img/marque7.png",
    },,
    {
      name: "TACKLE HOUSE",
      img: "/img/marque8.png",
    },
    {
      name: "GAN CRAFT",
      img: "/img/logo.png",
    },
    {
      name: "DUO",
      img: "/img/marque9.png",
    },
  ];

  return (
    <div className="flex flex-col mx-60 my-8">
      <h2 className="text-2xl font-bold mb-12">
        <span className="border-b-4 border-red-500">NOS</span> MARQUES PHARES
      </h2>

      <div className="flex flex-wrap items-center justify-center mb-8">
        {marques.map((marque, index) => (
          <div key={index} className="p-4" style={{ width: 'calc(20% - 1rem)' }}>
            <img src={marque.img} alt={marque.name} className="w-full h-auto" />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-black text-white py-4 px-8 mt-10 mb-20">
          Toutes nos marques
        </button>
      </div>
    </div>
  );
};

export default Marques;
