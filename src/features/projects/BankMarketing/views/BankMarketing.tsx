import NotebookEmbed from "../components/NotebookViewer"
import type { JSX } from "react"

export default function BankMarketing(): JSX.Element {
    return (
        <section className="relative py-28 bg-black text-white overflow-hidden">
            {/* Glow Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[40%] left-1/2 w-[80rem] h-[80rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(255,0,255,0.04),_transparent_70%)] blur-[140px]" />
                <div className="absolute top-[70%] left-[30%] w-[60rem] h-[60rem] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,0,0.04),_transparent_70%)] blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 space-y-20">
                {/* Title & Description */}
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <h2 className="text-4xl font-extrabold text-cyan-400 tracking-tight sm:text-5xl">
                        Bank Marketing Predictor
                    </h2>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                        A neural network trained on real marketing campaign data to predict customer responses.
                        View the deep dive in the notebook and test out the model yourself in the demo below.
                    </p>
                </div>

                {/* Notebook Viewer */}
                <NotebookEmbed
                    url="src/features/projects/BankMarketing/5_Assignment.html"
                    title="Deep Learning Model Notebook"
                />

                {/* Demo Section */}
                <div className="bg-zinc-900 border border-cyan-600 rounded-2xl p-8 shadow-lg text-center space-y-6">
                    <h3 className="text-2xl font-bold text-cyan-300">Try the Model</h3>
                    <p className="text-sm text-zinc-400">
                        Soon you’ll be able to input campaign data and watch the model respond live.
                    </p>

                    {/* Placeholder */}
                    <div className="text-zinc-500 italic">
                        [ Interactive demo coming soon – sliders, toggles, inputs... ]
                    </div>
                </div>
            </div>
        </section>
    )
}
