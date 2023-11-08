import React from 'react'
import { motion } from 'framer-motion'
import { Pin, PinOff } from 'lucide-react'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@ui/ContextMenu'
import { Trash } from 'iconsax-react'
import { useNotesStore } from '@/stores/NotesStore'
import Link from 'next/link'

function NoteItem({ note, active }: { note: Note, active: boolean }) {

    const { removeNote, pinNote, unpinNote } = useNotesStore()

    const handlePin = (id: string) => {
        if (!note.pinned) pinNote(id)
        else unpinNote(id)
    }

    return (
        <motion.div layout className={`${active ? 'bg-tertiary/40' : ''} relative cursor-pointer select-none bg-background hover:bg-tertiary/30 space-y-1 p-2 rounded-lg`}>
            <ContextMenu>
                <ContextMenuTrigger>
                    <Link href={`/notes/${note.id}`} className='space-y-1'>
                        <h1 className='text-white font-medium'>{note.title}</h1>

                        {note.content && (
                            <p className='text-gray-300'>
                                {note.content.slice(0, 60)}...
                            </p>
                        )}

                        {/* pinned note */}
                        {note.pinned && (
                            <Pin size={12} className='absolute top-[4px] right-[4px] fill-green-500 stroke-green-500 rotate-45' />
                        )}
                    </Link>
                </ContextMenuTrigger>

                <ContextMenuContent className='text-gray-400'>
                    <ContextMenuItem>
                        <button onClick={() => handlePin(note.id)} className='gap-2 flex items-center'>
                            {note.pinned ? (
                                <PinOff size={16} />
                            ) : (
                                <Pin size={16} />
                            )}
                            <span>{note.pinned ? 'Unpin' : 'Pin'}</span>
                        </button>
                    </ContextMenuItem>

                    <ContextMenuItem>
                        <button onClick={() => removeNote(note.id)} className='gap-2 text-red-500 flex items-center'>
                            <Trash size={16} />
                            <span>Delete</span>
                        </button>
                    </ContextMenuItem>
                </ContextMenuContent>

            </ContextMenu>
        </motion.div>
    )
}

export default NoteItem