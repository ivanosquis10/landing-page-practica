import Image from 'next/image'

export default function Hero() {
  return (
    <section id='hero' className=' dark:bg-gray-900 mt-16 md:mt-16 relative'>
      <div className=' grid md:justify-items-center md:grid-cols-2 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 '>
        <div className='mr-auto place-self-center '>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl dark:text-white'>
            Toma tu juego al siguiente nivel en{' '}
            <span className='text-red-600'>Apollo Sports</span>
          </h1>
          <p className='w-auto mb-6 font-light text-gray-50 lg:mb-8 md:text-lg lg:text-xl'>
            Ofrecemos instalaciones de primera calidad para fútbol, tenis,
            voleibol, béisbol y más deportes. Nuestro equipo de entrenadores te
            guiará y motivará a alcanzar tus objetivos. Ofrecemos un ambiente
            amigable y seguro para que disfrutes cada minuto de tu
            entrenamiento.{' '}
            <span className='text-red-500 font-bold tracking-wide'>
              ¡Ven a experimentar la pasión por el deporte en nuestro complejo
              deportivo!
            </span>
          </p>
          <div>
            <a
              href='#contacto'
              className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
            >
              Información
              <svg
                className='w-5 h-5 ml-2 -mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </a>
            <a
              href='#deporte'
              className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
            >
              Deportes
            </a>
          </div>
        </div>

        <div className='hidden md:block '>
          <Image
            width={450}
            height={100}
            src='/img/hero-img.jpg'
            className='object-cover rounded-full'
            alt='imagen logo del hero'
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}
/*
  
        */
