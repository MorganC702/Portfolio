'use client'

import { type JSX } from 'react'

export default function Resume(): JSX.Element {
    return (
        <main className="bg-zinc-950 text-white min-h-screen py-16 px-6 space-y-16">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-cyan-400">Resume</h1>
                <p className="text-slate-300 max-w-2xl mx-auto">
                    Here’s a full view of my resume. Feel free to preview or download it below.
                </p>
            </div>

            {/* Document Viewer */}
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-zinc-700 bg-zinc-900">
                <iframe
                    src="/public/letters/Dylan Cortez Letter of Recommendation.pdf" // ✅ Correct path assuming it's in the public folder
                    title="Morgan Cooper Resume"
                    className="w-full h-[80vh]"
                />
            </div>

            {/* Download Button */}
            <div className="text-center">
                <a
                    href="/resume.pdf" // ✅ Same here
                    download
                    className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                    Download PDF
                </a>
            </div>
        </main>
    )
}
