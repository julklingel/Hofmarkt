import Link from 'next/link';
import React from 'react';
import Image from 'next/image'





export default function Navbar() {


    return (
        <div>
            <nav>
                <div className="grid grid-cols-4 place-items-center  mt-2  bg-primary text-c.green font-mono" role="navigation">

                    <div className=''>
                        <a href="/" className="p-2">
                            <Image src={'/svgs/logo.svg'} alt="logo" width={100} height={100} className=" min-h-fit min-w-fit p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"  />
                        </a>
                    </div>

                    <div className="p-3 col-start-2 col-end-4 rounded-full  bg-secondary drop-shadow-lg">
                        
                        <Link href="/supplier" className="mx-12 hover:font-semibold ">Supplier</Link>
                        <Link href="/market" className="mx-12 hover:font-semibold ">Market</Link>
                        <Link href="/about" className="mx-12 hover:font-semibold">About Us</Link>
                        <Link href="/contact" className="mx-12 hover:font-semibold ">Contact Us</Link>
                        
                    </div>

                    <div className="m-2">
                        <Link href="/auth/login" className="p-3 mr-5 rounded-full bg-secondary drop-shadow-lg hover:font-semibold"> LogIn</Link>
                        <Link href="/auth/signup" className="p-3 rounded-full bg-secondary drop-shadow-lg hover:font-semibold" >SignUp</Link>
                    </div>

                </div>

            </nav>

        </div>

    )
}


