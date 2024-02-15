import React from "react";

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
            src="public/img/mosaique1.jpg"
            alt="Grande"
            className="w-96 h-96 object-cover "
          />
        </div>

        {/* Deuxième colonne: Une moyenne photo en haut et une flex row de petites photos en dessous */}
        <div>
          <img
            src="public/img/mosaique2.png"
            alt="Moyenne"
            className="aspect-square object-cover w-72 h-72"
          />
          <div className="flex gap-6 mt-4">
            <img
              src="public/img/mosaique3.png"
              alt="Petite"
              className="w-20 h-20"
            />
            <img
              src="public/img/mosaique4.png"
              alt="Petite"
              className="w-20 h-20"
            />
            <img
              src="public/img/mosaique5.png"
              alt="Petite"
              className="w-20 h-20"
            />
          </div>
        </div>

        {/* Troisième colonne: Deux photos l'une au-dessus de l'autre */}
        <div>
          <img
            src="public/img/mosaique6.jpg"
            alt="Moyenne"
            className="w-44 h-44 mb-8"
          />
          <img
            src="public/img/mosaique7.jpg"
            alt="Moyenne"
            className="w-44 h-44"
          />
        </div>

        {/* Quatrième colonne: Une flex row de petites photos en haut et une moyenne en dessous */}
        <div>
          <div className="flex gap-6 mb-4">
            <img
              src="public/img/ultimatefishing.jpg"
              alt="Petite"
              className="w-20 h-20"
            />
            <img
              src="public/img/mosaique8.jpg"
              alt="Petite"
              className="w-20 h-20"
            />
            <img
              src="public/img/mosaique9.png"
              alt="Petite"
              className="w-20 h-20"
            />
          </div>
          <img
            src="public/img/mosaique10.png"
            alt="Moyenne"
            className="w-72 h-72"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Galerie;
