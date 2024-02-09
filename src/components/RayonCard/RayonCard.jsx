import React from 'react';

const RayonCard = ({ name, img }) => {
  return (
    <div 
      className="border border-gray-200 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out h-48 w-72 bg-cover bg-center flex items-end justify-center"
      style={{ backgroundImage: `url("${img}")`,
      borderRadius: '0 2rem 0 2rem' }}
    >
      <p className="text-white font-bold w-full text-left py-2">{name}</p>
    </div>
  );
};

export default RayonCard;
