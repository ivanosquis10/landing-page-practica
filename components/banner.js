export default function Banner() {
  return (
    <div className='relative isolate flex items-center bg-rose-950 gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1'>
      <div className='w-full justify-center flex flex-wrap items-center gap-x-4 gap-y-2'>
        <p className='uppercase font-bold leading-6 text-white flex '>
          Inscripciones activas
          <svg
            className='w-5 h-5 ml-2 -mr-1 hidden md:block'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </p>
        <p>Fútbol, Béisbol, Tennis, Voleibol</p>
        <a
          href='https://www.instagram.com/apollosportguatire/'
          target='_blank'
          className='flex-none rounded-full bg-rose-800 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-rose-700 '
        >
          Contactanos! <span aria-hidden='true'>&rarr;</span>
        </a>
      </div>
    </div>
  )
}
