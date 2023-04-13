import Image from 'next/image'

export default function Deportes() {
  const deportes = [
    { nombre: 'fútbol', url: '/img/futbol.svg', alt: 'logo de futbol' },
    { nombre: 'beisbol', url: '/img/beisbol.svg', alt: 'logo de beisbol' },
    { nombre: 'tennis', url: '/img/tennis.svg', alt: 'logo de tennis' },
    { nombre: 'voleibol', url: '/img/voleiball.svg', alt: 'logo de voleiball' },
    { nombre: 'Atletismo', url: '/img/atleta.svg', alt: 'logo de atleta' },
    { nombre: 'Zona fit', url: '/img/zonafit.svg', alt: 'logo de zona fit' },
  ]

  return (
    <section id='deporte' className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-8 lg:mb-12'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-white'>
            Deportes en ApolloSports
          </h2>
          <p className='sm:text-xl text-gray-100'>
            Aquí una lista de los deportes que se dan en el complejo deportivo
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 '>
          {deportes.map((deporte) => (
            <div key={deporte.nombre} className='bg-slate-800 p-5 rounded-lg'>
              <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-lg p-1 lg:h-14 lg:w-14 bg-slate-900'>
                <Image
                  width={100}
                  height={100}
                  className='w-full h-full'
                  src={deporte.url}
                  alt={deporte.alt}
                />
              </div>
              <h3 className='mb-2 text-xl font-bold dark:text-white uppercase'>
                {deporte.nombre}
              </h3>
              <div>
                <h4 className='uppercase font-bold'>Horarios</h4>
                <p className=' capitalize text-gray-200 dark:text-gray-200 tracking-widest'>
                  lunes a sabados |{' '}
                  <span className='font-black text-red-500'>7am / 8pm</span>
                </p>
                <p className=' capitalize text-gray-200 dark:text-gray-200 tracking-widest'>
                  Horarios domingos |{' '}
                  <span className='font-black text-red-500'>8am / 7pm</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
/*
  <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 '>
        <div className='mx-auto max-w-screen-sm text-center mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Deportes en ApolloSports
          </h2>
          <p className='font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400'>
            Aquí una lista de los deportes que se dan en el complejo deportivo
          </p>
        </div>
        <div className='grid grid-cols-3 gap-5 mb-6 lg:mb-16'>
          {deportes.map((deporte) => (
            <div
              key={deporte.nombre}
              className='items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700'
            >
              <Image
                width={200}
                height={100}
                className='w-full h-full rounded-l-lg object-cover'
                src={deporte.url}
                alt='Bonnie Avatar'
              />
              <div className='p-5'>
                <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white uppercase'>
                  <a href='#'>{deporte.nombre}</a>
                </h3>
                <span className='text-gray-500 dark:text-gray-400'>
                  Práctica {deporte.nombre} con nosotros!
                </span>
                <div>
                  <h3>Horarios:</h3>
                  <p className='mt-3 mb-4 font-light text-gray-500 dark:text-gray-400'>
                    lunes a sabado
                  </p>
                  <p className='mt-3 mb-4 font-light text-gray-500 dark:text-gray-400'>
                    Domingos
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
        <div className='max-w-screen-md mb-8 lg:mb-16'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
            Deportes en ApolloSports
          </h2>
          <p className='text-gray-500 sm:text-xl dark:text-gray-400'>
            Aquí una lista de los deportes que se dan en el complejo deportivo
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='64'
                height='64'
                fill='#fff'
                baseProfile='tiny'
                version='1.2'
                viewBox='-30 32 194 194'
                xmlSpace='preserve'
              >
                <path d='M67 35.6c-51.3 0-93 41.7-93 93s41.7 93 93 93 93-41.7 93-93-41.7-93-93-93zm28 33.3L69.7 56v-6.7c18.3.6 35.8 7.6 49.6 19.6H95zm30 5.5c8.3 8.9 14.3 19.4 17.9 31l-14.2 24.8-20.9-3.2-19-32.8 7.6-19.9c.1.1 28.6.1 28.6.1zM82.7 97.9l18.3 31.8-16.1 27.8H49.1L33 129.6l18.3-31.8h31.4zM64.3 56L39 68.9H14.6c13.8-12.1 31.3-19 49.6-19.6V56zM37.5 74.4l7.6 19.9L26.2 127l-20.8 3.2-14.4-25c3.6-11.5 9.7-22 18.1-30.8h28.4zM2.3 135.7l1.3 26.2-6.7 4c-6.2-11.5-9.4-24.3-9.4-37.4 0-5.2.5-10.6 1.7-15.7l13.1 22.9zM6 166.9l22.9 14.6 12.6 22.3C24.2 198 9.3 186.2-.4 170.6l6.4-3.7zm29.2 14.9l13.9-17.1h35.7l13.9 17.1-13.9 24c-5.9 1.4-11.8 2.1-17.9 2.2-6.1 0-12-.7-17.9-2.2l-13.8-24zm57.3 21.8l12.6-22L128 167l6.3 3.7c-9.7 15.4-24.5 27.1-41.8 32.9zm37.8-41.7l1.3-26.2 13.2-22.8c1 5.1 1.6 10.3 1.7 15.6 0 13.1-3.2 25.9-9.4 37.4l-6.8-4z'></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>Fútbol</h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z'></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>Legal</h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Protect your organization, devices and stay compliant with our
              structured workflows and custom permissions made for you.
            </p>
          </div>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
                <path d='M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z'></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              Business Automation
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Auto-assign tasks, send Slack messages, and much more. Now power
              up with hundreds of new templates to help you get started.
            </p>
          </div>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z'></path>
                <path
                  fill-rule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>Finance</h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Audit-proof software built for critical financial operations like
              month-end close and quarterly budgeting.
            </p>
          </div>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z'></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>
              Enterprise Design
            </h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Craft beautiful, delightful experiences for both marketing and
              product with real cross-company collaboration.
            </p>
          </div>
          <div>
            <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
              <svg
                className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </div>
            <h3 className='mb-2 text-xl font-bold dark:text-white'>Operations</h3>
            <p className='text-gray-500 dark:text-gray-400'>
              Keep your company’s lights on with customizable, iterative, and
              structured workflows built for all efficient teams and individual.
            </p>
          </div>
        </div>
      </div>
    </section>

    */
