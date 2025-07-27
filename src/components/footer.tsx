import React from 'react'

function footer() {
  return (
    <div className='w-full h-[95%] flex justify-between gap-5 bg-[#e3e3e3] rounded-tl-4xl rounded-tr-3xl -mt-[1.5vw] p-20 border-1 border-[#2e2e2e]'>
        <div className='w-1/2 h-[100%] flex flex-col justify-between'>
            <h1 className='text-[5vw] font-bold tracking-tighter uppercase leading-none -mb-20 text-gray-700'>Footer</h1>
            <h3 className='font-semibold text-[2vw] text-gray-800'>Pamflet.</h3>
        </div>
        <div className='w-1/2 text-[5vw] font-light tracking-tighter uppercase leading-none -mb-20 text-gray-700'>
            <h1>Lorem ipsum.</h1>
        </div>
    </div>
  )
}

export default footer