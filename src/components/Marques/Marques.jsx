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
    <section className="flex flex-col my-16 lg:mx-60 lg:my-32">
      <h2 className="text-2xl font-bold mx-4 lg:mx-0 mb-12">
        <span className="border-b-4 border-red-500">NO</span>S MARQUES PHARES
      </h2>

      <div className="flex flex-wrap items-center justify-center mb-8">
        {marques.map((marque, index) => (
          <div key={index} className="p-4 w-1/2 sm:w-1/3 lg:w-1/5">
            <img src={marque.img} alt={marque.name} className="w-full h-auto" />
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-black text-white py-4 px-8 mt-10">
          Toutes nos marques
        </button>
      </div>
    </section>
  );
};


export default Marques;
