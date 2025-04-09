import React, { useState } from 'react';
import { assets } from '../assets/assets.js';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);

  return (
    <div
      className="flex items-center  justify-between py-4 fixed z-50  mb-5 top-0 left-0 right-0 bg-gradient-to-b from-zinc-900  via-gray-300 to-zinc-400 animate-border"
      
    >
      
      <div className="flex items-center mx-10">
        <img onClick={() => navigate('/')} src={assets.logooo} alt="logo" className="w-12 h-12" />
        <span onClick={() => navigate('/')} className="ml-3 text-3xl  font-bold text-white tracking-wide text-shadow-md transform hover:scale-105 transition-all ease-in-out duration-300">
          Fit & Fix
        </span>
      </div>

      <ul className="hidden md:flex items-start gap-6 font-medium text-white">
        <NavLink
          to="/"
          className="relative group hover:scale-110 transition-all ease-in-out duration-300"
        >
          <li className="py-1  hover:text-gray-300  text-shadow-md px-4">HOME</li>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transform origin-bottom-left transition-all ease-out duration-500 shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)]"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transform origin-top-right transition-all ease-out duration-500 shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)]"></div>
        </NavLink>
        <NavLink
          to="/workers"
          className="relative group hover:scale-110 transition-all ease-in-out duration-300"
        >
          <li className="py-1 hover:text-gray-300 text-shadow-md px-4">ALL WORKERS</li>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transform origin-bottom-left transition-all ease-out duration-500 shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)]"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transform origin-top-right transition-all ease-out duration-500 shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)]"></div>
        </NavLink>
        <NavLink
          to="/about"
          className="relative group hover:scale-110  transition-all ease-in-out duration-300"
        >
          <li className="py-1 px-4 hover:text-gray-300  text-shadow-md">ABOUT</li>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transform origin-bottom-left transition-all ease-out duration-500 shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)]"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transform origin-top-right transition-all ease-out duration-500 shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)]"></div>
        </NavLink>
        <NavLink
          to="/contact"
          className="relative group hover:scale-110 transition-all ease-in-out duration-300"
        >
          <li className="py-1 px-4 hover:text-gray-300 text-shadow-md">CONTACT</li>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transform origin-bottom-left transition-all ease-out duration-500 shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)]"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transform origin-top-right transition-all ease-out duration-500 shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)]"></div>
        </NavLink>
      </ul>

      <div className="mx-10 flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded-lg flex flex-col gap-4 p-4 shadow-lg">
                <p
                  onClick={() => navigate('myprofile')}
                  className="hover:text-black cursor-pointer transition-all ease-in-out duration-300"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate('myAppointments')}
                  className="hover:text-black cursor-pointer transition-all ease-in-out duration-300"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer transition-all ease-in-out duration-300"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-primary shadow-2xl hover:bg-primary/90 hover:shadow-[0_4px_10px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.3)] text-white px-8 py-3 rounded-full font-light hidden md:block transition-all ease-in-out duration-300"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
