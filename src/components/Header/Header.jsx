import React from 'react';
import logo from '/img/logo.png';

const Header = () => {
  return (
    <header>
      <span className='block text-center'>
        Livraison offerte à partir de 100 euros d'achat
      </span>
      <div className="flex items-center justify-between mt-4 mx-40">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-16 mr-4" />
        {/* Barre de recherche */}
        <div className="relative w-1/2">
          <input 
            type='text' 
            placeholder='Rechercher un produit, une référence'
            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500'
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19l-6-6M7 11a5 5 0 1 0 0-2 5 5 0 0 0 0 2z" />
          </svg>
        </div>
        {/* Bouton Accès détaillants */}
        <button className='ml-4 flex items-center border border-black px-4 py-2 rounded-full gap-2'>
          Accès détaillant
          <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
        </button>
        {/* Icone localisation */}
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
      </div>
      {/* Barre de navigation */}
      <div className='bg-black text-white text-center flex justify-center'>
        <ul className='flex justify-center gap-8 py-3 mr-20'>
          <li className='text-xl'> 
            <span className=" border-b-2 border-red-500">No</span>uveautés
          </li>
          <li className='text-xl'>Cannes</li>
          <li className='text-xl'>Moulinets</li>
          <li className='text-xl flex items-center'>Leurres 
            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="7.5" viewBox="0 0 320 512" className="ml-2"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
          </li>
          <li className='text-xl flex items-center'>Lignes 
            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="7.5" viewBox="0 0 320 512" className="ml-2"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
          </li>
          <li className='text-xl flex items-center'>Petit matériel 
            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="7.5" viewBox="0 0 320 512" className="ml-2"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
          </li>
          <li className='text-xl flex items-center'>Equipement 
            <svg xmlns="http://www.w3.org/2000/svg" height="12" width="7.5" viewBox="0 0 320 512" className="ml-2"><path fill="#ffffff" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
          </li>
        </ul>
        <button className='text-xl bg-red-700 px-12'>Guidez-moi</button>
      </div>
    </header>
  );
}

export default Header;
