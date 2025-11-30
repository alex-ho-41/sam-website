import React from 'react';
import { Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Top Section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                        讓創意有形，讓品牌放聲
                    </h2>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
                    <div>
                        <h3 className="font-bold mb-4 text-sm">網頁地圖</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="https://samhung000.notion.site/HUNG-S-CREATIONS-275b915b17d48027a243dc1d7ee7895a" className="hover:text-white transition-colors">作品</a></li>
                            <li><a href="/maintenance" className="hover:text-white transition-colors">關於</a></li>
                            <li><a href="#Contact-Section-3" className="hover:text-white transition-colors">聯絡</a></li>
                            <li><a href="/maintenance" className="hover:text-white transition-colors">服務</a></li>
                            <li><a href="/maintenance" className="hover:text-white transition-colors">新聞</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-sm">業務範疇</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/maintenance" className="hover:text-white transition-colors">平面設計</a></li>
                            <li><a href="/maintenance" className="hover:text-white transition-colors">互動設計</a></li>
                            <li><a href="/maintenance" className="hover:text-white transition-colors">三維設計</a></li>
                            <li><a href="/maintenance" className="hover:text-white transition-colors">動態設計</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-sm">法律資訊</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/maintenance" className="hover:text-white transition-colors">私隱政策</a></li>
                            <li><a href="/maintenance" className="hover:text-white transition-colors">條款及細則</a></li>
                            <li><a href="/maintenance" className="hover:text-white transition-colors">Cookie 政策</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-sm">關於我們</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/maintenance" className="hover:text-white transition-colors">公司簡介</a></li>
                            <li><a href="/maintenance" className="hover:text-white transition-colors">公司宗旨</a></li>
                            <li><a href="/maintenance" className="hover:text-white transition-colors">團隊介紹</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-sm">支援</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/maintenance" className="hover:text-white transition-colors">常見問題</a></li>
                            <li><a href="/maintenance" className="hover:text-white transition-colors">付款方法</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-sm">社交媒體</h3>
                        <div className="flex gap-3">
                            <a href="https://www.instagram.com/samhung.sh/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.threads.com/@samhung.sh/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <MessageCircle size={20} />
                            </a>
                            <a href="https://wa.me/85254673180" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <MessageCircle size={20} />
                            </a>
                            <a href="/maintenance" className="text-gray-400 hover:text-white transition-colors">
                                <Youtube size={20} />
                            </a>
                            <a href="/maintenance" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>© 2024 孔杺設計 SAM HUNG GRAPHICS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
