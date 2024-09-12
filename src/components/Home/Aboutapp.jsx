'use client';
import React, { useEffect, useRef, useState } from 'react';
import ph from '../../../public/image/ghost.svg';
import c1 from '../../../public/image/c1.svg';
import c2 from '../../../public/image/c2.svg';
import c3 from '../../../public/image/c3.svg';
import c4 from '../../../public/image/c4.svg';

const floatAnimationStyle = `
  @keyframes floatc1 {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px) rotate(10deg);
    }
  }

  @keyframes floatc2 {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes floatc3 {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes floatc4 {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .float-c1 {
    animation: floatc1 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  }

  .float-c2 {
    animation: floatc2 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    animation-delay: 4s; /* Staggered start */
  }

  .float-c3 {
    animation: floatc3 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    animation-delay: 2s; /* Staggered start */
  }

  .float-c4 {
    animation: floatc4 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    animation-delay: 3s; /* Staggered start */
  }

  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Aboutapp = () => {
  const [isVisible, setIsVisible] = useState({}); // Track visibility of each image
  const imagesRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      imagesRef.current.forEach((image, index) => {
        if (image) {
          const rect = image.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setIsVisible(prev => ({ ...prev, [index]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=' bg-[#F34EEE]'>
      <div
          style={{
    width: '100%',
    height: '50px',
    backgroundColor: '#FF004D',
    clipPath: 'ellipse(60% 100% at 50% 100%)', // More pronounced bend
    marginTop: '-30px',
    position: 'relative',
    zIndex: '1',
  }}
></div>
    
      <style>{floatAnimationStyle}</style>
      <div className="h-[95vh] xs:h-[90vh] md:h-[80vh] lg:h-[145vh] xl:h-[125vh] w-full bg-gradient-to-b from-pin to-bl text-white overflow-hidden flex flex-col relative">
       
        




        <div className="">
          <h1 className="text-2xl lg:text-7xl font-bold mb-2 -pt-27 lg:pt-20 lg:mb-1 text-center flex flex-col md:flex-row items-center justify-center">
            Get Dank & Some Love
          </h1>

          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute top-14 right-8 sm:top-4 sm:right-5 md:top-9 md:right-32 lg:top-14 lg:right-60 transform rotate-6 w-40 sm:w-48 md:w-72">
              <img
                ref={el => imagesRef.current[0] = el}
                src={c2.src}
                alt="pink G"
                className={`w-full float-c2 fade-in ${isVisible[0] ? 'visible delay-1' : ''}`}
              />
            </div>
            <div className="absolute top-52 left-10 sm:top-40 sm:left-10 md:top-60 md:left-32 lg:top-20 lg:left-80 transform rotate-3 w-40 sm:w-44 md:w-72">
              <img
                ref={el => imagesRef.current[1] = el}
                src={c1.src}
                alt="blue"
                className={`w-full float-c1 fade-in ${isVisible[1] ? 'visible delay-2' : ''}`}
              />
            </div>
            <div className="absolute top-20 -left-2 md:top-6 md:-left-2 lg:top-[400px] lg:left-32 transform -rotate-3 w-40 sm:w-48 md:w-72">
              <img
                ref={el => imagesRef.current[2] = el}
                src={c3.src}
                alt="red G"
                className={`w-full float-c3 fade-in ${isVisible[2] ? 'visible delay-3' : ''}`}
              />
            </div>
            <div className="absolute top-52 -right-2 md:top-60 md:-right-2 lg:top-[330px] lg:right-32 transform -rotate-3 w-40 sm:w-48 md:w-72">
              <img
                ref={el => imagesRef.current[3] = el}
                src={c4.src}
                alt="blue G"
                className={`w-full float-c4 fade-in ${isVisible[3] ? 'visible delay-4' : ''}`}
              />
            </div>
          </div>

           <div className="z-50 absolute bottom-2 md:bottom-11 lg:bottom-1 flex justify-center items-end w-full">
            <img
              src={ph.src}
              alt="Mobile Mockup"
              className="rounded-lg shadow-lg w-[60%] md:w-[40%] lg:w-[25%]"
            />
          </div> 
          
        </div>

      
  
      </div>
      <div
            style={{
              width: '100%',
              height: '50px',
              backgroundColor: '#000000',
              // borderTopLeftRadius: '50% 20%',
              // borderTopRightRadius: '50% 20% ',
              // borderTop: '50px solid transparent',
              clipPath: 'ellipse(60% 100% at 50% 100%)',
              marginTop: '-20px', // Adjust to ensure the curve overlaps the next section
              position: 'relative',
              zIndex: '1', // Ensure it stays on top of the next section
            }}
          ></div>
    </div>
  );
};

export default Aboutapp;
