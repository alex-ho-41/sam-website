import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = '', id }) => {
    return (
        <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">{title}</h2>
            {children}
        </section>
    );
};

export default Section;
