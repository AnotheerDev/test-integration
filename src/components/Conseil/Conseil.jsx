import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

const Conseil = () => {

  const articles = [
    {
      name: "PÊCHE DU SANDRE AVEC DES GROS LEURRES SOUPLES",
      img: "/img/conseil1.png",
    },
    {
      name: "CODE COULEUR MEGABASS – CHAPITRE 2 : LES SIGLES ET ACRONYMES UTILISÉS PAR MEGABASS",
      img: "/img/conseil2.png",
    }
  ];

  return (
    <div className="flex flex-col my-32">
      <h2 className="text-2xl font-bold mb-12 mx-60">
        <span className="border-b-4 border-red-500">NO</span>S CONSEILS D'EXPERTS
      </h2>

      <div className="flex  gap-4 mx-60">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            name={article.name}
            img={article.img}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-black text-white py-4 px-8 mt-10">
          Tous nos conseils
        </button>
      </div>
    </div>
  );
}

export default Conseil;