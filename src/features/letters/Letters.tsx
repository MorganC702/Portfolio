'use client'

import { useState } from 'react'
import { type JSX } from 'react'
import { letters } from '../../data/LettersOfRec'

export default function Letters(): JSX.Element {
    const [activeLetter, setActiveLetter] = useState<null | typeof letters[0]>(null)

    return (
        <main className="bg-zinc-950 text-white min-h-screen py-16 px-6 space-y-24">
            {/* Header */}
            <div className="max-w-5xl mx-auto text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-cyan-400">Letters of Recommendation</h1>
                <p className="text-slate-300 max-w-2xl mx-auto">
                    I've been fortunate to work with inspiring professionals and mentors who’ve written about our work together. You can preview each letter here.
                </p>
            </div>

            {/* Letters List */}
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {letters.map((letter, idx) => (
                    <div
                        key={idx}
                        onClick={() => setActiveLetter(letter)}
                        className="cursor-pointer bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-zinc-700 hover:scale-[1.015] transition-transform"
                    >
                        {/* Inline Generated Thumbnail */}
                        <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center text-3xl font-bold tracking-wide">
                            PDF
                        </div>

                        <div className="p-4 space-y-2">
                            <h2 className="text-lg font-bold text-cyan-400">{letter.title}</h2>
                            <p className="text-sm text-slate-300">{letter.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {activeLetter && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                    <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setActiveLetter(null)}
                            className="absolute top-3 right-3 text-white text-2xl font-bold hover:text-cyan-400"
                        >
                            ×
                        </button>

                        <iframe
                            src={activeLetter.src}
                            title={activeLetter.title}
                            className="w-full h-[80vh]"
                        />
                    </div>
                </div>
            )}
        </main>
    )
}
