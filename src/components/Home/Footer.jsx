'use client'
import Image from 'next/image';
import org from '../../../public/image/sv.png';
import svipes from '../../../public/image/Svipes.png';

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
          <div className="flex flex-col justify-center">
            <img src={svipes.src} alt="svipes" className="w-20 md:w-28 lg:w-28" />
            <span className='text-base'>its Your day!</span>
            </div>
        </div>
       
          <div className="lg:flex lg:flex-row lg:items-center  justify-center lg:gap-10 inline-flex flex-col-reverse gap-4 w-48 ml-5 xs:ml-8 md:ml-32 pro:ml-60 lg:ml-0 xs:w-56 md:w-96 my-10 lg:my-0">
            <a href="/safety" className="hover:underline text-lg md:text-3xl">
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

        <div className="text-[10px] sm:flex md:whitespace-nowrap ibm-plex-mono-regular">
          <a href="" className='w-full'>Copyright | Weboin Technologies Private Limited ©️ 2024</a>
        </div>


        <div className="hidden lg:flex text-sm gap-7 mr-60 pt-8">
          <a href="/Statement-of-Compliance" className="hover:underline">Soc</a>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/terms-of-use" className="hover:underline">Terms of use</a>
        </div>


        <div className="text-sm mt-4 sm:mt-0 ibm-plex-mono-regular">
          <span>Made in ❣️ from a Genzz</span>
        </div>
      </div>
    </div>

  );
};
