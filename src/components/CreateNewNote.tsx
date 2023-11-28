import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@ui/Dialog'
import { NoteAdd } from 'iconsax-react'
import { useNotesStore } from '@/stores/NotesStore'

function CreateNewNote() {

    const { addNote } = useNotesStore()

    const [title, setTitle] = React.useState('')

    const createNote = () => {
        if (!title.trim()) return
        // create note object
        const note: Note = {
            id: Date.now().toString(),
            title,
            content: '',
            createdAt: new Date(),
            pinned: false,
        }

        // add note to store
        addNote(note)
        setTitle('')
    }

    return (
        <Dialog>
            <DialogTrigger>
                <NoteAdd variant='TwoTone' size={18} />
            </DialogTrigger>
            <DialogContent className='text-sm'>
                <div>
                    <h1 className='text-white'>Create note</h1>
                    <p className='text-xs'>Add title to create new note</p>
                </div>

                <div className='space-y-6'>
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="title">Title</label>
                        <input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            type='text'
                            autoFocus
                            className='outline-none text-white bg-background h-9 px-4 rounded-lg'
                        />
                    </div>

                    <div className='flex gap-2 float-right'>
                        <DialogClose>
                            <button className='py-2 px-4 rounded-lg border border-gray-600'>Cancel</button>
                        </DialogClose>

                        <DialogClose onClick={createNote}>
                            <button className='py-2 px-4 rounded-lg bg-tertiary text-white'>Create</button>
                        </DialogClose>
                    </div>

                </div>

            </DialogContent>
        </Dialog>
    )
}

export default CreateNewNote