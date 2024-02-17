import React from "react";
import bgZoom from "/img/bgzoom.jpg";

const Zoom = () => {
  return (
    <section className="flex flex-col my-32">
      <h2 className="text-2xl font-bold mb-12 mx-4 lg:mx-60">
        <span className="border-b-4 border-red-500">ZO</span>OM SUR
      </h2>

      <div
        className="py-32 lg:py-52 lg:px-4 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bgZoom}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" text-white text-center">
          <p className="font-thin text-xs">MEGABASS</p>
          <p className="font-bold text-2xl pb-4 pt-2">LE LIVE X REVENGE, UN VERITABLE BIJOU</p>
          <p className="font-thin lg:w-2/6 m-auto ">
            Des vibrations importants, une sonorité tungstène, une nage
            parfaite, et une capacité à réagir immédiatement au maniement...
            c'est Live X Revenge
          </p>
        </div>

        <div className="flex justify-center">
          <button className="bg-white text-black py-4 px-8 mt-10">
            Découvrir la gamme
          </button>
        </div>
      </div>
    </section>
  );
};

export default Zoom;
