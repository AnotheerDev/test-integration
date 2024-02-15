import React from "react";
import mosaique1 from "/img/mosaique1.jpg";
import mosaique2 from "/img/mosaique2.png";
import mosaique3 from "/img/mosaique3.png";
import mosaique4 from "/img/mosaique4.png";
import mosaique5 from "/img/mosaique5.png";
import mosaique6 from "/img/mosaique6.jpg";
import mosaique7 from "/img/mosaique7.jpg";
import mosaique8 from "/img/mosaique8.jpg";
import mosaique9 from "/img/mosaique9.png";
import mosaique10 from "/img/mosaique10.png";
import ultimatefishing from "/img/ultimatefishing.jpg";

const Galerie = () => {
  return (
    <section className="py-32">
      <div className="mb-12 mx-60">
        <h2 className="text-2xl font-bold mb-4">
          <span className="border-b-4 border-red-500">L'U</span>NIVERS D'ULTIMATE FISHING
        </h2>
        <p>
          Partage ta pêche du jour en taguant @ultimate__fishing et/ou avec le
          hashtag #Ultimatefishing
        </p>
      </div>

      <div className="flex justify-center gap-6">
        {/* Première colonne: Une grande photo */}
        <div>
          <img
            src={mosaique1}
            alt="Grande"
            className="w-96 h-96 object-cover "
          />
        </div>

        {/* Deuxième colonne: Une moyenne photo en haut et une flex row de petites photos en dessous */}
        <div>
          <img
            src={mosaique2}
            alt="Moyenne"
            className="aspect-square object-cover w-72 h-72"
          />
          <div className="flex gap-6 mt-4">
            <img
              src={mosaique3}
              alt="Petite"
              className="w-20 h-20"
            />
            <img
              src={mosaique4}
              alt="Petite"
              className="w-20 h-20"
            />
            <img
              src={mosaique5}
              alt="Petite"
              className="w-20 h-20"
            />
          </div>
        </div>

        {/* Troisième colonne: Deux photos l'une au-dessus de l'autre */}
        <div>
          <img
            src={mosaique6}
            alt="Moyenne"
            className="w-44 h-44 mb-8"
          />
          <img
            src={mosaique7}
            alt="Moyenne"
            className="w-44 h-44"
          />
        </div>

        {/* Quatrième colonne: Une flex row de petites photos en haut et une moyenne en dessous */}
        <div>
          <div className="flex gap-6 mb-4">
            <img
              src={ultimatefishing}
              alt="Petite"
              className="w-20 h-20"
            />
            <img
              src={mosaique8}
              alt="Petite"
              className="w-20 h-20"
            />
            <img
              src={mosaique9}
              alt="Petite"
              className="w-20 h-20"
            />
          </div>
          <img
            src={mosaique10}
            alt="Moyenne"
            className="w-72 h-72"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Galerie;
