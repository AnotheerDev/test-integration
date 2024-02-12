import React from 'react';

const ArticleCard = ({ name, img }) => {
  return (
    <div className="text-center w-1/2 bg-cover bg-center flex flex-col shadow-md">
      <img src={img} alt="" className="w-full object-cover h-96" style={{ borderRadius: '2rem 2rem 0 0' }} />
      <p className="text-black font-bold text-left py-2 px-10">{name}</p>
      <div className="flex items-center justify-start py-5 px-10 text-red-500">
        Lire l'article
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
      </div>
    </div>
  );
};

export default ArticleCard;