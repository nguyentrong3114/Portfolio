export default function ButtonEffect({ text, href, className }: { text: string, href?: string, className?: string }) {
    return (
        <a href={href} className={`hover:scale-110 cursor-pointer relative inline-flex items-center justify-center px-6 py-2 font-medium border border-blue-700 rounded-lg transition-all duration-300 ease-in-out overflow-hidden group hover:text-blue-100 ${className}`}>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
            <span className="absolute inset-0 border border-blue-500 rounded-lg opacity-0 group-hover:opacity-100 animate-pulse"></span>
            <span className="relative z-10">{text}</span>
        </a>
    );
}
