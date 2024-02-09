import React from 'react';
import RayonCard from '../RayonCard/RayonCard';

const Product = () => {
  
  const rayons = [
    {
      name: 'Leurres durs',
      img: '/img/leurres1.png' // Assumes images are in the public/img/ directory
    },
    {
      name: 'Leurres souples',
      img: '/img/leurres2.jpg' // Assumes images are in the public/img/ directory
    },
    {
      name: 'Spinnerbaits',
      img: '/img/leurres3.png' // Assumes images are in the public/img/ directory
    },
    {
      name: 'Têtes plombées',
      img: '/img/leurres4.png' // Corrected path and Assumes images are in the public/img/ directory
    }
  ];

  return (
    <section className='mx-60'>
      <h2 className="text-2xl font-bold text-left my-8 "><span className=" border-b-2 border-red-500">NO</span>S TOP RAYONS</h2>
      <div className=" flex gap-4">
        {rayons.map((rayon, index) => (
        <RayonCard key={index} name={rayon.name} img={rayon.img} />
        ))}
      </div>
      <h2 className="text-2xl font-bold text-left my-8 "><span className=" border-b-2 border-red-500">NO</span>UVEAUTES</h2>


    </section>
  );
};

export default Product;
