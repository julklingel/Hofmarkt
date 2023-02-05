import Link from 'next/link';
import React from 'react';
import Image from '../../../../turbomarket/public/logo.svg'





export default function Navbar() {



    return (
        <div>
            <nav>
                <div className="grid grid-cols-4 place-items-center  mt-2  bg-primary text-c.green font-mono" role="navigation">

                    <div className=''>
                        <a href="/" className="p-2">
                            <img src={Image} alt="logo" className=" min-h-fit min-w-fit p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"  />
                        </a>
                    </div>

                    <div className="p-3 col-start-2 col-end-4 rounded-full  bg-secondary drop-shadow-lg">
                        
                        <a href="/supplier" className="mx-12">Farmer</a>
                        <a href="/products" className="mx-12">Market</a>
                        <a href="/about" className="mx-12">About Us</a>
                        <a href="/contact" className="mx-12">Contact Us</a>
                        
                    </div>

                    <div className="p-3 m-2">
                        <a href="/auth/login" className="p-4 mr-5 rounded-full bg-secondary drop-shadow-lg "> LogIn</a>
                        <a href="/auth/signup" className="p-4 rounded-full bg-secondary drop-shadow-lg">SignUp</a>
                    </div>

                </div>

            </nav>

        </div>

    )
}


// "rounded-full bg-secondary text-center drop-shadow-lg"