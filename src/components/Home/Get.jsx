'use client';
import { useEffect, useState } from 'react';
import black from '../../../public/image/svipesblack.png';
import white from '../../../public/image/svipeswhite.png';
import Image from 'next/image';


const buttonTexts = ['Coming soon!', 'Join the Waitlist!'];


function Get() {
  const [hovered, setHovered] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);



  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % buttonTexts.length);
    }, 3000); 
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex justify-center items-center h-[47rem] md:h-[50rem] lg:h-[50rem] xl:h-[50rem] w-full bg-black py-7">
    

      
      <div className="relative pb-96 overflow-hidden  w-full max-w-[97%] h-full bg-gradient-to-b from-ro to-pu md:bg-gradient-to-b md:from-pu md:to-ro  rounded-bl-3xl rounded-br-3xl items-center justify-center">
        <div
            style={{
              width: '100%',
              height: '50px',
              backgroundColor: '#000000',
              clipPath: 'ellipse(60% 100% at 50% 0% )',
              marginTop: '-20px',
              position: 'relative',
              zIndex: 1,
            }}
          ></div>
     
        <div className="flex flex-col justify-center items-center relative">
          <h1 className="text-5xl py-14 text-center md:text-8xl lg:text-8xl font-bold text-white md:mb-8 w-96 sm:absolute sm:bottom-4 lg:relative lg:top-auto lg:mt-10 mt-[23rem]">
            Let&#39;s<br/> Svipes
          </h1>

          <div className='absolute -left-9 md:left-0 lg:-left-32 rotate-[25deg] lg:rotate-[20deg] top-12 lg:top-32 z-10'>
            <div className='h-[310px] md:h-[610px] lg:h-[950px] w-[200px] md:w-[330px] lg:w-[450px] rounded-[50px]'>
              <Image src={black.src} alt='black' />
            </div>
          </div>

          <div className="text-center mt-0 md:mt-20 pb-16 ibm-plex-mono-regular">
        
        <div
          className={`relative inline-block ${isLargeScreen ? 'block' : 'hidden'}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <button className="bg-white font-bold text-lg md:text-xl lg:text-2xl px-24 py-6 md:px-36 md:py-9 rounded-full relative overflow-hidden">
            <span
              className={`absolute text-ro inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                hovered ? "-translate-y-8 opacity-0" : "translate-y-0 opacity-100"
              }`}
            >
              Coming soon!
            </span>
            <span
              className={`absolute text-pu inset-0 flex items-center justify-center transition-all duration-400 ease-in-out ${
                hovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Join the Waitlist!
            </span>
          </button>
        </div>

      
        <div className={`relative inline-block ${isLargeScreen ? 'hidden' : 'block'}`}>
          <button className="bg-white text-ro font-bold text-lg px-8 py-4 rounded-full">
            {buttonTexts[textIndex]}
          </button>
        </div>
      </div>

<div className='absolute -right-12 md:right-0 lg:-right-36 -rotate-[22deg] top-12 lg:top-20'>
            <div className='h-[310px] md:h-[610px] lg:h-[950px] w-[200px] md:w-[330px] lg:w-[450px] rounded-[50px]'>
              <Image src={white.src} alt='white'/>
            </div>
          </div>

          {/* <div className="text-center mt-4 pb-32 md:hidden lg:hidden flex justify-center space-x-4">
            <Image 
              src={al.src} 
              alt="Apple Logo" 
              className="w-auto h-auto" 
            />
            <Image 
              src={anl.src} 
              alt="Android Logo" 
              className="w-auto h-auto" 
            />
          </div> */}
          
    

        </div>
      </div>
    </div>
  );
}


export default Get;
