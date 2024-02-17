import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "/img/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white px-6 lg:pt-28 lg:pb-8 lg:px-32">
      <div className="lg:flex lg:justify-start lg:pb-8">
        <div>
          <div className="flex justify-center">
            <img src={logo} alt="Ultimate Fishing Logo" className="w-60 " />
          </div>
        </div>
        <div className="py-2 space-y-2 lg:ml-10 lg:mr-32">
          <h5 className="font-bold">ULTIMATE FISHING</h5>
          <p>Qui sommes-nous</p>
          <p>Le blog</p>
          <p>Trouver un revendeur</p>
        </div>
        <div className="py-4 space-y-2">
          <h5 className="font-bold">NOUS CONTACTER</h5>
          <p>Nous écrire</p>
          <p>02.97.31.27.89</p>
          <p>Route de Bangor</p>
          <p>56360 Le Palais</p>
        </div>
      </div>
      <div className="py-2 border-b-2 border-t-2 border-white lg:py-6 flex lg:items-center">
        <p className="hidden lg:block lg:mr-4">Nos réseaux sociaux</p>
        <div className="flex items-center gap-x-10 lg:gap-x-14">
          <FaFacebookF className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaYoutube className="text-2xl" />
          <FaTiktok className="text-2xl" />
          <FaLinkedinIn className="text-2xl" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center py-8 lg:pt-4 lg:mt-8 gap-4">
        <div className="flex justify-center gap-4">
          <p>CGV</p>
          <p>Mentions légales</p>
        </div>
        <div className="flex justify-center gap-4">
          <p>Ultimate Fishing</p>
          <p>2024 - Made by AT14</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
