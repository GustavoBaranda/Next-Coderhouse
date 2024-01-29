import React from 'react'
import Image from 'next/image'
import Er from '../../public/404.jpg'

const NotFound = () => {
  return (
    <div className='max-h-[90vh]'>
        <Image src={Er} />
    </div>
  )
}

export default NotFound