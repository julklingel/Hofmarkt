import React from 'react';
import Image from 'next/image'

export default function Hero() {
    return (
        <section className='grid grid-cols-3 h-5/6 px-10 place-items-stretch'>
        

                <div className="place-self-center mb-20 ml-10">
                    <h1 className="text-3xl tracking-widest mb-10 font-semibold text-center text-c.green">HOF MARKT</h1>
                    <p className=" ml-4  text-1xl text-left text-c.green">Discover the taste of fresh, organic food from local farmers at Hofmarkt. Our webshop brings you the best selection of sustainably grown produce straight from the fields to your doorstep. Experience the difference of organic, non-GMO ingredients, and support small-scale agriculture with every purchase.</p>
                </div>


                <div className=" col-span-2 place-self-center mb-20 ml-20 ">
                    <Image src="/images/beige-hero.png" alt="Hero picture of vegtables on a table" className='rounded-3xl' width={500} height={500} />
                </div>

                <div className='col-span-3 place-self-center '>
                    <button>
                        <Image src="/svgs/scroll.svg" alt="Hero picture of vegtables on a table" className='animate-bounce' width={40} height={40} />
                    </button>
                </div>

        </section>
    )

}
