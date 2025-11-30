import { Link } from 'react-router-dom';
// ... (keep other imports)

// ... inside component
<Link
    to="/"
    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105"
>
    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
    <span>返回首頁</span>
</Link>

{/* Footer */ }
<div className="absolute bottom-8 left-0 right-0 text-center z-10">
    <p className="text-xs text-gray-600 tracking-widest uppercase">
        © 2024 Kong Xin Design
    </p>
</div>
        </div >
    );
};

export default Maintenance;
