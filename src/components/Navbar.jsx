import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white font-sans text-sm relative">
            <div className="flex items-center justify-between px-8 py-3">

                <div className="flex items-center space-x-8">
                    <div className="flex items-baseline text-xl font-bold tracking-tight cursor-pointer">
                        <span className="text-black">HackerRank</span>
                        <div className="w-2.5 h-3.5 bg-[#00EA64] ml-0.5"></div>
                    </div>

                    <div className="hidden md:flex space-x-7 text-gray-600 font-medium pt-1">
                        <a href="#products" className="hover:text-black transition-colors">Products</a>
                        <a href="#solutions" className="hover:text-black transition-colors">Solutions</a>
                        <a href="#resources" className="hover:text-black transition-colors">Resources</a>
                        <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
                        <a href="#human-data" className="hover:text-black transition-colors">Human Data</a>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-2">
                    <a href="#login" className="font-medium text-gray-600 hover:text-black transition-colors mr-4">Log In</a>
                    <button className="px-4 py-2 font-medium text-black border border-gray-300 rounded hover:bg-gray-50 transition-colors">Request Demo</button>
                    <button className="px-4 py-2 font-medium text-white bg-black rounded hover:bg-gray-800 transition-colors">Create a free account</button>
                </div>

                <button 
                    className="md:hidden flex items-center justify-center p-2 text-black focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden flex flex-col px-8 py-6 bg-white space-y-6 border-t border-gray-100 absolute w-full z-50">
                    <div className="flex justify-between items-center text-base font-medium">
                        <span>Products</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <div className="flex justify-between items-center text-base font-medium">
                        <span>Solutions</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <div className="flex justify-between items-center text-base font-medium">
                        <span>Resources</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                    <div className="text-base font-medium">Pricing</div>
                    
                    <div className="pt-4 flex flex-col space-y-3 items-center">
                        <a href="#login" className="font-medium text-gray-800 mb-2">Log in</a>
                        <button className="w-full py-3 font-medium text-white bg-[#1BA94C] rounded-md transition-colors">Request Demo</button>
                        <button className="w-full py-3 font-medium text-white bg-black rounded-md hover:bg-gray-800 transition-colors">Create a Free Account</button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;