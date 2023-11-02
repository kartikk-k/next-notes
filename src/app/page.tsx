import NotesList from '@/components/NotesList'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function Home() {
  return (
    <div className='h-screen bg-background grid grid-cols-[230px,1fr]'>
      {/* sidebar */}
      <Sidebar />

      <div>
        {/* notes list */}
        <div className='w-[280px] border-r border-gray-600 h-full'>
          <NotesList />
        </div>
        {/* note section */}
      </div>
    </div>
  )
}

export default Home