import { DownloadIcon } from '@heroicons/react/outline';
import React, { Component }  from 'react';
import Image1 from "../assets/home1.svg";
import Image2 from "../assets/home2.svg";

function Hero(){
    return (
         <div className="bg-discord_blue pb-8 md:pb-0">
        <div className="p-7 py-9 h-screen  md:flex relative">
            <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center">
                <h1 className="text-5xl text-white font-bold">Your Place to Talk</h1>
                <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full">
                Whether you’re part of a school club, gaming group, worldwide art
                community, or just a handful of friends that want to spend time
                together, Discord makes it easy to talk every day and hang out more
                often.
                </h2>
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6">
                    <button className="bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_Blurple focus:outline-none transition duration-200 ease-in-out">
                    <DownloadIcon className='w-6 mr-2'/>
                    Windows</button>
                    <button className='bg-gray-900 text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg 2xl:hover: hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out'>Open Discord in Your Browser</button>
                </div>
            </div>
            <div className='flex-grow'>
                <img className="absolute -left-36 mt-16 sm:-left-44 md:hidden" src={Image2} alt=""/>
                <img  className='hidden md:inline absolute' src={Image1} alt=""/>
            </div>
        </div>
    </div>
   );
}

export default Hero;