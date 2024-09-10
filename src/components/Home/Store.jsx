'use client';
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
      <div className="relative bg-black h-[42rem] sm:h-full md:h-full lg:h-[125vh] xl:h-[125vh] w-full overflow-hidden flex flex-col items-center justify-center pt-10 md:pt-36 pb-96">
        {/* Centering the org logo at the top */}
        <div
  ref={orgLogoRef}
  className={`absolute top-4 lg:top-10 xl:top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'}`}
  style={{
    transition: 'transform 1s, opacity 1s',
  }}
>
  <Image src={org.src} alt="Org Logo" width={80} height={80} className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
</div>


        {/* Text at the top */}
        <div className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl mt-[350px] md:mt-8 lg:mt-52 xl:mt-36 text-white text-center mb-8 px-4 sm:px-0">
          <h1 >
            It&#39;s Your day,<br />Every Day!
          </h1>
        </div>

        {/* Images below the text */}
        <div className="flex flex-col items-center justify-center w-full pt-40 md:pt-24 pb-60 lg:pt-24 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-0">
          <div className='absolute -right-7 lg:right-44 rotate-[15deg] top-48 lg:top-48 xl:top-44'>
            <div className='h-[350px] md:h-[610px] lg:h-[600px] xl:h-[550px] w-[200px] md:w-[330px]'>
              <img
                src={baa.src}
                alt='story'
                className='h-full w-full float-Baa'
              />
            </div>
          </div>

          <div className='absolute -left-11 lg:left-44 -rotate-[15deg] top-48 sm:top-72 md:top-72 lg:top-56'>
            <div className='h-[350px] md:h-[610px] lg:h-[600px] xl:h-[550px] w-[200px] md:w-[330px]'>
              <img
                src={sto.src}
                alt='story'
                className='h-full w-full float-Sto'
              />
            </div>
          </div>
        </div>

        {/* Wave shape at the bottom */}
      </div>
    </>
  );
};

export default Store;
