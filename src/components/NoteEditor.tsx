"use client"

import React from 'react'
import { InfoCircle, More, SidebarLeft, Task } from 'iconsax-react'
import MarkdownEditor from './MarkdownEditor'

function NoteEditor() {

    const [preview, setPreview] = React.useState(false)

    return (
        <div className='text-gray-400 flex flex-col text-sm h-screen'>
            {/* header */}
            <div className='p-4 flex shrink-0 items-center justify-between border-b border-gray-600'>
                <button>
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
            <div className='p-4 overflow-y-auto h-full'>
                <MarkdownEditor preview={preview} />
            </div>

        </div>
    )
}

export default NoteEditor