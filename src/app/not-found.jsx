import { notFound } from 'next/navigation'
import React from 'react'

const Notfound = () => {
  return (
    <div className='flex items-center justify-center'>
    <div>
      <img className="block w-1/2 mx-auto" src=" /image.webp" alt="Not-found" />
      <h1 className="text-9xl font-bold text-center">404</h1>
      <h4 className="text-3xl text-center"></h4>
      <a href="/" className="py-2 px-4 rounded -lg bg-grey-200 border mt-4 text-center block font-center">back to home page</a>
    </div>
    </div>
  )
}

export default Notfound;
