import React from 'react';

const Logos = () => {
    const topLogos = [
        { name: 'Airbnb', src: '/logos/airbnb.svg' },
        { name: 'Stripe', src: '/logos/stripe.svg' },
        { name: 'LinkedIn', src: '/logos/linkedin.svg' },
        { name: 'Atlassian', src: '/logos/atlassian.svg' },
        { name: 'IBM', src: '/logos/ibm.svg' },
        { name: 'Snap Inc.', src: '/logos/snapinc.svg' },
    ]

    const bottomLogos = [
        { name: 'DoorDash', src: '/logos/doordash.svg' },
        { name: 'Adobe', src: '/logos/adobe.svg' },
        { name: 'PayPal', src: '/logos/paypal.svg' },
        { name: 'Goldman Sachs', src: '/logos/goldmansachs.svg' },
        { name: 'Canva', src: '/logos/canva.svg' },
    ]

    return (
        <section className="mt-20 md:mt-24 max-w-5xl mx-auto px-4">
            <div className="flex flex-col items-center space-y-8 md:space-y-12">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
                    {topLogos.map((logo) => (
                        <img name={logo.name} src={logo.src} alt={`${logo.name} logo`} className="h-5 object-contain hover:-translate-y-1.5 hover:scale-105 transition-transform duration-300 cursor-pointer"/>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
                    {bottomLogos.map((logo) => (
                        <img name={logo.name} src={logo.src} alt={`${logo.name} logo`} className="h-5 object-contain hover:-translate-y-1.5 hover:scale-105 transition-transform duration-300 cursor-pointer"/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Logos;