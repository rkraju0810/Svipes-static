'use client'
import React from 'react';
import Image from 'next/image';
import org from '../../../public/image/orglogo.png';
import insta from '../../../public/image/insta.png';
import twitter from '../../../public/image/twitter.png';
import linkedin from '../../../public/image/linkedin.png';
import logo from '../../../public/image/logo1.png';

// const footerContent = {
//   title: {
//     tag: "h1",
//     content: "Slay all day"
//   },
//   paragraph: {
//     tag: "p",
//     content: "Copyright | Block Pool Technologies Private Limited © 2023"
//   },



// };

export default function Footer() {
  return (

    <div className="bg-black text-white p-6 py-8 pb-12">
      <div className="block lg:flex justify-between items-center lg:mb-36">
        <div className="flex items-center justify-center gap-2">
          <Image src={org.src} alt="Org Logo" width={80} height={80} className="w-20 h-16" />
          <h1 className="text-4xl flex flex-col justify-center">
            svipes
            <span className='text-base'>its Your day!</span>
          </h1>
        </div>
       
          <div className="lg:flex lg:flex-row lg:items-center  justify-center lg:gap-10 inline-flex flex-col-reverse gap-4 w-48 ml-5 xs:ml-8 md:ml-32 pro:ml-60 lg:ml-0 xs:w-56 md:w-96 my-10 lg:my-0">
            <a href="/safety/our-approach-to-safety" className="hover:underline text-lg md:text-3xl">
              Safety
            </a>
            <a href="#" className="hover:underline text-lg md:text-3xl ">
              Contact us
            </a>

          </div>
   

        <div className="lg:flex lg:flex-row  lg:gap-8 lg:mt-12 lg:items-center justify-center inline-flex flex-col-reverse gap-4">
            <a href="#" className="underline text-md md:text-2xl">Linkedin</a>
            <a href="#" className="underline text-md md:text-2xl">Instagram</a>
          </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-8">

        <div className="lg:hidden flex space-x-6 text-sm">
          <a href="/Statement-of-Compliance" className="hover:underline">Soc</a>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-of-use" className="hover:underline">Terms of use</a>
        </div>

        <div className="text-xs whitespace-nowrap">
          <a href="mailto:press@nglapp.com" className='w-full'>Copyright | Weboin Technologies Private Limited ©️ 2024</a>
        </div>


        <div className="hidden lg:flex text-sm gap-7 mr-60 pt-8">
          <a href="/Statement-of-Compliance" className="hover:underline">Soc</a>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-of-use" className="hover:underline">Terms of use</a>
        </div>


        <div className="text-sm mt-4 sm:mt-0">
          <span>Made in ❣️ from a Genzz</span>
        </div>
      </div>
    </div>

  );
};
