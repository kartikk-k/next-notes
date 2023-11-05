import React from 'react'
import Sidebar from '@/components/Sidebar'

function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div>
            <div className='h-screen subpixel-antialiased bg-background grid grid-cols-[230px,1fr]'>
                {/* sidebar */}
                <Sidebar activeTab={null} />

                {children}
            </div>
        </div>
    )
}

export default Layout