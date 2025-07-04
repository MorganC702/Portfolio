import { useEffect, type JSX } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface WebsiteEmbedProps {
    url: string
    title?: string
}

export default function WebsiteEmbed({
                                         url,
                                         title = 'Renewable Energy Web App',
                                     }: WebsiteEmbedProps): JSX.Element {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    return (
        <>
            {/* 📝 Projects Description */}
            <section className="relative bg-zinc-950 pt-28 px-6 text-white overflow-hidden">
                {/* Glow */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute top-[45%] left-[60%] w-[60rem] h-[60rem] bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.05),_transparent_70%)] blur-[100px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl font-extrabold text-cyan-400"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-zinc-300 leading-relaxed"
                    >
                        Full-stack platform for a renewable energy company. Built end-to-end — frontend, backend, UI logic, analytics, and lead generation pipeline. Fast, clean, and mobile-optimized.
                    </motion.p>

                    <div className="flex justify-center pt-4">
                        <ChevronDown className="w-7 h-7 text-cyan-400 animate-bounce opacity-60" />
                    </div>
                </div>
            </section>

            {/* 🖼️ Projects Gallery */}
            <section className="relative bg-black py-28 px-6 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[70rem] h-[70rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.04),_transparent_70%)] blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto space-y-14">
                    <h3 className="text-3xl sm:text-4xl font-bold text-center text-cyan-300">
                        Project Gallery
                    </h3>

                    <p className="text-center text-zinc-400 max-w-2xl mx-auto text-sm">
                        These UI mockups and components reflect the visual experience. Code is proprietary; screenshots shown here are placeholders only.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(9)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="bg-zinc-900 rounded-xl aspect-video flex items-center justify-center text-zinc-500 text-sm border border-cyan-700 shadow hover:shadow-cyan-400/20 transition"
                            >
                                Screenshot {i + 1}
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center pt-4">
                        <ChevronDown className="w-7 h-7 text-cyan-400 animate-bounce opacity-60" />
                    </div>
                </div>
            </section>

            {/* 🌐 Live Site Embed */}
            <section className="relative bg-zinc-950 py-28 px-4 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[50%] left-[50%] w-[90rem] h-[90rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.04),_transparent_70%)] blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto space-y-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-cyan-300">
                        Live Project Preview
                    </h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl overflow-hidden border border-cyan-500 bg-white shadow-[0_0_60px_-15px_rgba(34,211,238,0.4)]"
                    >
                        <iframe
                            src={url}
                            title={title}
                            className="w-full h-[700px] border-none"
                            allowFullScreen
                        />
                    </motion.div>
                </div>
            </section>
        </>
    )
}
