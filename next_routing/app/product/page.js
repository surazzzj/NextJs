import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex justify-center gap-5 py-5'>
        <Link href='/product/men'>Men's Collection</Link>
        <Link href='/product/women'>Women's Collection</Link>
      </div>
      <h1>This is Product page</h1></div>
  )
}

export default page