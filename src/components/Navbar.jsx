import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-3 bg-white font-sans text-sm">
            <div className="flex items-center space-x-8">
                <div className="flex items-baseline text-xl font-bold tracking-tight cursor-pointer">
                    <span className="text-black">HackerRank</span>

                    <div className="w-2.5 h-3.5 bg-[#00EA64] ml-0.5"></div>
                </div>

                <div className="hidden md:flex space-x-7 text-gray-600 font-medium pt-1">
                    <a href="#products" className="hover:text-black transition-colors">Products</a>
                    <a href="#products" className="hover:text-black transition-colors">Solutions</a>
                    <a href="#products" className="hover:text-black transition-colors">Resources</a>
                    <a href="#products" className="hover:text-black transition-colors">Pricing</a>
                    <a href="#products" className="hover:text-black transition-colors">Human Data</a>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <a href="#login" className="font-medium text-gray-600 hover:text-black transition-colors mr-2">Log In</a>

                <button className="px-4 py-2 font-medium text-black border border-gray-300 rounded hover:bg-gray-50 transition-colors">Request Demo</button>

                <button className="px-4 py-2 font-medium text-white bg-black rounded hover:bg-gray-800 transition-colors">Create a free account</button>
            </div>
        </nav>
    )
}

export default Navbar;  