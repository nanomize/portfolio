import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Rangsiman Boonnit   </h3>
    <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Frontend web developer based in Bangkok</h1>
        <p className='max-w-2x1 mx-auto font-Ovo'>
        Software Engineer with 2 years of experience, skilled in frontend and backend development. Passionate about full-stack development, continuous learning, and embracing new challenges.
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href='#contact'
            className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>
                contact me <Image src={assets.right_arrow_white} alt='' className='w-4'/></a>
            
            <a href='/ArmResume.pdf' download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                my resume <Image src={assets.download_icon} alt='' className='w-4'/></a>
        </div>
    </div>
  )
}

export default Header
