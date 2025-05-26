import React from 'react';

const Hero = () => {
    return (
        <section className="">
            <div className="container flex flex-col justify-center sm:py-12 lg:py-24 lg:flex-row lg:justify-between" bis_skin_checked="1">
                <div className="max-w-full md:max-w-[60%] flex flex-col justify-center text-center rounded-sm lg:text-left" bis_skin_checked="1">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">The
                        <span className="text-primary">Easiest Way</span> <br /> to Get Your New Job
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Each month, more than 3 million job seekers turn to <br />
                        website in their search for work, making over 140,000 <br />
                        applications every single day
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start" bis_skin_checked="1">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Suspendisse</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Malesuada</a>
                    </div>
                </div>
                <div className="max-w-full md:max-w-[40%] flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" bis_skin_checked="1">
                    <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Hero;