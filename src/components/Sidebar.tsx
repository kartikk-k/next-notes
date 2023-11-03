import { InfoCircle, Notepad2, Setting2, Stickynote, Trash } from 'iconsax-react'
import Link from 'next/link'

function Sidebar() {
    return (
        <div className='bg-secondary relative z-10 border-r border-gray-600 text-xs flex flex-col justify-between font-medium text-gray-400'>
            {/* top */}
            <div className='space-y-4'>
                <Link href={'/'} className='flex items-center text-white gap-2 border-b p-4 border-gray-600'>
                    <Notepad2 variant='TwoTone' size={18} />
                    <span>Next Gitnotes</span>
                </Link>

                <div className='space-y-6 px-4'>
                    {/* navigation */}
                    <div className='space-y-2'>
                        <button className='flex items-center gap-2 bg-tertiary text-white p-2 w-full rounded-lg'>
                            <Stickynote variant='TwoTone' size={18} />
                            <span>All Notes</span>
                        </button>

                        <button className='flex items-center hover:bg-tertiary/30 hover:text-white gap-2 p-2 w-full rounded-lg'>
                            <Setting2 variant='TwoTone' size={18} />
                            <span>Settings</span>
                        </button>

                        <button className='flex items-center gap-2 p-2 w-full rounded-lg hover:bg-tertiary/30 hover:text-white'>
                            <InfoCircle variant='TwoTone' size={18} />
                            <span>Help & Support</span>
                        </button>

                        <button className='flex items-center gap-2 p-2 w-full rounded-lg hover:bg-tertiary/30 hover:text-white'>
                            <Trash variant='TwoTone' size={18} />
                            <span>Trash</span>
                        </button>
                    </div>

                    <hr className='border-gray-700' />

                    {/* labels */}
                    <div className='p-2 space-y-4'>
                        <div className='flex items-center gap-2 justify-between'>
                            {/* <Tag variant='TwoTone' size={18} /> */}
                            <p className='font-normal'>Tags</p>
                            <button className='text-primary'>Edit</button>
                        </div>

                        <div className='space-y-2'>
                            <button className='flex py-1 hover:text-white items-center gap-2 w-full rounded-lg'>
                                <span className='inline-block w-2 h-2 rounded-md bg-blue-600' />
                                <span>Typescript</span>
                            </button>

                            <button className='flex py-1 items-center hover:text-white gap-2 w-full rounded-lg'>
                                <span className='inline-block w-2 h-2 rounded-md bg-teal-600' />
                                <span>React</span>
                            </button>
                        </div>
                    </div>
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