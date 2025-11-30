import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative pt-40 pb-32 px-6 lg:px-8 min-h-[80vh] flex flex-col justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=2000&q=80"
                    alt="Window Shadow Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-12 text-center md:text-left">
                <div className="opacity-0 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-wide leading-tight text-black mb-8 drop-shadow-sm">
                        您好，<br className="md:hidden" />我是洪培森
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-900 font-serif italic tracking-wider font-medium">
                        很高興認識您。
                    </p>
                </div>

                <div className="opacity-0 animate-fade-in-up animation-delay-200">
                    <p className="text-lg md:text-xl lg:text-2xl text-black leading-loose max-w-3xl font-serif font-medium whitespace-pre-line tracking-wide drop-shadow-sm">
                        我是一位跨領域設計師，擁有五年以上的專業設計經驗。

                        我相信，每一個形象都蘊藏情感；
                        每一次創作，都是一次對話。

                        從平面到數碼、從社交媒體到三維空間，
                        我希望以設計描繪思想的形狀，讓感受成為可見的風景。

                        世界如此之大，您我依然相聚於此——
                        期待與您合作。
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;


