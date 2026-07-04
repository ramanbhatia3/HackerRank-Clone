import React from 'react';

const CTA = () => {
    return (
        <section className="bg-[#050B14] border-t border-gray-800 text-white font-sans">
            <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
                <div className="flex-1 p-12 md:p-20 md:border-r border-gray-800">
                    <h2 className="text-3xl font-medium mb-4">For Developers</h2>

                    <p className="text-gray-400 text-md leading-6 mb-5 max-w-md">Over 26 millions developers have joined the HackerRank Community to learn and certify their skills, practice interviewing, and discover relevant jobs.</p>

                    <button className="px-4 py-2 border border-gray-600 rounded text-sm font-medium hover:bg-gray-800 transition-colors">Join the Community</button>
                </div>

                <div className="flex-1 p-12 md:p-20">
                    <h2 className="text-3xl font-medium mb-4">For Companies</h2>

                    <p className="text-gray-400 text-md leading-6 mb-5 max-w-md">Thousands of companies have embraced the new way to hire and upskill developers across roles and throughout their careers.</p>

                    <button className="px-5 py-2 border border-gray-600 rounded text-sm font-medium hover:bg-gray-800 transition-colors">Start a Free Trial</button>
                </div>
            </div>
        </section>
    )
}

export default CTA