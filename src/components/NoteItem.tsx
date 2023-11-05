import React from 'react'
import { motion } from 'framer-motion'
import { Pin } from 'lucide-react'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@ui/ContextMenu'
import { Trash } from 'iconsax-react'
import { useNotesStore } from '@/stores/NotesStore'
import Link from 'next/link'

function NoteItem({ note }: { note: Note }) {

    const { removeNote } = useNotesStore()

    return (
        <motion.div layout className={`${!true ? 'bg-tertiary/70' : ''}  cursor-pointer select-none bg-background hover:bg-tertiary/30 space-y-1 p-2 rounded-lg`}>
            <ContextMenu>
                <ContextMenuTrigger>
                    <Link href={`/notes/${note.id}`} className='space-y-1'>
                        <h1 className='text-white'>{note.title}</h1>

                        {note.content && (
                            <p className='text-gray-300'>
                                {note.content.slice(0, 60)}...
                            </p>
                        )}

                        {/* pinned note */}
                        {note.pinned && (
                            <Pin size={12} className='absolute top-[16px] right-[20px] fill-green-500 stroke-green-500 rotate-45' />
                        )}
                    </Link>
                </ContextMenuTrigger>

                <ContextMenuContent>
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