import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import FutureSection from './components/FutureSection';
import PlatformFeatures from './components/PlatformFeatures';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Logos />
            <FutureSection />
            <PlatformFeatures />
            <Testimonials />
            <CTA />
            <Footer />
        </>
    )
}

export default App;