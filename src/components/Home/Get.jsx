'use client';
import React from 'react';

import ph from '../../../public/image/phone1.png';
import girl from '../../../public/image/gimg.png';
import om from '../../../public/image/omsg.png';
import tm from '../../../public/image/tmsg.png';
import ttm from '../../../public/image/hmsg.png';
import lom from '../../../public/image/lomsg.png';
import ltm from '../../../public/image/ltmsg.png';
import lttm from '../../../public/image/lhmsg.png';
import black from '../../../public/image/svipesblack.png';
import white from '../../../public/image/svipeswhite.png';
import al from '../../../public/image/pinkal.svg';
import anl from '../../../public/image/pinkanl.svg';
import qr from '../../../public/image/qr.png';

function Get() {
  return (
    <div className="flex justify-center items-center h-[47rem] md:h-[50rem] lg:h-[50rem] xl:h-[50rem] w-full bg-black py-7">
      <div className="relative pb-96 overflow-hidden  w-full max-w-[97%] h-full bg-gradient-to-b from-pu to-ro rounded-bl-3xl rounded-br-3xl items-center justify-center">
        <div className='bg-gradient-to-b from-pu z-20 w-full max-w-[100%] absolute left-0 right-0 top-0'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path fill="#000" d="M0,0 C360,30 1080,45 1440,0 1440,30 L0,100 Z"></path>
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center relative">
          <h1 className="text-5xl py-14 text-center md:text-8xl lg:text-8xl font-bold text-white md:mb-8 w-96 sm:absolute sm:bottom-4 lg:relative lg:top-auto lg:mt-10 mt-[23rem]">
            Let&#39;s<br/> Svipes
          </h1>

          <div className='absolute -left-9 md:left-0 lg:-left-24 rotate-[25deg] top-24 lg:top-44 z-10'>
            <div className='h-[310px] md:h-[610px] lg:h-[700px] w-[200px] md:w-[330px] lg:w-[350px] rounded-[50px]'>
              <img src={black.src} className='' />
            </div>
          </div>

          {/* QR Code Positioned Between Images */}
          <div className='absolute top-[28rem] hidden sm:block z-20'>
            <img src={qr.src} className='w-[120px] md:w-[160px] lg:w-[205px] h-56 rounded-3xl border border-white p-2 bg-white' alt='QR Code'/>
          </div>

          <div className='absolute -right-12 md:right-0 lg:-right-20 -rotate-[25deg] top-20 lg:top-36'>
            <div className='h-[310px] md:h-[610px] lg:h-[700px] w-[200px] md:w-[330px] lg:w-[350px] rounded-[50px]'>
              <img src={white.src} className='' />
            </div>
          </div>

          <div className="text-center mt-4 pb-32 md:hidden lg:hidden flex justify-center space-x-4">
            <img 
              src={al.src} 
              alt="Apple Logo" 
              className="w-auto h-auto" 
            />
            <img 
              src={anl.src} 
              alt="Android Logo" 
              className="w-auto h-auto" 
            />
          </div>
          
          {/* Centered Inner Div */}
          {/* Other content commented out for brevity */}

        </div>
      </div>
    </div>
  );
}

export default Get;
