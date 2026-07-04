import React, { useState, useEffect } from 'react';

const testimonialsData = [
    {
        id: 1,
        logo: '/colored-logos/akamai.avif',
        quote: "The proctoring features of HackerRank have a profound impact on the candidate experience. It reassures them that their skills and potential are what truly matter to us.",
        author: "K. Thomas",
        role: "Head of Talent Acquisition"
    },
    {
        id: 2,
        logo: '/colored-logos/atlassian.avif',
        quote: "HackerRank helped us go beyond traditional universities. We've scaled up our college hiring from zero to 200.",
        author: "A. Viswanathan",
        role: "Head of Engineering"
    },
    {
        id: 3,
        logo: '/colored-logos/vanguard.avif',
        quote: "We have seen a significant reduction in the number of interviews needed in order to hire the same number of high-quality candidates.",
        author: "N. Alexandro",
        role: "IT Director"
    },
    {
        id: 4,
        logo: '/colored-logos/ukg.avif',
        quote: "The platform effectively replicates a real-world office environment, providing candidates with a glimpse of what they would encounter on the job.",
        author: "M. Teolis",
        role: "Talent Acquisition Manager"
    },
    {
        id: 5,
        logo: '/colored-logos/doordash.avif',
        quote: "We cut down hiring time by months, which was huge for us. We owe that to HackerRank.",
        author: "M. Patino",
        role: "University Recruiting"
    }
];

const extendedData = [
    testimonialsData[testimonialsData.length - 1],
    ...testimonialsData,
    testimonialsData[0]
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionDuration, setTransitionDuration] = useState(500);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTransitionDuration(500);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTransitionDuration(500);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        
        if (currentIndex === 0) {
            setTransitionDuration(0);
            setCurrentIndex(testimonialsData.length);
        } 
        else if (currentIndex === testimonialsData.length + 1) {
            setTransitionDuration(0); 
            setCurrentIndex(1);
        }
    };

    return (
        <section className="bg-[#050B14] py-15 px-6 md:px-12 font-sans text-white">
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-4xl mb-16 max-w-2xl leading-tight">
                    Loved by companies of all sizes and developers from all backgrounds
                </h2>

                <div className="relative w-full max-w-2xl flex items-center justify-center">
                    
                    <button onClick={prevSlide} className="absolute left-0 p-2 hover:opacity-70 transition-opacity z-10">
                        <svg width="24" height="25" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 2L4 20L22 38" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <div className="overflow-hidden w-full">
                        <div 
                            className={`flex w-full transition-transform ease-in-out ${transitionDuration === 0 ? 'duration-0' : 'duration-500'}`}
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {extendedData.map((testimonial, index) => (
                                <div key={index} className="min-w-full flex flex-col items-center justify-center px-12">
                                    {testimonial.logo && (
                                        <img src={testimonial.logo} alt={`${testimonial.author || 'Company'} logo`} className="h-12 object-contain mb-4" />
                                    )}

                                    <p className="text-base font-light leading-relaxed mb-4 max-w-2xl">
                                        {testimonial.quote}
                                    </p>

                                    {testimonial.author && (
                                        <div className="text-base">
                                            <span className="font-bold">{testimonial.author}</span>{' '}
                                            <span className="text-gray-400 font-light">{testimonial.role}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={nextSlide} className="absolute right-0 p-2 hover:opacity-70 transition-opacity z-10">
                        <svg width="24" height="25" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L20 20L2 38" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;