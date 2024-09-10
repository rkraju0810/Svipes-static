
import Safetyhome from '@/components/Safety/Safetyhome'
import Safetynavlinks from '@/components/Safety/Safetynavlinks'
import React from 'react'

const page = () => {
  return (
    <div >
      <Safetyhome />
      <div className='w-full px-9 bg-white'>
        <div className='w-full lg:px-9 block lg:flex items-center justify-center'>
          <div className='flex flex-col lg:flex-row gap-20 w-full lg:w-[73%] pt-5 lg:pt-11 pb-20'>
            <div className='lg:w-[40%] w-full'>
              <Safetynavlinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page