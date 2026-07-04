import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import FutureSection from './components/FutureSection';
import PlatformFeatures from './components/PlatformFeatures';
import Testimonials from './components/Testimonials';

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Logos />
            <FutureSection />
            <PlatformFeatures />
            <Testimonials />
        </>
    )
}

export default App;