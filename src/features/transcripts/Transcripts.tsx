'use client'

import { useState } from 'react'
import { type JSX } from 'react'
import { transcripts } from '../../data/Transcripts'

export default function Transcripts(): JSX.Element {
    const [activeTranscript, setActiveTranscript] = useState<null | typeof transcripts[0]>(null)

    return (
        <main className="bg-zinc-950 text-white min-h-screen py-16 px-6 space-y-24">
            {/* Header */}
            <div className="max-w-5xl mx-auto text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-cyan-400">Academic Transcripts</h1>
                <p className="text-slate-300 max-w-2xl mx-auto">
                    A collection of official transcripts showcasing my academic performance across different institutions and programs.
                </p>
            </div>

            {/* Transcript Cards */}
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {transcripts.map((transcript, idx) => (
                    <div
                        key={idx}
                        onClick={() => setActiveTranscript(transcript)}
                        className="cursor-pointer bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-zinc-700 hover:scale-[1.015] transition-transform"
                    >
                        {/* Placeholder thumbnail */}
                        <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center text-3xl font-bold tracking-wide">
                            PDF
                        </div>

                        <div className="p-4 space-y-2">
                            <h2 className="text-lg font-bold text-cyan-400">{transcript.school}</h2>
                            <p className="text-sm text-slate-300">{transcript.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Preview */}
            {activeTranscript && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] relative">
                        <button
                            onClick={() => setActiveTranscript(null)}
                            className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-cyan-400"
                        >
                            ×
                        </button>

                        <iframe
                            src={activeTranscript.src}
                            title={activeTranscript.school}
                            className="w-full h-[80vh]"
                        />
                    </div>
                </div>
            )}
        </main>
    )
}
