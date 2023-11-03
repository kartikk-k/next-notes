import React from 'react'
import NoteEditor from '@/components/NoteEditor'
import NotesList from '@/components/NotesList'
import Sidebar from '@/components/Sidebar'

function Home() {
  return (
    <div className='h-screen subpixel-antialiased bg-background grid grid-cols-[230px,1fr]'>
      {/* sidebar */}
      <Sidebar />

      <div className='flex h-screen'>
        {/* notes list */}
        <div className='w-[280px] shrink-0 border-r border-gray-600 h-full'>
          <NotesList />
        </div>
        {/* note section */}
        <div className='w-full'>
          <NoteEditor />
        </div>

      </div>
    </div>
  )
}

export default Home