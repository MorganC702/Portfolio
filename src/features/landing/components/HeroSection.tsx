import { type JSX } from 'react'
import {Link} from "react-router-dom";

export default function HeroSection(): JSX.Element {
    return (
        <section
            onMouseMove={(e) => {
                const bg = document.getElementById('parallax-bg');
                if (bg) {
                    const { clientX, clientY } = e;
                    const x = (clientX - window.innerWidth / 2) * 0.01;
                    const y = (clientY - window.innerHeight / 2) * 0.01;
                    bg.style.transform = `translate(${x}px, ${y}px)`;
                }
            }}
            className="relative flex items-center justify-center px-6 py-32"
        >

            {/* Content */}
            <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
                {/* Text Block */}
                <div className="space-y-6 text-center md:text-left">
                    {/* Name */}
                    <p className="text-3xl text-white font-serif font-bold relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r from-cyan-400 to-blue-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                        Morgan Cooper
                    </p>

                    {/* Title */}
                    <p className="text-xl font-medium text-slate-300 font-mono">
                        Data Scientist & Software Engineer
                    </p>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-md mx-auto md:mx-0">
                        <span className="text-cyan-400">I</span> Build{' '}
                        <span className="text-blue-400">Systems</span>{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            That Solve Real Problems
                        </span>
                    </h1>

                    {/* Summary */}
                    <p className="text-lg text-slate-300 max-w-md mx-auto md:mx-0">
                        From machine learning pipelines to scalable applications — I engineer data-driven solutions that deliver impact.
                    </p>

                    {/* CTA */}
                    <Link to="/contact">
                        <button className="mt-6 relative px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-xl shadow-xl overflow-hidden group transition-all duration-300 hover:scale-1.02">
                            <span className="relative z-10 text-white group-hover:text-cyan-500 transition duration-300">
                              Connect With Me
                            </span>

                            {/* Pulsing background */}
                            <div className="absolute inset-0 rounded-xl blur-lg opacity-40 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse z-0" />

                            {/*/!* White wave-like hover overlay *!/*/}
                            <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-100 transition duration-500 z-0" />
                        </button>
                    </Link>

                </div>

                {/* Image */}
                <Link to="/about" className="hidden md:flex justify-center group perspective-[1000px]">
                    <div className="relative w-full h-[500px] overflow-hidden rounded-3xl border-2 border-slate-200 shadow-2xl cursor-pointer">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 blur-3xl opacity-20 z-0" />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-lg font-semibold">See my about page →</span>
                        </div>

                        {/* Image */}
                        <img
                            src="src/assets/Morgan002.jpg"
                            alt="Morgan Cooper"
                            className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </Link>
            </div>
        </section>
    )
}
