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
    <footer className="bg-slate-900 text-white pt-28 pb-8 px-32">
      <div className="flex justify-start border-b border-gray-700 pb-8">
        <div>
          <div>
            <img
              src={logo}
              alt="Ultimate Fishing Logo"
              className="w-60"
            />
          </div>
        </div>
        <div className="space-y-2 ml-10 mr-32">
          <h5 className="font-bold">ULTIMATE FISHING</h5>
          <p>Qui sommes-nous</p>
          <p>Le blog</p>
          <p>Trouver un revendeur</p>
        </div>
        <div className="space-y-2">
          <h5 className="font-bold">NOUS CONTACTER</h5>
          <p>Nous écrire</p>
          <p>02.97.31.27.89</p>
          <p>Route de Bangor</p>
          <p>56360 Le Palais</p>
        </div>
      </div>
      <div className="pt-8 flex items-center">
        <p className="mr-4">Nos réseaux sociaux</p>
        <div className="flex items-center gap-x-14">
          <FaFacebookF className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaYoutube className="text-2xl" />
          <FaTiktok className="text-2xl" />
          <FaLinkedinIn className="text-2xl" />
        </div>
      </div>

      <div className="flex justify-center border-t border-gray-700 pt-4 mt-8">
        <div className="flex space-x-8">
          <p>CGV</p>
          <p>Mentions légales</p>
          <p>Ultimate Fishing</p>
          <p>2024 - Made by AT14</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
