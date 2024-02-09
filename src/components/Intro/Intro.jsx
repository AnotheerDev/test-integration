import React from "react";

const Intro = () => {
  return (
    <div className=" text-white py-8 relative" style={{ height: "50vh"}}>
      <div className="absolute inset-0 bg-[url('/public/img/ultimatefishing.jpg')] bg-cover bg-center " style={{backgroundSize: "125%", backgroundRepeat: "no-repeat" }}></div>
      <div className="absolute inset-0 flex justify-start items-center">
        {/* Texte */}
        <div className="w-3/5 relative z-10">
          <div className="text-left px-40">
            <h1 className="text-3xl font-bold">ULTIMATE FISHING</h1>
            <p className="my-6 w-80">
              Le meilleur matériel de pêche pour les passionnés de pêche aux leurres
            </p>
            <button className='text-xl py-3 px-7 bg-white text-black'>Nos produits</button>
          </div>
        </div>
      </div>
      {/* Gradiant avec opacité sur l'image de fond */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)", width: "70%" }}></div>
    </div>
  );
}

export default Intro;
