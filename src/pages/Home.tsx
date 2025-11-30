import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-black antialiased selection:bg-black selection:text-white">
            <Navbar />

            <main>
                <Hero />
                <ServicesSection />
                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
