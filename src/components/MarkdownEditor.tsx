import React, { useEffect, useRef } from 'react'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { useNotesStore } from '@/stores/NotesStore'
import { AnimatePresence, motion } from 'framer-motion'


interface props {
    preview: boolean
    note: Note
}

function MarkdownEditor({ preview, note }: props) {
    const initialMarkdown = '### Welcome to Next Git-notes!'
    const { updateNote } = useNotesStore()

    const [markdown, setMarkdown] = React.useState<string>(note.content)
    const ref = useRef<HTMLDivElement>(null)

    // set initial markdown state
    useEffect(() => {
        if (preview) return
        if (ref.current) {
            ref.current.innerText = markdown || ''
        }
    }, [preview])

    // udpate markdown state on content change
    const handleChange = (e: React.ChangeEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement
        setMarkdown(target.innerText)
    }

    useEffect(() => {
        updateNote(note.id, {
            ...note,
            content: markdown
        })
    }, [markdown])

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

            {/* {!markdown.trim() && (
                <span className='absolute top-0 left-0'>start typing here...</span>
            )} */}
        </div>
    )
}

export default MarkdownEditor