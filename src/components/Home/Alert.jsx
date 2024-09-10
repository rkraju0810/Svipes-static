'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

export const Alert = () => {
  return (
    <div className='bg-black py-3 top-0 z-50'>
      <div className='absolute inset-0 pointer-events-none opacity-100'></div>
      <Marquee gradient={false} speed={100} loop={0} className='relative'>
        <h1 className='text-center text-white text-xs sm:text-base'>
        You re cute af.

        I’m searching for you everywhere • 

        Can t stop admiring you • 

        You re the GOAT •

        You make my day, no cap •

          We recently secured $1.6 million in funding. Read more.

        

        </h1>
      </Marquee>
    </div>
  );
}
