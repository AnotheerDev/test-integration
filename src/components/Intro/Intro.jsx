import React from "react";

const Intro = () => {
  return (
<div className="text-white py-8 relative" style={{ height: "50vh" }}>
  <div className="absolute inset-0 bg-[url('/public/img/ultimatefishing.jpg')] bg-cover bg-center"></div>
  <div className="absolute inset-0 flex justify-start items-center">
    <div className="w-3/5 relative z-10 px-10 lg:px-40">
      <h1 className="text-3xl font-bold">ULTIMATE FISHING</h1>
      <p className="my-6 w-80">Le meilleur matériel de pêche pour les passionnés de pêche aux leurres</p>
      <button className='text-xl font-semibold py-3 px-7 bg-white text-black lg:font-normal'>Nos produits</button>
    </div>
  </div>
  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
</div>

  );
}

export default Intro;
