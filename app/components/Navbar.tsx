import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white text-lg font-bold'>
          WebDevExam
        </div>
        <ul className='flex space-x-4'>
        <li>
            <Link href='/' className='text-white hover:text-gray-400'>
             Home
            </Link>
          </li>
          <li>
            <Link href='/currentTime' className='text-white hover:text-gray-400'>
              Time
            </Link>
          </li>
          <li>
          <Link href='/currentDate' className='text-white hover:text-gray-400'>
              Date
            </Link>
          </li>
          <li>
          <Link href='/crudPage' className='text-white hover:text-gray-400'>
              Crud
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
