import { HambergerMenu, NoteAdd, SearchNormal1 } from 'iconsax-react'
import { Pin } from 'lucide-react'

function NotesList() {
    return (
        <div className='text-xs font-medium text-gray-400'>
            {/* header */}
            <div className='flex border-b border-b-gray-600 items-center justify-between p-4'>
                <button>
                    <HambergerMenu variant='TwoTone' size={18} />
                </button>

                <span className='text-white'>All Notes</span>

                <button>
                    <NoteAdd variant='TwoTone' size={18} />
                </button>
            </div>

            {/* search */}
            <div className=' px-4 py-2.5 border-b border-b-gray-600 flex items-center gap-2'>
                <SearchNormal1 variant='TwoTone' size={16} />
                <input
                    type="text"
                    placeholder='Search all notes...'
                    className='outline-none bg-transparent w-full'
                />
            </div>

            {/* notes list */}
            <div className='p-4 font-normal relative space-y-4'>
                <div className='bg-tertiary/70 cursor-pointer select-none space-y-1 p-2 rounded-lg'>
                    <h1 className='text-white'>Welcome to Git Notes</h1>
                    <p className='text-gray-300'>Git notes is an offline first note taking app with minimal...</p>

                    {/* pinned note */}
                    <Pin size={12} className='absolute top-[16px] right-[20px] fill-green-500 stroke-green-500 rotate-45' />
                </div>

                <div className='space-y-1 p-2 rounded-lg cursor-pointer select-none hover:bg-tertiary/30'>
                    <h1 className='text-white'>Exploring cool features</h1>
                    <p className='text-gray-300'>It is a long established fact that a reader will be distracted by the readable...</p>
                </div>
            </div>
        </div>
    )
}

export default NotesList