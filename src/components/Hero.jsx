import React from 'react';

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center mt-20 md:mt-15 px-4 font-sans">
            <h1 className="text-5xl md:text-6xl leading-tighter font-medium tracking-tight text-gray-900 max-w-4xl">
                <span className="text-[#00EA64]">Become</span> the next <br className="hidden md:block" /> generation developer
            </h1>

            <p className="mt-6 text-lg md:text-lg text-gray-500 max-w-2xl font-normal leading-relaxed">
                We help thousands of companies hire and upskill the next <br className="hidden md:block" /> generation of developers, and millions of developers to become one.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="w-full sm:w-auto px-6 py-2.5 font-medium text-white bg-black rounded hover:bg-gray-800 transition-colors">Start a free trial</button>

                <button className="w-full sm:w-auto px-6 py-2.5 font-medium text-black bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">For developers</button>
            </div>
        </section>
    )
}

export default Hero;  