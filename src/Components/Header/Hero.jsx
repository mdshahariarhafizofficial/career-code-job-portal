import React from 'react';
import { IoIosKeypad, IoIosSearch } from 'react-icons/io';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import { motion } from "motion/react"

const Hero = () => {
    return (
        <section className="py-10 md:py-0">
            <div className="flex gap-6 flex-col justify-center md:justify-between sm:py-12 lg:py-24 lg:flex-row lg:justify-between" bis_skin_checked="1">
                <div className="max-w-full flex-1 lg:max-w-[60%] flex flex-col justify-center text-center rounded-sm lg:text-left" bis_skin_checked="1">
                    
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">The
                        <motion.span
                        animate = {{
                            color: ['#4300FF', '#0065F8', '#00CAFF', '#00FFDE', '#161D6F', '#0B2F9F'],
                            transition: { duration: 4, repeat: Infinity }
                        }}
                        className="text-primary">Easiest Way</motion.span> <br /> to Get Your New Job
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Each month, more than 3 million job seekers turn to <br />
                        website in their search for work, making over 140,000 <br />
                        applications every single day
                    </p>
                    <form className="flex p-3 bg-white shadow-2xl rounded-xl border-2 border-gray-100">
                        <label className="w-full flex items-center gap-2">
                        <IoIosKeypad size={22} color='gray'></IoIosKeypad>
                        <input type="search" className='w-full outline-none' required placeholder="Your Keyword..." />
                        </label>
                        <button className='btn btn-primary font-bold py-6'><IoIosSearch size={22}></IoIosSearch> Search</button>
                    </form>
                </div>

                <div className="flex-1 max-w-full lg:max-w-[40%] flex flex-col items-center" bis_skin_checked="1">
                    <motion.img 
                    src={banner1}
                    animate = {{
                        y: [10, 100, 10]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                    }}
                    alt="" 
                    className="object-contain md:max-w-md border-b-10 border-l-10 border-primary  rounded-t-[50px] rounded-br-[50px]" />
                    <motion.img 
                    src={banner2} 
                    animate = {{
                        x: [20, 100, 20]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity
                    }}
                    alt="" className="object-contain
                    max-w-80 md:max-w-86 border-b-10 border-l-10 border-primary  rounded-t-[50px] rounded-br-[50px]" />
                </div>

            </div>
        </section>
    );
};

export default Hero;