'use client';
import { useEffect, useState } from 'react';
import al from '../../../public/image/androidlogo.svg';
import ap from '../../../public/image/applelogo.svg';
import boy from '../../../public/image/boy.png';
import Glowup from '../../../public/image/Glow3x.png';
import Goat from '../../../public/image/Goat.png';
import lady from '../../../public/image/lady.png';
import Slayqueen from '../../../public/image/Slayqueen.png';
import svipes from '../../../public/image/Svipes.png';
import Vibe from '../../../public/image/Vibe.png';
import tick from '../../../public/tick.png';
 
 
const floatAnimationStyle = `
  @keyframes floatlady {
    0%, 100% {
      transform: translateY(0);
     
    }
    50% {
      transform: translateY(-10px);
     
    }
  }
 
  @keyframes floatboy {
    0%, 100% {
      transform: translateY(0);
     
    }
    50% {
      transform: translateY(-10px);
     
    }
  }
 
  .float-lady {
    animation: floatlady 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  }
 
  .float-boy {
    animation: floatboy 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
    animation-delay: 2s; /* Staggered start */
  }
`;
 
export default function StickyNav() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isPopupOpen,setPopupOpen] = useState(false)
  const [email,setEmail] = useState("")
  const [error, setError] = useState('');
  const [isOk,setIsok] = useState(false)
 
  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);
 
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
 
 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError('');
      console.log("Valid email:", email);
      setEmail('')
      setIsok(true)
      setPopupOpen(false)
    } else {
      setError(true);
    }
  };
 
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
  };
 
  return (
    <>
      <style jsx>{floatAnimationStyle}</style>
      <div className="w-full bg-black" onMouseMove={handleMouseMove}>
        <div className="w-full max-w-[98%] mx-auto bg-gradient-to-b from-red to-he rounded-tl-3xl rounded-tr-3xl relative overflow-hidden ">
          <div className="relative">
            <div className="float-boy">
              <img
                src={boy.src}
                alt="Description of Image"
                className="z-10 w-36 lg:w-80 left-14 md:left-12 top-28 md:top-32 lg:top-40 rounded-[50px] border-4 md:border-8 border-amber-300 absolute -rotate-12"
              />
            </div>
            <div className="float-lady">
              <img
                src={lady.src}
                alt="Description of Image"
                className="z-0 w-36 lg:w-60 right-12 md:right-20 lg:right-36 top-32 md:top-32 lg:top-48 rounded-[50px] border-4 md:border-8 border-amber-300 absolute rotate-12"
              />
            </div>
            <img
              src={Goat.src}
              alt="goat"
              className="z-20 absolute w-20 md:w-32 left-32 md:left-36 lg:left-72 top-[90px] md:top-12"
              style={{
                transform: isLargeScreen
                  ? `translate(${position.x / 15}px, ${position.y / 15}px)`
                  : 'none',
              }}
            />
            <img
              src={Vibe.src}
              alt="vibe"
              className="absolute w-20 md:w-28 right-64 md:right-32 lg:right-72 top-[330px] md:top-12 lg:top-24"
              style={{
                transform: isLargeScreen
                  ? `translate(${position.x / 25}px, ${position.y / 25}px)`
                  : 'none',
              }}
            />
            <img
              src={Glowup.src}
              alt="glowup"
              className="absolute w-20 md:w-36 right-4 md:left-12 lg:left-20 top-[520px] md:top-[326px] lg:top-[526px]"
              style={{
                transform: isLargeScreen
                  ? `translate(${position.x / 35}px, ${position.y / 35}px)`
                  : 'none',
              }}
            />
            <img
              src={Slayqueen.src}
              alt="Slayqueen"
              className="absolute w-24 md:w-40 right-20 md:right-20 lg:right-36 top-[270px] md:top-[346px] lg:top-[506px]"
              style={{
                transform: isLargeScreen
                  ? `translate(${position.x / 35}px, ${position.y / 35}px)`
                  : 'none',
              }}
            />
          </div>
 
          <div className="flex flex-col items-center pt-10 md:pt-14">
            <img src={svipes.src} alt="svipes" className="w-20 md:w-60 lg:w-28" />
          </div>
 
          <h1 className="w-11/12 md:w-60 lg:w-6/12 text-center mx-auto text-3xl md:text-3xl lg:text-7xl text-white pt-[300px] sm:pt-72 md:pt-14">
            See what <br /> your <br /> Friends like <br />about you
          </h1>
 
          <div className="text-center mt-20 pb-16 ibm-plex-mono-regular">
            {/* <button className="bg-white text-he text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-full ibm-plex-mono-regular">
              Coming soon!
            </button> */}
            <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        className="bg-white font-bold text-lg md:text-xl lg:text-2xl px-20 py-6 md:px-36 md:py-9 rounded-full relative overflow-hidden"
      >
       
        <span
          className={`absolute text-red inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
            hovered ? "-translate-y-8 opacity-0" : "translate-y-0 opacity-100"
          }`}
          onClick={()=>setPopupOpen(true)}
        >
          Coming soon!
        </span>
 
       
        <span
          className={`absolute text-he inset-0 flex items-center justify-center transition-all duration-400 ease-in-out ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          onClick={()=>setPopupOpen(true)}
        >
          Join the Waitlist!
        </span>
      </button>
    </div>
          </div>
       
 
          {/* <div className="text-center mt-12 pb-10 md:hidden flex justify-center space-x-4">
            <img src={ap.src} alt="Apple Logo" className="w-auto h-auto" />
            <img src={al.src} alt="Android Logo" className="w-auto h-auto" />
          </div> */}
 
          <div
            style={{
              width: '100%',
              height: '50px',
              backgroundColor: '#000000',
              clipPath: 'ellipse(60% 100% at 50% 100%)',
              marginTop: '-20px',
              position: 'relative',
              zIndex: 1,
            }}
          ></div>
        </div>
      </div>
      {
        isPopupOpen &&
        <div className='bg-[#00000090] w-screen h-full fixed flex items-center justify-center top-0 left-0 bottom-0 right-0 z-50' onClick={() => setPopupOpen(false)}>
 
  <form onSubmit={(e)=>handleSubmit(e)} className='bg-white w-[30vw] h-[45vh] rounded-lg flex flex-col gap-3 items-start justify-center px-5' onClick={(e) => e.stopPropagation()}>
  <label htmlFor="email" className='text-3xl'>Svipes early access <span className='text-xl'>!</span></label>
            <input type="text" className='w-full py-3 rounded-lg px-2 outline-2 border-2 border-black ibm-plex-mono-regular' value = {email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Mail ID'/>
            {error && <p className="text-red text-md">Please enter valid email<span className='text-3xl'>...</span></p>}
            <button className='w-full text-white bg-orange-600 py-2 rounded-lg border-[1px] border-b-[3px] border-r-[3px] border-black text-stroke'>Submit</button>
  </form>
   
        </div>
    }
 
    {
      isOk &&  
      <div className='bg-[#00000090] w-screen h-full fixed flex items-center justify-center top-0 left-0 bottom-0 right-0 z-50' >
      <div className='bg-white w-[30vw] h-[45vh] rounded-lg flex flex-col items-center justify-center px-5 gap-3'>
        <img src={tick.src} alt="tick" className='h-20 w-20'/>
        <h4 className='text-black'>We will notify you when we are live!</h4>
        <button className='w-full text-black bg-white py-2 rounded-lg border-[1px] border-b-[3px] border-r-[3px] border-black text-stroke' onClick={()=>setIsok(false)}>OK</button>
    </div>
    </div>
    }
    </>
  );
}