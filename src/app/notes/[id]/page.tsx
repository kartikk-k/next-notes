"use client"

import React, { useEffect } from 'react'
import NoteEditor from '@/components/NoteEditor'
import NotesList from '@/components/NotesList'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useNotesStore } from '@/stores/NotesStore'

function Note() {
    const { id } = useParams<{ id: string }>()

    const { notes } = useNotesStore()

    const [isListOpen, setIsListOpen] = React.useState(true)
    const [note, setNote] = React.useState<Note | undefined | null>(undefined)


    useEffect(() => {
        if (!id) return
        const note = notes.find(note => note.id === id)
        if (note) setNote(note)
        else setNote(null)

    }, [id])

    const handleChange = (isOpen: boolean) => {
        setIsListOpen(isOpen)
    }

    return (
        <div className='flex relative h-screen'>
            {/* notes list */}
            <motion.div
                layout
                transition={{ bounce: 0 }}
                className={`w-[280px] shrink-0 border-r bg-background border-gray-600 h-full
                    ${isListOpen ? 'block' : 'absolute'} left-[-280px]`}
            >
                <NotesList activeNoteId={id} />
            </motion.div>

            {/* note section */}
            <motion.div
                layout
                transition={{ bounce: 0 }}
                className='w-full'>
                <NoteEditor isOpen={isListOpen} onClick={handleChange} note={note} />
            </motion.div>

        </div>
    )
}

export default Note