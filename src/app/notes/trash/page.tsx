"use client"

import { useNotesStore } from "@/stores/NotesStore"
import { DocumentPrevious, Trash } from "iconsax-react"
import { motion } from "framer-motion"


function Page() {

    const { trashNotes, removeTrashNote, recoverTrashNote, clearTrash } = useNotesStore()

    const handleDelete = (id: string) => {
        removeTrashNote(id)
    }

    const handleRecovery = (id: string) => {
        recoverTrashNote(id)
    }

    return (
        <div className='relative h-screen'>

            <div className='w-full text-xs text-gray-400 font-medium'>

                {/* header */}
                <div className="p-4 h-12 flex items-center justify-between text-white border-b border-gray-600">
                    <h1>Trash</h1>
                    <button onClick={clearTrash} className="text-red-500 font-normal">
                        Clear all
                    </button>
                </div>

                <motion.div layout className="grid grid-cols-3 p-4 gap-4">
                    {trashNotes.map(note => (
                        <motion.div
                            layout
                            key={note.id}
                            className="border space-y-3 border-gray-600 p-4 rounded-xl"
                        >
                            <div className="flex items-center justify-between">
                                <h1 className="text-white">{note.title}</h1>
                                <div className="flex gap-2">
                                    <button onClick={() => handleRecovery(note.id)}>
                                        <DocumentPrevious size={16} className="hover:text-blue-500" />
                                    </button>
                                    <button onClick={() => handleDelete(note.id)}>
                                        <Trash size={16} className="hover:text-red-500" />
                                    </button>
                                </div>
                            </div>
                            <p>{note.content.slice(0, 100)}...</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </div>
    )
}

export default Page