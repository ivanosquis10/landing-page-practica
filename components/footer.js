import Image from 'next/image'

export default function Footer() {
  return (
    <footer id='footer' className='p-4 bg-white dark:bg-gray-800'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <a
          href='#'
          className='flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'
        >
          <Image
            width={50}
            height={50}
            src='/apollo-logo-hd.png'
            className='h-10 w-10 mr-3'
            alt='apollosportguatire Logo'
          />
          ApolloSports
        </a>

        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400 mt-5'>
          ©2023{' '}
          <a href='#header' className='hover:underline'>
            ApolloSports™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
