import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Logo = () => {
  return (
    <Link href='/' className='flex items-center text-dark dark:text-light'>
        <div className='w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4'>
            <Image src="/profile-img.png" alt='yylime' className='w-full h-auto rounded-full' width={100} height={100} priority/>
        </div>
        <span className='font-bold text-xl'>Yylime's Blog</span>
    </Link>
  )
}

export default Logo