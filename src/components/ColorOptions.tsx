import React from 'react'
import cn from 'mxcn'


interface props {
    setCurrentColor: React.Dispatch<React.SetStateAction<string>>
    colorOptions: string[]
    currentColor: string
}

function ColorOptions({ setCurrentColor, colorOptions, currentColor }: props) {

    const getClass = (value: string) => {
        return `bg-${value}-500 outline outline-offset-4 outline-${value}-500`;
    }

    return (
        <div>
            <div className='flex gap-6'>
                {colorOptions.map((color, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentColor(color)}
                        className={cn(`w-3 h-3 rounded-full duration-150`,
                            getClass(color),
                            currentColor === color ? '' : 'outline-0'
                        )}
                    />
                ))}
            </div>
        </div>
    )
}

export default ColorOptions