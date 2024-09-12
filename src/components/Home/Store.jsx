'use client'; // Ensure this file is used as a client-side component
 
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import org from '../../../public/image/org.svg';
import sto from '../../../public/image/story.svg';
import baa from '../../../public/image/baby.svg';
 
// Inline CSS for the float animations
const floatAnimationStyle = `
@keyframes floatBaa {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
 
@keyframes floatSto {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
 
.float-Baa {
  animation: floatBaa 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
}
 
.float-Sto {
  animation: floatSto 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  animation-delay: 2s; /* Staggered start */
}
`;
 
export const Store = () => {
  const [isVisible, setIsVisible] = useState(false);
  const orgLogoRef = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Adjust as needed
    );
 
    if (orgLogoRef.current) {
      observer.observe(orgLogoRef.current);
    }
 
    return () => {
      if (orgLogoRef.current) {
        observer.unobserve(orgLogoRef.current);
      }
    };
  }, []);
 
  return (
    <>
      <style>
        {floatAnimationStyle}
      </style>
      <div className="relative bg-black h-[80vh] xs:h-[60vh] md:h-[60vh] lg:h-[120vh] w-full overflow-hidden flex flex-col items-center justify-center pt-10 pb-20">
        {/* Centering the org logo at the top */}
        <div
          ref={orgLogoRef}
          className={`absolute top-2 left-1/2 transform -translate-x-1/2 ${isVisible ? 'opacity-100' : 'translate-y-[-100%] opacity-0'}`}
          style={{
            transition: 'transform 1s, opacity 1s',
          }}
        >
          <Image src={org.src} alt="Org Logo" width={60} height={60} className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
        </div>
 
        {/* Text at the top */}
        <div className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl -mt-32 md:mt-24 lg:-mt-44 text-white text-center">
          <h1>
            It&#39;s Your day,<br />Every Day!
          </h1>
        </div>
 
        {/* Images below the text */}
        <div className="relative flex flex-col items-center justify-center w-full pt-16 md:pt-6 pb-20 lg:pb-24 px-4">
          <div className='absolute rotate-[15deg] -right-4 lg:right-52 mt-60 lg:mt-52'>
            <div className='h-[300px] md:h-[300px] lg:h-[550px] w-[180px] md:w-[200px] lg:w-[350px]'>
              <img
                src={baa.src}
                alt='Baby'
                className='h-full w-full float-Baa'
              />
            </div>
          </div>
          <div className='absolute -rotate-[15deg] -left-9 lg:left-56 mt-60 lg:mt-60'>
            <div className='h-[300px] md:h-[300px] lg:h-[550px] w-[180px] md:w-[200px] lg:w-[300px]'>
              <img
                src={sto.src}
                alt='Story'
                className='h-full w-full float-Sto'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Store;