import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-bg-card border-t border-gray-200 py-8 mt-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <p className="text-ink-muted text-sm">
                        © {new Date().getFullYear()} Saurav Kumar. Built with React &amp; Tailwind.
                    </p>
                </div>

                <div className="flex space-x-5">
                    <a href="#" className="text-ink-faint hover:text-accent transition-colors duration-200">
                        <Github size={18} />
                    </a>
                    <a href="#" className="text-ink-faint hover:text-accent transition-colors duration-200">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-ink-faint hover:text-accent transition-colors duration-200">
                        <Twitter size={18} />
                    </a>
                    <a href="mailto:contact@example.com" className="text-ink-faint hover:text-accent transition-colors duration-200">
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
