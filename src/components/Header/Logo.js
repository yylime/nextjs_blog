import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profileImg from "/public/profile-img.png";

const Logo = () => {
  return (
    <Link href='/' className='flex items-center text-dark dark:text-white'>
        <div className='w-10 md:w-12 rounded-full overflow-hidden border border-solid border-dark dark:border-white  mr-2 md:mr-4'>
            <Image src={profileImg} alt='yylime' className='w-full h-auto rounded-full' priority/>
        </div>
        <span className='font-bold text-lg xs:text-base md:text-xl dark:font-semibold'>小林子的小木屋</span>
    </Link>
  )
}

export default Logo