import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Về tôi</h3>
                        <p className="text-sm">
                            Frontend Developer với niềm đam mê tạo ra những trải nghiệm web tuyệt vời và độc đáo.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Liên kết nhanh</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm hover:underline">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm hover:underline">Giới thiệu</Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-sm hover:underline">Dự án</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sm hover:underline">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Skills Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Kỹ năng</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js'].map((skill) => (
                                <span key={skill} className="px-2 py-1 text-xs rounded-full border">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Liên hệ</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                               className="hover:scale-110 transition-transform">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                               className="hover:scale-110 transition-transform">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="mailto:your.email@example.com"
                               className="hover:scale-110 transition-transform">
                                <FaEnvelope size={20} />
                            </a>
                            <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer"
                               className="hover:scale-110 transition-transform">
                                <FaFacebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Sang Trọng. All rights reserved.
                        </p>
                        <div className="flex space-x-4 text-sm">
                            <a href="#" className="hover:underline">Điều khoản sử dụng</a>
                            <a href="#" className="hover:underline">Chính sách bảo mật</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}