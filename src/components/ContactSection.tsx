import React from 'react';
import { Mail, Phone, AtSign } from 'lucide-react';

const ContactSection: React.FC = () => {
    return (
        <section id="Contact-Section-3" className="py-24 px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                    以設計連結夢想與現實
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 mb-12">
                    人海浩瀚，緣聚於此；期望與您共鳴。
                </p>
                <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
                    無論是合作、諮詢或交流，我都期待與你展開對話。
                </p>

                <div className="space-y-4 mb-12">
                    <div className="flex items-center justify-center gap-3 text-lg">
                        <Mail className="w-5 h-5 text-gray-600" />
                        <a href="mailto:sam.hung@graphicdesign.com" className="hover:underline text-gray-800">
                            sam.hung@graphicdesign.com
                        </a>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-lg">
                        <Phone className="w-5 h-5 text-gray-600" />
                        <a href="tel:+85254673180" className="hover:underline text-gray-800">
                            +852 - 54673180
                        </a>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-lg">
                        <AtSign className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-800">@samhunggrahpic</span>
                    </div>
                </div>

                <a
                    href="mailto:sam.hung@graphicdesign.com"
                    className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
                >
                    開始對話
                </a>
            </div>
        </section>
    );
};

export default ContactSection;
