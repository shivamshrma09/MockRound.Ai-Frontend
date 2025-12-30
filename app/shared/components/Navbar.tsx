import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
            <header className='border-b bg-black w-full h-12 border-[#191919] flex justify-between'>
              
                <div className='w-50 h-10 md:ml-60 relative'>
                  <Link href='/home' >
                    <Image
                      src="https://ik.imagekit.io/qwzhnpeqg/mockround.ai%20imges%20public/logo.png"
                      alt="Logo"
                      width={200}
                      height={40}
                      className=""
                    />
                  </Link>
                </div>
            </header>
    
  )
}

export default Navbar