import React from 'react';
import Image from '../../../../../turbomarket/public/logo.svg'

export default function Hero() {
    return (
        <div className="grid grid-cols-2 h-5/6 gap-8 mx-4" >

            <div className=" bg-c.green">Text Part</div>
            <div className=" bg-brown-800">
            <img src={Image} alt="logo" className=" min-h-fit min-w-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"/>
            </div>


        </div>

    )

}
