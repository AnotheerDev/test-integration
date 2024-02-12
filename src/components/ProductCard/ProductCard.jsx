import React from 'react';

const ProductCard = ({ name, img, info, price , cat }) => {

  const getInfoClass = (info) => {
    if (info === 'NOUVEAU') return 'bg-red-700';
    if (info === 'NOUVEAU COLORIS') return 'bg-neutral-800';
    if (info === 'RETOUR EN STOCK') return 'bg-yellow-600';
    return 'bg-green-500';
  };

  const infoClass = getInfoClass(info);
  
  return (
    <div 
      className="border bg-white border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out h-64 w-72 relative"
      style={{ borderRadius: '0 2rem 0 2rem' }}>
      <div className=" flex flex-col justify-between p-4">
        <p className={`text-white font-bold ${infoClass} bg-opacity-75 rounded px-2 self-end`}>{info}</p>
        <img src={img} alt={name} className="object-contain h-32 mx-auto" />
        <div className="flex flex-col text-black font-bold">
          <p className="text-left font-thin">{cat}</p>
          <p className="text-left">{name}</p>
          <p className="text-left self-end">
            <span className="font-thin">dès </span>
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
