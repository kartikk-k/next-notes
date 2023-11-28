"use client"

import React from 'react'
import CreateNewTag from './CreateNewTag'
import { useNotesStore } from '@/stores/NotesStore'
import { motion } from 'framer-motion'
import { Trash } from 'iconsax-react'

function TagsEditor() {

    const { tags, removeTag } = useNotesStore()

    const getClass = (value: string) => {
        return `bg-${value}-500`;
    }


    return (
        <div className='p-2 space-y-4'>
            {/* header */}
            <div className='flex items-center gap-2 justify-between'>
                <p className='font-normal'>Tags</p>
                <CreateNewTag />
            </div>

            {/* tags list */}
            <div className='space-y-2'>
                {tags.map(tag => (
                    <motion.button
                        key={tag.id}
                        layout
                        className='flex group justify-between py-1 items-center gap-2 w-full rounded-lg'
                    >
                        <span className='flex items-center gap-2 duration-200 group-hover:text-white'>
                            <span className={`inline-block w-2 h-2 rounded-md ${getClass(tag.color)}`} />
                            <span>{tag.title}</span>
                        </span>

                        <span
                            onClick={() => removeTag(tag.id)}
                            className='hidden group-hover:inline-block' role='button'
                        >
                            <Trash size={16} />
                        </span>

                    </motion.button>
                ))}

                {/* <button className='flex py-1 items-center hover:text-white gap-2 w-full rounded-lg'>
                    <span className='inline-block w-2 h-2 rounded-md bg-teal-600' />
                    <span>React</span>
                </button> */}
            </div>
        </div>
    )
}

export default TagsEditor