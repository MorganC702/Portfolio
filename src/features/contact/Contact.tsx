'use client'

import type { JSX } from 'react'
import {contactMethods} from "../../data/ContactMethods.tsx";

export default function Contact(): JSX.Element {
    
    return (
        <main className="bg-zinc-950 text-white py-24 px-6 min-h-[90vh]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        <span className="text-cyan-400">Let’s</span> Connect
                    </h2>
                    <p className="mt-4 text-lg text-slate-300 font-mono">
                        Reach out if you'd like to collaborate, chat, or just say hi.
                    </p>
                    <p className="mt-4 text-base text-gray-400">
                        Whether you're interested in building something meaningful, discussing a project, or just connecting over shared interests — I'm always open to starting a conversation.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactMethods.map(({ title, value, href, icon }) => (
                        <a
                            key={title}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Link to ${title}`}
                            className="bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200 p-6 rounded-2xl border border-zinc-700 shadow-md flex flex-col gap-3 items-center sm:items-start text-center sm:text-left hover:shadow-lg"
                        >
                            <div className="flex items-center gap-3">
                                {icon}
                                <h3 className="text-lg font-semibold text-white">{title}</h3>
                            </div>
                            <p className="text-sm text-slate-400 break-words">{value}</p>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    )
}
