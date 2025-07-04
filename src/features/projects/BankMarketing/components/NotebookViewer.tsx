import { type JSX } from "react"

interface NotebookEmbedProps {
    url: string
    title?: string
}

export default function NotebookEmbed({
                                          url,
                                          title = "Notebook Viewer",
                                      }: NotebookEmbedProps): JSX.Element {
    return (
        <div className="w-full rounded-2xl overflow-hidden border border-cyan-600 shadow-xl bg-white">
            <iframe
                src={url}
                title={title}
                className="w-full h-[800px]"
                allowFullScreen
            />
        </div>
    )
}
