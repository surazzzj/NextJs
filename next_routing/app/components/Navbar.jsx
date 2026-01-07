import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between text-xl items-center px-8 py-6 mb-10'>
        <h2>Sheryians</h2>
        <div className='flex gap-8'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/product'>Product</Link>
            <Link href='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar