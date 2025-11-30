import React from 'react';
import { Megaphone, Palette, Globe, Share2, Box } from 'lucide-react';

const ServicesSection: React.FC = () => {
    const services = [
        {
            icon: <Megaphone className="w-8 h-8" />,
            title: "廣告與營銷",
            description: "為品牌注入靈魂的推力，讓每一個視覺片段都能牽動目光與情感。"
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: "品牌與識別",
            description: "形於象，成於意。讓品牌的語言、符號與氣質合而為一。"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "網頁與互動",
            description: "於數碼平面之中注入靈魂，讓互動成為品牌思維的迴響。"
        },
        {
            icon: <Share2 className="w-8 h-8" />,
            title: "社交媒體視覺",
            description: "每一格畫面都是故事的節拍，讓品牌聲音在時代的動態中延續。"
        },
        {
            icon: <Box className="w-8 h-8" />,
            title: "三維可視化",
            description: "把光影之間的想像實體化，讓抽象的概念成為可感的空間。"
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 group"
                        >
                            <div className="mb-6 text-gray-800 group-hover:text-black transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
