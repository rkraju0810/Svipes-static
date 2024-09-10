import React from 'react'
import Faq from '../Faq'


const Ourapproach = () => {
    return (
        <div className='max-w-4xl mx-auto px-4 py-6 select-none'>
        
        <div className='w-full h-full'>
        
           
                <div className='flex flex-col gap-5 w-full h-full '>
                    <h1 className='text-3xl'>Welcome to Svipes!</h1>
                    <p className='w-full h-full'>
                    We&#39;re all about creating a safe, fun, and inclusive space for everyone to connect and express themselves. Our community guidelines are here to help make that happen. By using Svipes, you&#39;re agreeing to play by these rules:                    </p>
                    
                    <div>
                       <Faq />
                    </div>
                   

                    <p className='w-full h-full'>
                    <span className='font-bold'>Remember,</span> these guidelines are about making Svipes a safe and awesome place for everyone. If you ever have questions or suggestions, feel free to reach out to us. We&#39;re here to listen and grow with you.                    </p>
                    
                    <h3 className='text-3xl'>Stay cool, stay kind, and have fun!</h3>
                    
                    
                </div>
            </div>
        </div>
        

    
    )
}

export default Ourapproach