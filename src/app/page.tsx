"use client"

import React from 'react'
import NoteEditor from '@/components/NoteEditor'
import NotesList from '@/components/NotesList'
import Sidebar from '@/components/Sidebar'
import { motion } from 'framer-motion'

function Home() {
  const [isListOpen, setIsListOpen] = React.useState(true)

  const handleChange = (isOpen: boolean) => {
    setIsListOpen(isOpen)
  }

  return (
    <div className='h-screen subpixel-antialiased bg-background grid grid-cols-[230px,1fr]'>
      {/* sidebar */}
      <Sidebar activeTab='ALL_NOTES' />

      <div className='flex relative h-screen'>
        {/* notes list */}
        <motion.div
          layout
          transition={{ bounce: 0 }}
          className={`w-[280px] shrink-0 border-r bg-background border-gray-600 h-full
          ${isListOpen ? 'block' : 'absolute'} left-[-280px]
          `}
        >
          <NotesList activeNoteId={null} />
        </motion.div>

        {/* note section */}
        <motion.div
          layout
          transition={{ bounce: 0 }}
          className='w-full'>
          <NoteEditor isOpen={isListOpen} onClick={handleChange} note={null} />
        </motion.div>

      </div>

    </div>
  )
}

export default Home