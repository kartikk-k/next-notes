import { InfoCircle, Keyboard, Setting2, Stickynote, Tag, Trash } from 'iconsax-react'
import { WifiIcon } from 'lucide-react'
import React from 'react'

function Sidebar() {
    return (
        <div className='bg-secondary text-xs flex flex-col justify-between font-medium text-gray-400 p-4 py-6'>
            {/* top */}
            <div className='space-y-6'>
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

            {/* bottom */}
            <div className='font-normal px-2 space-y-1'>
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