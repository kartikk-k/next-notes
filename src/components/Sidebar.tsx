import { InfoCircle, Notepad2, Setting2, Stickynote, Trash } from 'iconsax-react'
import Link from 'next/link'
import TagsEditor from './TagsEditor'


interface props {
    activeTab: 'ALL_NOTES' | 'TRASH' | 'SETTINGS' | 'HELP' | null
}

function Sidebar({ activeTab }: props) {
    return (
        <div className='bg-secondary relative z-10 border-r border-gray-600 text-xs flex flex-col justify-between font-medium text-gray-400'>
            {/* top */}
            <div className='space-y-4'>
                <Link href={'/'} className='flex h-12 items-center text-white gap-2 border-b p-4 border-gray-600'>
                    <Notepad2 variant='TwoTone' size={18} />
                    <span>Next Gitnotes</span>
                </Link>

                <div className='space-y-6 px-4'>
                    {/* navigation */}
                    <div className='space-y-2'>
                        <Link href={'/'} className={`flex items-center gap-2 ${activeTab === 'ALL_NOTES' ? 'bg-tertiary text-white' : 'hover:bg-tertiary/30 hover:text-white'}  p-2 w-full rounded-lg duration-200`}>
                            <Stickynote variant='TwoTone' size={18} />
                            <span>All Notes</span>
                        </Link>

                        <button className={`flex items-center gap-2 ${activeTab === 'SETTINGS' ? 'bg-tertiary text-white' : 'hover:bg-tertiary/30 hover:text-white'}  p-2 w-full rounded-lg duration-200`}>
                            <Setting2 variant='TwoTone' size={18} />
                            <span>Settings</span>
                        </button>

                        <button className={`flex items-center gap-2 ${activeTab === 'HELP' ? 'bg-tertiary text-white' : 'hover:bg-tertiary/30 hover:text-white'}  p-2 w-full rounded-lg duration-200`}>
                            <InfoCircle variant='TwoTone' size={18} />
                            <span>Help & Support</span>
                        </button>

                        <Link href={'/notes/trash'} className={`flex items-center gap-2 ${activeTab === 'TRASH' ? 'bg-tertiary text-white' : 'hover:bg-tertiary/30 hover:text-white'}  p-2 w-full rounded-lg duration-200`}>
                            <Trash variant='TwoTone' size={18} />
                            <span>Trash</span>
                        </Link>
                    </div>

                    <hr className='border-gray-700' />

                    {/* labels */}
                    <TagsEditor />

                </div>

            </div>

            {/* bottom */}
            <div className='font-normal flex flex-col items-start py-4 px-4 space-y-1'>
                <button className='py-0.5'>
                    <span>Keyboard shortcuts</span>
                </button>

                <button className='py-0.5'>
                    <span>About & Contact</span>
                </button>
            </div>

        </div>
    )
}

export default Sidebar