"use client"

import React, { useEffect } from 'react'
import { InfoCircle, More, SidebarLeft, Task } from 'iconsax-react'
import MarkdownEditor from './MarkdownEditor'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import NoteNotFoundIllustration from '@/assets/NoteNotFound.svg'

interface props {
    isOpen: boolean
    onClick: (isOpen: boolean) => void
    note: Note | undefined | null
}

function NoteEditor({ isOpen, onClick, note }: props) {

    const [preview, setPreview] = React.useState(true)

    useEffect(() => {
        setPreview(!note?.content ? false : true)
    }, [note])

    return (
        <div className='text-gray-400 flex flex-col text-sm h-screen bg-background'>
            {/* header */}
            <div className='p-4 flex shrink-0 items-center justify-between border-b border-gray-600'>
                <button onClick={() => onClick(!isOpen)}>
                    <SidebarLeft variant='TwoTone' size={18} />
                </button>

                <div className='flex items-center gap-4'>
                    <button>
                        <More variant='TwoTone' size={18} />
                    </button>

                    <button>
                        <Task variant='TwoTone' size={18} />
                    </button>

                    <button>
                        <InfoCircle variant='TwoTone' size={18} />
                    </button>

                    <button
                        onClick={() => setPreview(!preview)}
                        className={`text-xs ${preview ? 'text-green-600' : 'text-yellow-500'}`}
                    >
                        Preview
                    </button>
                </div>
            </div>


            {/* main content */}

            {note && (
                <div className='p-4 overflow-y-auto h-full'>
                    <MarkdownEditor preview={preview} note={note} />
                </div>
            )}

            {note === null && (
                <div className='p-4 gap-2 overflow-y-auto h-full flex items-center justify-center flex-col'>
                    <Image src={NoteNotFoundIllustration} alt='note not found' className='w-24' />
                    <p>Note not found</p>
                </div>
            )}


            {note === undefined && (
                <div className='p-4 overflow-y-auto h-full flex items-center justify-center'>
                    <Loader2 size={24} className='animate-spin' />
                </div>
            )}


        </div>
    )
}

export default NoteEditor