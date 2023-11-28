import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@ui/Dialog'
import { Add, NoteAdd } from 'iconsax-react'
import { useNotesStore } from '@/stores/NotesStore'
import cn from 'mxcn'
import ColorOptions from './ColorOptions'

function CreateNewTag() {

    const { addTag } = useNotesStore()

    const colorOptions = ['yellow', 'teal', 'blue', 'violet', 'lime', 'emerald', 'cyan', 'sky', 'pink', 'rose']

    const [title, setTitle] = React.useState('')
    const [currentColor, setCurrentColor] = React.useState('teal')

    const createTag = () => {
        if (!title.trim()) return
        // create tag object
        const tag: Tag = {
            id: Date.now().toString(),
            title,
            color: currentColor
        }

        // add note to store
        addTag(tag)
        setTitle('')
    }

    return (
        <Dialog>
            <DialogTrigger className='flex items-center justify-center w-5 h-5 hover:bg-white/10 rounded-md'>
                <Add size={18} />
            </DialogTrigger>
            <DialogContent className='text-sm'>
                <div>
                    <h1 className='text-white'>Create Tag</h1>
                    <p className='text-xs'>Add title to create new tag</p>
                </div>

                <div className='space-y-6'>
                    <div className='space-y-2'>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="tag">Tag</label>
                            <input
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                type='text'
                                autoFocus
                                className='outline-none text-white bg-background h-9 px-4 rounded-lg'
                            />
                        </div>

                        <div className='flex flex-col space-y-4'>
                            <label htmlFor="color">Color</label>
                            <ColorOptions
                                colorOptions={colorOptions}
                                currentColor={currentColor}
                                setCurrentColor={setCurrentColor}
                            />
                        </div>
                    </div>


                    <div className='flex gap-2 float-right'>
                        <DialogClose>
                            <button className='py-2 px-4 rounded-lg border border-gray-600'>Cancel</button>
                        </DialogClose>

                        <DialogClose onClick={createTag}>
                            <button className='py-2 px-4 rounded-lg bg-tertiary text-white'>Create</button>
                        </DialogClose>
                    </div>

                </div>

            </DialogContent>
        </Dialog>
    )
}

export default CreateNewTag