"use client";

import React from 'react';

import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import Image from 'next/image';
import MagicButton from './MagicButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='w-full pt-20 pb-10' id='contact'>
      {/* <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img src="/footer-grid.svg" alt="Decorative grid background" className='w-full h-full opacity-50' />
      </div> */}
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[85vh]'>
          Ready to take your <span className='text-purple'>digital</span> presence to the next level
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>
        <a href="mailto:beingshresth4@gmail.com">
          <MagicButton
            title='Let’s get in touch'
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>
      <div className='flex mt-15 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light  '> Copyright © {currentYear} Shresth </p>
        <div className='flex items-center md:gap-3 gap-6 '>
           {socialMedia.map((profile) => ( <a href={profile.l} key={profile.id}><div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center  backdrop-blur-lg backdrop-filter saturate-180 bg-opacity-75 bg-black-200'> <Image src={profile.img} alt="" width={20} height={20}  /> </div> </a>))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
