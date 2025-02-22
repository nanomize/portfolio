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
            I am a Software Engineer with two years of experience in frontend development using Angular. 
            Currently, I am enhancing my skills in React and Spring Boot. After spending a year in Australia, 
            where I embraced new challenges and gained valuable life experiences, 
            I am eager to apply my technical expertise and adventurous mindset in a full-stack developer role in Thailand.
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
