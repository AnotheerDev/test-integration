import React from 'react';
import RayonCard from '../RayonCard/RayonCard';
import ProductCard from '../ProductCard/ProductCard';
import BestCard from '../BestCard/BestCard';
import backgroundImageUrl from '../../img/background.jpg';

const Product = () => {
  const rayons = [
    {
      name: "Leurres durs",
      img: "/img/leurres1.png",
    },
    {
      name: "Leurres souples",
      img: "/img/leurres2.jpg",
    },
    {
      name: "Spinnerbaits",
      img: "/img/leurres3.png",
    },
    {
      name: "Têtes plombées",
      img: "/img/leurres4.png",
    },
  ];

  const products = [
    {
      name: "ORROCHI F5 1/2-69XT",
      img: "/img/product1.png",
      price: "404.05€",
      info: "NOUVEAU",
      cat: "MEGABASS",
    },
    {
      name: "FEED POPPER 150",
      img: "/img/product2.png",
      price: "37.50€",
      info: "NOUVEAU",
      cat: "TACKLE HOUSE",
    },
    {
      name: "JOINTED CLAW RATCHET",
      img: "/img/product3.png",
      price: "66.15€",
      info: "NOUVEAU COLORIS",
      cat: "GAN CRAFT",
    },
    {
      name: "BAG UF BLACK",
      img: "/img/product4.png",
      price: "36€",
      info: "NOUVEAU COLORIS",
      cat: "DUO",
    },
    {
      name: "MADSHAD 2 130",
      img: "/img/product5.png",
      price: "5.55€",
      info: "RETOUR EN STOCK",
      cat: "MADNESS",
    },
    {
      name: "ASTURIE 130",
      img: "/img/product6.png",
      price: "15.35€",
      info: "RETOUR EN STOCK",
      cat: "XORUS",
    },
    {
      name: "BAG UF X-LONG",
      img: "/img/product7.png",
      price: "26.70€",
      info: "NOUVEAU",
      cat: "DUO",
    },
    {
      name: "REALIS APEX TUNE",
      img: "/img/product8.png",
      price: "8.45€",
      info: "NOUVEAU",
      cat: "DUO",
    },
  ];

  const bestSellers = [
    {
      name: "I-JACK",
      img: "/img/best1.png",
      price: "6.45€",
      cat: "MEGABASS",
    },
    {
      name: "REALIS ROZANTE 63 SP",
      img: "/img/best2.png",
      price: "4.65€",
      cat: "MEGABASS",
    },
    {
      name: "WORM 217 ZERO DAN",
      img: "/img/best3.png",
      price: "4.65€",
      cat: "DECOY",
    },
    {
      name: "ONE UP SHAD 7\"",
      img: "/img/best4.png",
      price: "4.65€",
      cat: "MEGABASS",
    },
    {
      name: "MADSHAD 2 130",
      img: "/img/best5.png",
      price: "4.65€",
      cat: "MEGABASS",
    }
  ];


  return (
    <section>
      <h2 className="text-2xl font-bold text-left my-8 mx-60 ">
        <span className=" border-b-2 border-red-500">NO</span>S TOP RAYONS
      </h2>
      <div className=" flex flex-wrap gap-4 mx-60">
        {rayons.map((rayon, index) => (
          <RayonCard key={index} name={rayon.name} img={rayon.img} />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-left my-8 mx-60 ">
        <span className=" border-b-2 border-red-500">NO</span>UVEAUTES
      </h2>
      <div className="flex flex-wrap gap-4 mx-60">
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
        <button className="bg-black text-white py-4 px-8 mt-10 mb-20">
          Toutes nos nouveautés{" "}
        </button>
      </div>

      <div
        className="bg-black text-white py-6 mx-60 flex rounded-xl justify-around items-center "
        style={{ borderRadius: "0 2rem 0 2rem" }}
      >
        <div className="px-10">
          <h2 className="text-xl font-bold mb-4">
            VOUS NE SAVEZ PAS LE MATÉRIEL DONT VOUS AVEZ BESOIN ?
          </h2>
          <p className="mb-6 font-thin text-xs">
            Laissez-nous vous aider à trier vos besoins selon différents
            critères
          </p>
          <div className="flex justify-around text-sm mb-6">
            <span>Type matériel</span>
            <span>Fabricant</span>
            <span>Zone de pêche</span>
            <span>Poissons</span>
          </div>

          <div className="py-10">
            <button className="bg-white text-black py-2 px-4">
              Guidez-moi
            </button>
          </div>
        </div>

        <div className="w-1/3">
          <img
            src="/img/canne.png"
            alt="canne"
            className="flex object-cover"
            style={{ borderRadius: "0 2rem 0 2rem" }}
          />
        </div>
      </div>

      <div
        className="bg-no-repeat bg-cover bg-center  py-12 px-4"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%),
      linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%),
      url('${backgroundImageUrl}')
    `,
          paddingTop: "3rem",
          paddingBottom: "3rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div className="mx-60 my-32">
          <h2 className="text-2xl font-bold text-left mb-8">
            <span className="border-b-2 border-red-500">NO</span>S MEILLEURS
            PRODUITS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* grande best seller card */}
            <div className="md:col-span-6">
              <BestCard
                name={bestSellers[0].name}
                img={bestSellers[0].img}
                price={bestSellers[0].price}
                cat={bestSellers[0].cat}
              />
            </div>

            {/* petite best seller card */}
            <div className="md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {bestSellers.slice(1).map((bestSeller, index) => (
                <ProductCard
                  key={index}
                  name={bestSeller.name}
                  img={bestSeller.img}
                  price={bestSeller.price}
                  cat={bestSeller.cat}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
