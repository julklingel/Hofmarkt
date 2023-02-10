import Image from '../../../../../turbomarket/public/logo.svg'

export default function BackButton () {

    return (

    <div className='grid-cols-1 row-span-full place-items-start'>
        <button>
        <a href='/'></a>
        <img src={Image} alt="logo" className=" min-h-fit min-w-fit p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"  />
       
        </button>
    </div>

    )


}
