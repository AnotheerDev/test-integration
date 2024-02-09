import React from 'react';
import RayonCard from '../RayonCard/RayonCard';
import ProductCard from '../ProductCard/ProductCard';

const Product = () => {
  
  const rayons = [
    {
      name: 'Leurres durs',
      img: '/img/leurres1.png' 
    },
    {
      name: 'Leurres souples',
      img: '/img/leurres2.jpg' 
    },
    {
      name: 'Spinnerbaits',
      img: '/img/leurres3.png' 
    },
    {
      name: 'Têtes plombées',
      img: '/img/leurres4.png'
    }
  ];

  const products = [
    {
      name: 'ORROCHI F5 1/2-69XT',
      img: '/img/product1.png',
      price: '404.05€',
      info: 'NOUVEAU',
      cat: 'MEGABASS'
    },
    {
      name: 'FEED POPPER 150',
      img: '/img/product2.png',
      price: '37.50€',
      info: 'NOUVEAU',
      cat: 'TACKLE HOUSE'
    },
    {
      name: 'JOINTED CLAW RATCHET',
      img: '/img/product3.png',
      price: '66.15€',
      info: 'NOUVEAU COLORIS',
      cat: 'GAN CRAFT'
    },
    {
      name: 'BAG UF BLACK',
      img: '/img/product4.png',
      price: '36€',
      info: 'NOUVEAU COLORIS',
      cat: 'DUO'
    },
    {
      name: 'MADSHAD 2 130',
      img: '/img/product5.png',
      price: '5.55€',
      info: 'RETOUR EN STOCK',
      cat: 'MADNESS'
    },
    {
      name: 'ASTURIE 130',
      img: '/img/product6.png',
      price: '15.35€',
      info: 'RETOUR EN STOCK',
      cat: 'XORUS'
    },
    {
      name: 'BAG UF X-LONG',
      img: '/img/product7.png',
      price: '26.70€',
      info: 'NOUVEAU',
      cat: 'DUO'
    },
    {
      name: 'REALIS APEX TUNE',
      img: '/img/product8.png',
      price: '8.45€',
      info: 'NOUVEAU',
      cat: 'DUO'
    }
  ];

  return (
    <section className='mx-60'>
      <h2 className="text-2xl font-bold text-left my-8 "><span className=" border-b-2 border-red-500">NO</span>S TOP RAYONS</h2>
      <div className=" flex flex-wrap gap-4">
        {rayons.map((rayon, index) => (
        <RayonCard key={index} name={rayon.name} img={rayon.img} />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-left my-8 "><span className=" border-b-2 border-red-500">NO</span>UVEAUTES</h2>
      <div className="flex flex-wrap gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            img={product.img}
            info={product.info}
            price={product.price}
            cat={product.cat}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button className='bg-black text-white py-4 px-8 mt-10 mb-20'>Toutes nos nouveautés </button>
      </div>
    </section>
  );
};

export default Product;
