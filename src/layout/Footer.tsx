import { Link } from 'react-router-dom'
import type { JSX } from 'react'

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-zinc-950 border-t border-cyan-900 py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-gray-400">
                    <div>
                        <h4 className="text-white font-serif font-semibold mb-4 text-base tracking-wide">About</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="#about" className="hover:text-cyan-400 transition">About Me</Link>
                            </li>
                            <li>
                                <Link to="/resume.pdf" className="hover:text-cyan-400 transition">Resume</Link>
                            </li>
                            <li>
                                <Link to="#contact" className="hover:text-cyan-400 transition">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-serif font-semibold mb-4 text-base tracking-wide">Projects</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/housing-sale-price-predictions" className="hover:text-cyan-400 transition">Housing Model</Link>
                            </li>
                            <li>
                                <Link to="/sunin-energy-details" className="hover:text-cyan-400 transition">SUNIN Energy</Link>
                            </li>
                            <li>
                                <Link to="/portfolio-details" className="hover:text-cyan-400 transition">Portfolio Site</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-serif font-semibold mb-4 text-base tracking-wide">Social</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-serif font-semibold mb-4 text-base tracking-wide">Contact</h4>
                        <p className="text-sm">
                            Email:{' '}
                            <a href="mailto:you@example.com" className="hover:text-cyan-400 transition">
                                you@example.com
                            </a>
                        </p>
                        <p className="mt-2 text-sm">Denver, CO</p>
                    </div>
                </div>

                <div className="mt-12 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Morgan Cooper. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
