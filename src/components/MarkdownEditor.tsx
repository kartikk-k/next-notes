import React, { useRef } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

function MarkdownEditor({ preview }: { preview: boolean }) {
    const initialMarkdown = '### Hi, *Pluto*!'

    const [markdown, setMarkdown] = React.useState<string | null>(initialMarkdown)
    const ref = useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (preview) return
        if (ref.current) {
            ref.current.innerText = markdown || ''
        }
    }, [preview])

    const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        setMarkdown(target.innerText)
    }

    return (
        <div className='h-full'>
            {!preview ? (
                <div
                    ref={ref}
                    onInput={handleChange}
                    contentEditable
                    className='markdown-editor w-full bg-transparent outline-none resize-none'
                />
            ) : (
                <Markdown
                    className='markdown-preview space-y-6'
                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                    remarkPlugins={[remarkGfm]}
                >
                    {markdown}
                </Markdown>
            )}
        </div>
    )
}

export default MarkdownEditor