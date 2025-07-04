'use client'

import {type JSX, useEffect} from 'react'

export default function LeadvilleProject(): JSX.Element {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])
    return (
        <main className="relative bg-[#0f172a] text-white py-16 px-6 overflow-x-hidden">
            {/* Glow Background that only spans content height */}
            <div className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[30%] left-[-400%] w-[120rem] h-[120rem] -translate-x-1/2 -translate-y-1/2
                    bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.2),_transparent_80%)] blur-[100px]" />
                <div className="absolute top-[60%] left-[-10%] w-[100rem] h-[100rem]
                    bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.3),_transparent_80%)] blur-[100px]" />
                <div className="absolute top-[10%] right-[-20%] w-[100rem] h-[100rem]
                    bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.3),_transparent_80%)] blur-[100px]" />
                <div className="absolute bottom-[10%] left-[30%] w-[80rem] h-[80rem]
                    bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.3),_transparent_80%)] blur-[120px]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 space-y-16">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl font-extrabold text-cyan-400">Leadville 50 Project</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        This notebook explores terrain, pacing strategies, and environmental impact across the Leadville 50
                        ultra marathon. View the full interactive report below.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-center pt-4">
                    <a
                        href="src/features/projects/Leadville50/leadville_profile.pdf"
                        download
                        className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Download Leadville Profile (PDF)
                    </a>
                    <a
                        href="https://github.com/your-username/your-leadville-project" // 🔁 Replace with real link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 rounded-lg bg-zinc-800 border border-cyan-500 text-cyan-400 font-semibold hover:bg-zinc-700 transition-all duration-300 shadow-md"
                    >
                        View on GitHub →
                    </a>
                </div>

                {/* HTML Report Viewer */}
                <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden border border-cyan-600 shadow-xl bg-white">
                    <iframe
                        src="src/features/projects/Leadville50/leadville_50_profile.html"
                        title="Leadville 50 Profile"
                        className="w-full h-[85vh] bg-blue-50"
                    />
                </div>

                {/* PDF Viewer (optional) */}
                <div className="w-full max-w-7xl mx-auto rounded-2xl overflow-hidden border border-cyan-600 shadow-xl bg-white">
                    <iframe
                        src="src/features/projects/Leadville50/leadville_profile.pdf"
                        title="Leadville 50 PDF"
                        className="w-full h-[85vh] bg-blue-50"
                    />
                </div>
            </div>
        </main>
    )
}
