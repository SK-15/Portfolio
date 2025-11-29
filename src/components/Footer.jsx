import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-white/5 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Portfolio. Built with React & Tailwind.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-neon-green transition-colors hover:shadow-neon rounded-full p-1">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-neon-green transition-colors hover:shadow-neon rounded-full p-1">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-neon-green transition-colors hover:shadow-neon rounded-full p-1">
                        <Twitter size={20} />
                    </a>
                    <a href="mailto:contact@example.com" className="text-gray-400 hover:text-neon-green transition-colors hover:shadow-neon rounded-full p-1">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
