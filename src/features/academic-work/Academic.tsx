'use client'

import { type JSX } from 'react'

// Optional: Replace with your real data later
const articles: { title: string; description: string; pdf?: string }[] = [
    // Example structure for future use
    // {
    //     title: 'Understanding Gradient Descent in Neural Networks',
    //     description: 'Published in ACM SIGAI Journal, 2024',
    //     pdf: '/articles/gradient-descent.pdf'
    // }
]

export default function Academic(): JSX.Element {
    return (
        <main className="bg-zinc-950 text-white min-h-screen py-16 px-6 space-y-16">
            {/* Header */}
            <div className="max-w-5xl mx-auto text-center space-y-4">
                <h1 className="text-4xl font-extrabold text-cyan-400">Academic Articles</h1>
                <p className="text-slate-300 max-w-2xl mx-auto">
                    A collection of academic writing, research, and publications. These pieces reflect deep dives into machine learning, systems, and thought.
                </p>
            </div>

            {/* Content */}
            {articles.length === 0 ? (
                <div className="text-center text-gray-400 text-lg pt-12">
                    <p>📚 Academic articles are currently in progress.</p>
                    <p className="mt-2 italic">Coming soon.</p>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {articles.map((article, idx) => (
                        <div
                            key={idx}
                            className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow-lg hover:scale-[1.015] transition-transform"
                        >
                            <h2 className="text-xl font-bold text-cyan-400 mb-2">{article.title}</h2>
                            <p className="text-sm text-slate-300 mb-4">{article.description}</p>
                            {article.pdf && (
                                <a
                                    href={article.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-2 text-sm text-blue-400 hover:underline"
                                >
                                    Read Full PDF →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
}
