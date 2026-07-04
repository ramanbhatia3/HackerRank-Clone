import React from 'react';

const FutureSection = () => {
    return (
        <section className="bg-[#050B14] py-24 px-6 md:px-12 mt-24 font-sans">
            <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-3xl text-[#00EA64] font-light mb-6">
                    The future is human <span className="font-mono tracking-widest font-bold">plus</span> AI.
                </p>

                <p className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl tracking-wide leading-relaxed">
                    We’ve entered a new era of software development where human and AI build together. This changes the skills you need as a developer, and the way companies engage, hire, and upskill technical talent. In short, this changes everything.
                </p>

                <p className="text-lg md:text-2xl text-gray-300 font-light max-w-3xl tracking-wide leading-relaxed mt-3">
                    We’re embracing these changes with you, and we’ve reinvented our products to meet the moment.
                </p>
            </div>
        </section>
    )
}

export default FutureSection;