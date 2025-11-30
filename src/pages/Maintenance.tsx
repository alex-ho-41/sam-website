import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Maintenance: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-white selection:text-black">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse animation-delay-200" />
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-indigo-900/20 rounded-full blur-[100px] animate-pulse animation-delay-400" />

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
                <div className="mb-8 inline-block">
                    <span className="px-3 py-1 border border-white/20 rounded-full text-xs tracking-widest uppercase text-gray-400 backdrop-blur-sm">
                        System Update
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    Under Maintenance
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-lg mx-auto font-light">
                    我們正在進行系統升級以提供更優質的服務。<br />
                    請稍後再訪，感謝您的耐心等待。
                </p>

                <Link
                    to="/"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>返回首頁</span>
                </Link>
            </div>

            {/* Footer */}
            <div className="absolute bottom-8 left-0 right-0 text-center z-10">
                <p className="text-xs text-gray-600 tracking-widest uppercase">
                    © 2024 Kong Xin Design
                </p>
            </div>
        </div>
    );
};

export default Maintenance;
