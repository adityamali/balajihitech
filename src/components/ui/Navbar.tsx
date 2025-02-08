import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full top-0 left-0 absolute'>
      <div className='flex justify-between items-center bg-primary'>

      </div>
      <div className='flex justify-between items-center px-16 py-8'>
        <div className='text-2xl font-bold'>
            <div id='logo' className='text-foreground'>
                <a href='#'>Balaji Hi Tech Garment</a>
            </div>
        </div>
        <div className='flex gap-8'>
          <a href='#' className='p-2'>Home</a>
          <a href='#' className='p-2'>Products</a>
          <a href='#' className='p-2'>Materials</a>
          <a href='#' className='p-2'>About</a>
          <a href='#' className='p-2'>Ethics</a>
          <a href='#' className='bg-primary py-2 px-4 rounded'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar