import { useState } from 'react'
import Image from 'next/image'

const links = [
  { link: 'nosotros', url: '#nosotros' },
  { link: 'Deportes', url: '#deporte' },
  { link: 'contactanos', url: '#contacto' },
]

export default function header() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <nav
      className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'
      id='header'
    >
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='#hero' className='flex items-center '>
          <Image
            width={50}
            height={50}
            src='/apollo-logo-hd.png'
            className='h-12 w-12 mr-3'
            alt='apolloSport Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            ApolloSport
          </span>
        </a>
        <div className='flex md:order-2'>
          <a
            target='_blank'
            href='https://www.instagram.com/apollosportguatire/'
            className='hidden md:block bg-slate-700 p-1 rounded-md hover:bg-slate-600 duration-200 ease-in-out hover:animate-bounce  '
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='icon icon-tabler icon-tabler-brand-instagram'
              viewBox='0 0 24 24'
            >
              <path stroke='none' d='M0 0h24v24H0z'></path>
              <path d='M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4z'></path>
              <path d='M9 12a3 3 0 106 0 3 3 0 10-6 0M16.5 7.5v.01'></path>
            </svg>
          </a>
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
            onClick={handleClick}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            !open && 'hidden'
          } w-full md:flex md:w-auto md:order-1`}
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            {links.map((link) => (
              <li>
                <a
                  href={link.url}
                  className='capitalize block border-b md:border-none py-2 px-2 rounded hover:bg-gray-800  md:hover:text-rose-500 font-bold  mb-3 md:mb-0'
                  aria-current='page'
                >
                  {link.link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
