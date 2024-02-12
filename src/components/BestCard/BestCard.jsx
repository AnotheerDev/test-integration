import React from 'react';

const BestCard = ({ name, img, price , cat }) => {

  
  return (
    <div 
      className="border bg-white border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out h-128 w-144 relative"
      style={{ borderRadius: '0 2rem 0 2rem' }}>
      <div className=" flex flex-col justify-between p-4">
        <img src={img} alt={name} className="object-contain py-28" />
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

export default BestCard;
